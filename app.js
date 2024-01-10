const express = require(`express`);

//to parse requests with JSON payloads
const app = express ();
app.use(express.json());

//code to define the server
const PORT = process.env.PORT || 3000;

// set up the server to listen on the specified port
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

// response.send(status) is now a function that takes the JSON object as the argument.

app.get(`/status`, (request, response) => {
   const status = {
      Status: `Running`
   };
   response.send(status);
});