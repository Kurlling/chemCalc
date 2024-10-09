// const http = require("http");
// const path = require("path");

// // PORT
// const PORT = 3000;

// // server create
// const server = http.createServer((req, res) => {
//    if (req.url === "/") {
//       res.sendFile(path.join(__dirname, "home.html"));
//       res.end();
//    } else if (req.url === "/about" && req.method === "GET") {
//       res.write("This is about page.");
//       res.end();
//    } else {
//       res.write("Not Found!");
//       res.end();
//    }
// });

// // server listen port
// server.listen(PORT);

// console.log(`Server is running on PORT: ${PORT}`);

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "using")));


// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
