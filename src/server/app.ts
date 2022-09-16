import * as express from "express";
import { SERVER_PORT, BASE_URL } from "../config";
import routes from "./routes";
import * as morgan from "morgan";
import * as cookieParser from "cookie-parser";
import { DEBUG } from "../config/index";
import * as http from "http";
import * as bodyParser from "body-parser";
import  { Server } from "http";


let httpServer: Server;
export function start(): Server {
  const app = express();
  if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));

  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(BASE_URL, routes(express.Router()));
  app.use(function (err, req, res, next) {
    console.error(err);
    if (DEBUG) {
      return res
        .status(500)
        .send({ message: "Something broke!", error: err.message });
    }
    res.status(500).send("Something broke!");
  });;
  httpServer = http.createServer(app);

  // httpsServer.listen(5003,()=>console.log("listen to 5003"))
  httpServer.listen(SERVER_PORT, "localhost", () => {
    if (process.env.NODE_ENV !== "test") {
      console.log("---------------------------------------------------------");
      console.log(" ");
      console.log(`Shortener Service is listening on port ${SERVER_PORT}`);
      console.log(" ");
      console.log("---------------------------------------------------------");
    }
  });
  return httpServer;
}
export function close(): void {
  httpServer.close();
  // httpsServer.close();
}
