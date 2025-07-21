import express, { NextFunction, Response, Request } from "express";
import "dotenv/config";
import { Env } from "./config/env.config";
import cors from "cors";
import { HTTPSTATUS } from "./config/http.config";
import { errorhandler } from "./middlewares/errorHandler.middleware";
import { BadRequestException } from "./utils/app-error";
import { asyncHandler } from "./middlewares/assyncHandler.middleware";

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

app.get("/", asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
  throw new BadRequestException ("this is bad req test")
  res.status(HTTPSTATUS.OK).json({
    message: "all is good",
  });
})
);
app.use(errorhandler);

app.listen(Env.PORT, async () => {
  console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
});
