const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
    "mongodb+srv://solijonov95:sa199506%40%40@cluster0.lx8gpju.mongodb.net/Reja?retryWrites=true&w=majority"
mongodb.connect(
    connectionString, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succses");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3003;
        server.listen(PORT, function () {
        console.log(
            `The server is runnig successfully on part: ${PORT}, http://localhost:${PORT}`
        );
       });
      }
    }
);