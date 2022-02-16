const express = require("express");
 
const app = express();
 
app.use(express.static(__dirname + "/dist/webclient-pz"));
app.use("/main", express.static(__dirname + "/dist/webclient-pz"));
app.use("/servers", express.static(__dirname + "/dist/webclient-pz"));
app.use("/mods", express.static(__dirname + "/dist/webclient-pz"));
app.use("/params", express.static(__dirname + "/dist/webclient-pz"));

app.listen(3000);