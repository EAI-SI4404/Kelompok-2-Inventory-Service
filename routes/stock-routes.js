import express from 'express';
import { getAllStock, addstock, editstock, deleteStock, getStockId, searchStock  } from '../controllers/stock-controller';

const router = express.Router();

router.get("/", getAllStock);
router.get("/:id", getStockId);
router.post("/add", addstock);
router.post("/search", searchStock);
router.put("/edit/:id", editstock);
router.delete("/delete/:id", deleteStock);

export default router;