const express = require("express");
const router = express.Router();
const TruckRepository = require("../repository/truck");

router.get("/:lat/:lng", (req, res) => {
  const truckRepository = new TruckRepository();

  truckRepository
    .findByLocation(req.params.lat, req.params.lng)
    .then(result => {
      res.json(result.rows);
    })
    .catch(() => {
      res
        .status(404)
        .json({ code: 404, message: "Unable to find food truck." });
    });
});

router.get("/", (req, res) => {
  const truckRepository = new TruckRepository();

  truckRepository
    .findAll()
    .then(result => {
      res.json(result.rows);
    })
    .catch(() => {
      res
        .status(404)
        .json({ code: 404, message: "Unable to find food trucks." });
    });
});

module.exports = router;
