import * as dbTest from "../mongooseTest";
import * as request from "supertest"
import Url from "../../models/url";
import * as app from "../../server/app";
import { BASE_URL } from "../../config";
import { Server } from "http";

const urls =[
    "https://test.event.com/learn/javascript"
]

  
describe('POST /generate', () => {
    let server: Server;
    let mongoServer;
    beforeAll(async () => {
        mongoServer = dbTest.connect();
        server = app.start();
      });
      afterEach(async () => {
        await Url.deleteMany({});
      });
      afterAll(async () => {
        mongoServer.stop();
        app.close();
      });
    
    it("should be able to generate new short url", async () => {
        const res = await request(server)
          .post(`${BASE_URL}/generate`)
          .send({url:urls[0]});
        expect(res.status).toBe(200);
        console.log(res,"--------");
        
      });
  })