const express = require("express");
const fs = require("fs");



// =============================================================
let app = express();
let PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


require("./routing/html-routes")(app);
require("./routing/api-routes")(app);


// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
