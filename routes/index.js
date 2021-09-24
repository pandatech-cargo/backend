const router = require("express").Router();

const trucksRouter = require("./trucks");

router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.use("/trucks", trucksRouter);

module.exports = router;
