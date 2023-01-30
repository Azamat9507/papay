console.log("web serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");


let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session") (session);
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: "sessions",
});



// Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         cookie: {
//             maxAge: 1000 * 60 * 30, // for 30 min
//         },
//         store: store,
//         resave: true,
//         saveUninitialized: true,
//     })
// );

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.use("/resto", router_bssr);
app.use("/", router);

module.exports = app;