import { app, BrowserWindow } from "electron";

const createWindow = () => {
    const win = new BrowserWindow({
        title:"Calculator",
        width: 400,
        height: 600,
        resizable: false,
    });
    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});