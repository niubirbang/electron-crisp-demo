// CommonJS
const { app } = require('electron')
const { setCrisp, setCrispUser, openCrisp } = require('@niubir/electron-crisp')

// ESM
// import { app } from 'electron'
// import { setCrisp, setCrispUser, openCrisp } from '@niubir/electron-crisp'

const crispID = '2c8899b5-33ae-4f38-aef6-abb18f8d8f20'
const crispOptions = {
  title: '奇遇兔',
  theme: 'pink',
}
const crispWindowOptions = {
  width: 400,
  height: 600,
  maxWidth: 400,
  maxHeight: 600,
  title: '奇遇兔',
}

const user = {
  email: 'Bob@gmail.com',
  phone: '+18888888888',
  nickname: 'Bob',
  company: 'Crisp Electron Demo',
  session: {
    id: 'USER_UNIQUE_ID_001',
    identity: 'tourist',
    level: 'free',
  },
}

app.whenReady().then(async () => {
  setCrisp(crispID, crispOptions)
  setCrispUser(user)
  openCrisp(crispWindowOptions)
})