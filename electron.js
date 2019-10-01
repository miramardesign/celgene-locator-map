const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: '1920',
        height: '1080',
        kiosk: true,
        fullscreen: true,
        frame: false,
        webPreferences: {
            autoplayPolicy: 'no-user-gesture-required',
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
        },
    });

    win.loadURL(`file://${__dirname}/dist/celgene-locator-map/index.html`);

    //// uncomment below to open the DevTools.
   // win.webContents.openDevTools()

    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
