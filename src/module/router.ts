import Router from "koa-router";
import * as testController from "../controller/testController";
import * as mongoController from "../controller/mongoController";
import bodyParser from "koa-bodyparser";

const router = new Router();

router.get("/api/test", testController.get);
router.post("/api/getData", bodyParser(), testController.post);
router.get("/api/save-example", bodyParser(), mongoController.save);

export default router;