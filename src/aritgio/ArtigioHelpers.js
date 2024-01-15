const path = window.require('path');
const fs = window.require('fs');
const remote = window.require("@electron/remote");
const hasEnv = remote.process.argv.find((x) => x.includes("-env="));

let isDev = false;
if(hasEnv) {
    isDev = hasEnv.split('=')?.[1] === "dev"
}

const root =  path.join();
const rootPath = path.resolve(root);


export const ArtigioHelpers = {
    getArtigioData: () => {
        const presentationPath =  path.join(rootPath, "content/presentation.json");
        console.log(presentationPath)
        try {
            return JSON.parse(fs.readFileSync(presentationPath, "utf-8"))
        }
        catch (e){
            throw new Error("cannot open file")
        }
    },
    getHilightConfig: () => {
        const hilightJsonPath =   path.join(rootPath, "hilight.json")
        console.log(hilightJsonPath);
        try {
            return JSON.parse(fs.readFileSync(hilightJsonPath, "utf-8"))
        }
        catch (e){
            throw new Error("cannot open file")
        }
    },
    getRootPath: () => {
        return rootPath
    },
    joinPath: (...args) => {
        return isDev ? path.join(rootPath,...args) : path.join(rootPath, "../../", ...args);
    }
}
