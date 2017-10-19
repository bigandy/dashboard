const io = require("socket.io")();

io.on("connection", client => {
	client.on("subscribeToTimer", interval => {
		console.log("client is subscribing to timer with interval ", interval);

		var count = 0;

		setInterval(() => {
			client.emit("timer", count);
			count++;
		}, interval);
	});
});

const port = 8000;
io.listen(port);
console.log(`listening on port ${port}`);
