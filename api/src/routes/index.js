const router = require("express").Router();

const operationsRouter = require("./operations");
const categoriesRouter = require("./categories");

router.use("/operations", operationsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
