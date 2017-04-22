const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

/*const path = require('path')
const url = require('url')*/

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    "type": "",
    "height": 600,
    "resizable": false,
    "exeIcon": "icon.png",
    "transparent": false,
    "macIcon": "icon.png",
    "fullscreen": false,
    "x": 100,
    "maxHeight": "",
    "title": "DCRS",
    "minHeight": "",
    "skipTaskbar": false,
    "acceptFirstMouse": false,
    "frame": true,
    "y": 100,
    "darkTheme": false,
    "kiosk": true,
    "width": 800,
    "backgroundColor": "#000000",
    "alwaysOnTop": true,
    "show": true,
    "icon": "favicon.png",
    "webPreferences": {
      "preload": "",
      "textAreasAreResizable": true,
      "javascript": true,
      "webSecurity": true,
      "experimentalCanvasFeatures": false,
      "directWrite": true,
      "zoomFactor": 1.0,
      "allowRunningInsecureContent": false,
      "blinkFeatures": "",
      "allowDisplayingInsecureContent": false,
      "partition": "",
      "plugins": true,
      "webgl": true,
      "nodeIntegration": true,
      "webaudio": true,
      "experimentalFeatures": false,
      "images": true
    },
    "titleBarStyle": "default",
    "center": true,
    "minWidth": "",
    "maxWidth": "",
    "autoHideMenuBar": false,
    "disableAutoHideCursor": false,
    "useContentSize": false,
    "enableLargerThanScreen": false
  })
  // and load the index.html of the app.
  mainWindow.loadUrl('http://127.0.0.1:43110/1DCRSfb95muP5N78v1fQ8DN8CxbjEfXewT/ui/')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
