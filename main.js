const { app, BrowserWindow } = require("electron");
const path = require("path");
const { ipcMain } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: true, 
    icon: path.join(__dirname, 'assets', 'favicon-96x96.png'),
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

let tray = null;
app.whenReady().then(() => {
  tray = new Tray(path.join(__dirname, 'assets', 'tray-icon.png')); 
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Kilépés', role: 'quit' }
  ]);
  tray.setToolTip('VelPDF');
  tray.setContextMenu(contextMenu);
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
