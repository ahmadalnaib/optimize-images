const { app, BrowserWindow } = require('electron')


//set env
process.env.NODE_ENV='development';
const isDev=process.env.NODE_ENV !== 'production' ?true :false;


let mainWindow;

function createMainWindow()
{
  mainWindow=new BrowserWindow({
    title:"ImageShrink",
    width:500,
    height:600,
    icon:`${__dirname}/assets/Icon_256x256.png`,
    resizable:isDev
  })

  mainWindow.loadFile('./app/index.html');
}

app.on('ready',createMainWindow)
