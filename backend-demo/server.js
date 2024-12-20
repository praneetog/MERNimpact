let http = require('http');
let port = 8000;
let app = http.createServer();

app.listen(port, () => {
  console.log(`server started on ${port}`);
});