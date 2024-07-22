/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via Vite');

import Phaser from "phaser";
import MainMenu from "./scenes/MainMenu";

const config = {
    type: Phaser.AUTO,
    parent: "app",
    width: 1920,
    height: 1080,
    // backgroundColor: "#35baf3",
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
    },
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    scene: [MainMenu],
};

export default new Phaser.Game(config);
