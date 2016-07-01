module.exports = {
	rules: [
		{
			pattern: /\/api\/getHomeMain.php\?reqtype=refresh$/,
			respondwidth: './homeMain.json'
		}
	]
};
