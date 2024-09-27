import express from "express";
import { PORT } from "./config.js";
const app = express();

//Http route

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to MErn App')

})
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);

})