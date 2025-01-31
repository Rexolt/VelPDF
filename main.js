const { app, BrowserWindow } = require("electron");
const path = require("path");
const { ipcMain } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: true, 
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), 
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile(path.join(__dirname, "web", "viewer.html"));
}

app.whenReady().then(() => {
  createWindow();
});


ipcMain.on("minimize-window", (event) => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on("maximize-window", (event) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

ipcMain.on("close-window", (event) => {
  BrowserWindow.getFocusedWindow().close();
});
