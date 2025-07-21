import express, { NextFunction, Response, Request } from "express";
import "dotenv/config";
import { Env } from "./config/env.config";
import cors from "cors";
import { HTTPSTATUS } from "./config/http.config";

const app = express();
const BASE_PATH = Env.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(HTTPSTATUS.OK).json({
    message: "all is good",
  });
});

app.listen(Env.PORT, async () => {
  console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
});
