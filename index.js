const os = require('node:os')
const fs = require('fs')
const config = require('./config.json')
const defaultwindir = `C:\\Users\\${os.userInfo().username}\\AppData\\Roaming\\UNDERTALE`
const defaultlindir = `/home/${os.userInfo().username}/.config/UNDERTALE`
const username = os.userInfo().username
const platform = os.platform()
    var datetime = new Date();
    if (!config.backup){
        console.log("No backup location specified, using default for your OS")
        if (platform === "linux"){
            config.backup = `/home/${username}/undertale-backups`
            fs.mkdirSync(config.backup, { recursive: true })
        } else if (platform === "win32") {
            config.backup = `C:\\Users\\${username}\\undertale-backups`
                        fs.mkdirSync(config.backup, { recursive: true })
        } else if (platform === "darwin") {
            console.log("use a better os loser")
                process.exit()
        }else {
            console.log("what the hell is this os")
            process.exit()
        }}

if (!config.dir){
    if (platform === "linux"){
            config.dir = defaultlindir
        } else if (platform === "win32") {
            config.dir = defaultwindir
        }      }
      var backuplocation = config.backup + `/${datetime.toISOString().slice(0,10)}`
      fs.mkdirSync(backuplocation, { recursive: true })
    fs.cpSync(config.dir, backuplocation, { recursive: true })
    console.log("Backed up files to " + backuplocation)