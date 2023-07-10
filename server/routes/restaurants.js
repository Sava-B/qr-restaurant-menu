const express = require("express");
const router = express.Router();
const restaurantsCtr = require("../controllers/restaurants");

router.get("/restaurants", restaurantsCtr.getAll);
router.get("/restaurants/:id", restaurantsCtr.getById);
router.post("/restaurants", restaurantsCtr.create);
router.put("/restaurants/:id", restaurantsCtr.update);
router.delete("/restaurants/:id", restaurantsCtr.delete);

module.exports = router;
