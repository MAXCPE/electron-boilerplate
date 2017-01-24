/*jshint esversion: 6 */

const { app, BrowserWindow } = require('electron')
const ipc = require('electron').ipcMain
const url = require('url')
let win

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

// Live reload for dev
require('electron-reload')(__dirname)

/**
 * Create our window for the application
 */
function createWindow() {
    // Our window's parameters
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        resizable: true,
        minWidth: 480,
        minHeight: 400,
        backgroundColor: '#333333',
        frame: false // Removes the classic frame
    })

    // Loads our html file for the window
    win.loadURL(url.format({
        pathname: __dirname + '/views/index.html',
        protocol: 'file:',
        slashes: true
    }))

    // Open Chrome Dev Tools by default
    //win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}