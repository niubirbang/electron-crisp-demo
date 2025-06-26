// CommonJS
const { app } = require('electron')
const { setID, createWindow } = require('@niubir/electron-crisp')
// ESM
// import { app } from 'electron'
// import { setID, createWindow } from '@niubir/electron-crisp'

app.whenReady().then(async () => {
  setID('2c8899b5-33ae-4f38-aef6-abb18f8d8f20')
  createWindow()
})