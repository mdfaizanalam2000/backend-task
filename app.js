const express = require("express");
const app = express();
const port = 80;
require("./db/server");

app.use(express.json());
app.use(require("./routes"));

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})