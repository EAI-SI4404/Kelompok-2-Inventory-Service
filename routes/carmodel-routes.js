import express from 'express';
import { getAllCarmodels, addCarmodel, editCarmodel, deleteCarmodel, getCarmodelById, searchCarmodel } from '../controllers/carmodel-controller';

const router = express.Router();

router.get("/", getAllCarmodels);
router.get("/:id", getCarmodelById);
router.post("/add", addCarmodel);
router.post("/search", searchCarmodel);
router.put("/edit/:id", editCarmodel);
router.delete("/delete/:id", deleteCarmodel);


export default router;