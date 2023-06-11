import express from 'express';
import { getAllBrands, addbrand, getBrandId, editbrand, deleteBrand, search } from '../controllers/brand-controller';

const router = express.Router();

router.get("/", getAllBrands);
router.get("/:id", getBrandId)
router.post("/search", search);
router.post("/add", addbrand);
router.put("/edit/:id", editbrand);
router.delete("/delete/:id", deleteBrand);

export default router;