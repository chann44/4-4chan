import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/post";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use("/", router);

export default app;
