/**
 * Lumina - Patch @vscode/gulp-electron to make Windows 10 SDK / signtool optional
 */
const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../../node_modules/@vscode/gulp-electron/src/win32.js');

if (fs.existsSync(targetPath)) {
    let content = fs.readFileSync(targetPath, 'utf8');
    let modified = false;

    // 1. Make getSignTool return null when Windows SDK is missing instead of throwing
    if (content.includes('throw `There is no Windows 10 SDK installed at ${windowsSDKDir}.`;')) {
        content = content.replace(
            'throw `There is no Windows 10 SDK installed at ${windowsSDKDir}.`;',
            'return null;'
        );
        modified = true;
    }

    if (content.includes('throw `No supported version for signtool installed in ${windowsSDKDir}${latestWindowsSdkVersion}`;')) {
        content = content.replace(
            'throw `No supported version for signtool installed in ${windowsSDKDir}${latestWindowsSdkVersion}`;',
            'return null;'
        );
        modified = true;
    }

    // 2. Safeguard spawnSync(signToolPath)
    if (!content.includes('if (signToolPath) {')) {
        content = content.replace(
            `      const signToolPath = getSignTool();
      const {error} = spawnSync(signToolPath, ["remove", "/s", tempPath]);
      if (error) {
        return cb(error);
      }`,
            `      const signToolPath = getSignTool();
      if (signToolPath) {
        const {error} = spawnSync(signToolPath, ["remove", "/s", tempPath]);
        if (error) {
          return cb(error);
        }
      }`
        );
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(targetPath, content, 'utf8');
        console.log('[Lumina] Successfully applied optional signtool patch to @vscode/gulp-electron');
    }
}
