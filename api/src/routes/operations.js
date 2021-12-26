const router = require("express").Router();
const handlers = require("../controllers/operations");

router.get("/", handlers.getAllOperations);
router.get("/:id", handlers.getOperation);
router.put("/:id", handlers.updateOperation);
router.post("/", handlers.createOperation);
router.delete("/:id", handlers.deleteOperation);

module.exports = router;
