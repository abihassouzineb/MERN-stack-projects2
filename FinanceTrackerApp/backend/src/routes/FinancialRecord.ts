import express from "express";
import FinancialRecordModel from "../models/Financial-record";

const router = express.Router();

router.get(
  "/GetAll/:userId",
  async (req: express.Request, res: express.Response) => {
    try {
      const userId = req.params.userId;
      const records = await FinancialRecordModel.find({ userId: userId });

      res.send(records);
    } catch (error) {
      res.send(error);
    }
  }
);

router.post("/", async (req: express.Request, res: express.Response) => {
  try {
    const record = await FinancialRecordModel.create(req.body);
    res.send(record);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndUpdate(id, req.body);
    res.send(record);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const record = await FinancialRecordModel.findByIdAndDelete(id);
    res.send(record);
  } catch (error) {
    res.send(error);
  }
});

export { router as FinancialRecordRouter };
