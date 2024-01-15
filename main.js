const { app, BrowserWindow, screen, ipcMain } = require('electron');
const remoteMain = require('@electron/remote/main');


const path = require('path');
const isDev = app.commandLine.getSwitchValue("env") === "dev"

remoteMain.initialize();

function createWindow() {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        fullscreen: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false ,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true,
            webSecurity: false
        },
    })

    if(isDev)
        win.webContents.openDevTools();

    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, "./build/index.html#")}`
    )

    remoteMain.enable(win.webContents);
}

app.on('ready', createWindow);

app.on('window-all-closed', function (){
    if(process.platform !== "darwin") {
        app.quit();
    }
})

app.on("activate", function() {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})

ipcMain.on('getIsDev', (event, arg) => {
    event.returnValue = isDev
});
