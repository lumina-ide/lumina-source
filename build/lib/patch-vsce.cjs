/**
 * Lumina - Patch @vscode/vsce to tolerate npm list ELSPROBLEMS exit codes on modern npm
 */
const fs = require('fs');
const path = require('path');

const vsceNpmPath = path.resolve(__dirname, '../node_modules/@vscode/vsce/out/npm.js');

if (fs.existsSync(vsceNpmPath)) {
    let content = fs.readFileSync(vsceNpmPath, 'utf8');
    let modified = false;

    // 1. Ensure child_process.exec attaches stdout and stderr to the error object
    if (!content.includes('err.stdout = stdout;')) {
        content = content.replace(
            `            if (err) {
                return e(err);
            }`,
            `            if (err) {
                err.stdout = stdout;
                err.stderr = stderr;
                return e(err);
            }`
        );
        modified = true;
    }

    // 2. Ensure getNpmDependencies recovers stdout when ELSPROBLEMS occurs
    if (!content.includes('err.stderr?.includes(\'ELSPROBLEMS\')')) {
        content = content.replace(
            `.then(() => exec('npm list --production --parseable --depth=99999 --loglevel=error', { cwd, maxBuffer: 5000 * 1024 }))`,
            `.then(() => exec('npm list --production --parseable --depth=99999 --loglevel=error', { cwd, maxBuffer: 5000 * 1024 })
            .catch(err => {
                if (err && err.stdout && (err.stderr?.includes('ELSPROBLEMS') || err.stdout.length > 0)) {
                    return { stdout: err.stdout, stderr: err.stderr };
                }
                throw err;
            }))`
        );
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(vsceNpmPath, content, 'utf8');
        console.log('[Lumina] Successfully applied ELSPROBLEMS patch to @vscode/vsce');
    }
}
