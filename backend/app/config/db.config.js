module.exports = {
	//url: "mongodb://mongo:27017/test"
	url: process.env.MONGO_URL || "mongodb://localhost:27017/test"
};
