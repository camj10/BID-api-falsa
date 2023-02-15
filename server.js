const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(require("./routes/data"));

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on por ${server.address().port}!`)
);
