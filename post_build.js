const path = require('path');
const fs = require('fs');
const fse = require('./node_modules/fs-extra')

const packageName = process.env.npm_package_name;
const platform = process.platform
const packageArch = process.arch;

const packageToCopy = [
    "@electron",
    "@serialport",
    "electron-is-dev",
    "electron-is-packaged",
    "electron-root-path",
    "node-gyp-build",
]

const extend = []
const fullPackageName = packageName + '-' + platform + '-' + packageArch;

function copyHilightJson() {
    const sourcePath = path.join(__dirname, "hilight.prod.json");
    const destPath = path.join(__dirname, "packages", fullPackageName, "hilight.json");

    fs.copyFileSync(sourcePath, destPath);
}

function copyNodeModules() {
    // set source package path
    const sourcePath = path.join(__dirname, "node_modules");
    // set destination package path
    const packagesPath = path.join(__dirname, "packages", fullPackageName, "resources", "app", "node_modules")
    try {
        // make catalog
        fs.mkdirSync(packagesPath);
        const packages = [...packageToCopy, ...extend];
        packages.forEach(function(package){
            const packageFullPath = path.join(sourcePath, package)
            const destFullPath = path.join(packagesPath, package);
            if(fs.existsSync(packageFullPath)) {
                fse.copySync(packageFullPath, destFullPath, { override: true }, function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("success!");
                    }
                })
            }
        })
    } catch (e) {throw "katalog juz istnieje" }
}

function copyContentCatalog() {
    const sourcePath = path.join(__dirname, "content");
    const destPath = path.join(__dirname, "packages", fullPackageName, "content");
    try {
        fs.mkdirSync(destPath);
        fse.copySync(sourcePath, destPath, { override: true }, function (err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log("success !");
            }
        })
    }
    catch (e) { throw "katalog juz intnieje"}
}

copyNodeModules();
copyHilightJson();
copyContentCatalog();
