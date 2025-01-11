"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        title: "Calculator",
        width: 400,
        height: 600,
        resizable: false,
    });
    win.loadFile("index.html");
};
electron_1.app.whenReady().then(() => {
    createWindow();
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
