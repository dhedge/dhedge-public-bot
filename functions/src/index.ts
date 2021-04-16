import * as functions from "firebase-functions";
import { trade } from "./services/trade";

export const test = functions.https.onRequest((request, response) => {
  response.send("OK");
});

export const executeTrade = functions.https.onRequest(async (req, res) => {
  if (typeof req.query.from === "undefined") {
    res.status(400).send({ status: "fail", msg: "Please send from" });
    return;
  }
  if (typeof req.query.to === "undefined") {
    res.status(400).send({ status: "fail", msg: "Please send to" });
    return;
  }
  if (typeof req.query.amount === "undefined") {
    res.status(400).send({ status: "fail", msg: "Please send portion" });
    return;
  }
  try {
    await trade(
      req.query.from as string,
      req.query.to as string,
      req.query.amount as string
    );
    res.status(200).send("OK");
  } catch (err) {
    res.status(400).send({ status: "fail", msg: err });
  }
});
