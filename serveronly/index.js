const app = require("../js/app");
const Log = require("../js/logger");

app.start().then((config) => {
	const bindAddress = config.address ? config.address : "127.0.0.1";
	const httpType = config.useHttps ? "https" : "http";
	Log.log(`\nReady to go! Please point your browser to: ${httpType}://${bindAddress}:${config.port}`);
});
