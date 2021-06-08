const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const url = require('url');
const ipc = ipcMain;

let mainWindow,
	dev = false;

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
	dev = true;
}

if (process.platform === 'win32') {
	app.commandLine.appendSwitch('high-dpi-support', 'true');
	app.commandLine.appendSwitch('force-device-scale-factor', '1');
}

function createWindow(){
	mainWindow = new BrowserWindow({
		width: 1200,
		height: 680,
		minWidth: 940,
		minHeight: 560,
		frame: false,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	let indexPath;

	if (dev && process.argv.indexOf('--noDevServer') === -1) {
		indexPath = url.format({
			protocol: 'http:',
			host: 'localhost:8080',
			pathname: 'index.html',
			slashes: true,
		});
	}
	else {
		indexPath = url.format({
			protocol: 'file:',
			pathname: path.join(__dirname, 'dist', 'index.html'),
			slashes: true,
		});
	}

	mainWindow.loadURL(indexPath);

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();

		if (dev) {
			const {
				default: installExtension,
				REACT_DEVELOPER_TOOLS,
			} = require('electron-devtools-installer');

			installExtension(REACT_DEVELOPER_TOOLS).catch(err =>
				console.log('Error loading React DevTools: ', err),
			);
			mainWindow.webContents.openDevTools();
		}
	});

	/* mainWindow.on('closed', function(){
		mainWindow = null;
	}); */

	ipc.on('closed', () => {
		mainWindow.close();
	});

	ipc.on('minimized', () => {
		mainWindow.minimize();
	});

	ipc.on('maximized', () => {
		if (mainWindow.isMaximized()) {
			mainWindow.restore();
		}
		else {
			mainWindow.maximize();
		}
	});

	mainWindow.on('maximize', () => {
		mainWindow.webContents.send('isMaximized');
	});
	mainWindow.on('unmaximize', () => {
		mainWindow.webContents.send('isRestore');
	});
}

const NOTIFICATION_TITLE = 'Starting';
const NOTIFICATION_BODY = 'The program is starting';

function showNotification(){
	new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.whenReady().then(showNotification);

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
