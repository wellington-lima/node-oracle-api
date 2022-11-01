import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.use(function(request, response, next) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(routes);

app.listen(port, () => console.log(`Server started on port -> ${port}`));