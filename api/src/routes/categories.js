const router = require("express").Router();
const handlers = require("../controllers/categories");

router.get("/", handlers.getAllCategories);
router.get("/:id", handlers.getCategory);
router.post("/", handlers.createCategory);
router.put("/:id", handlers.updateCategory);
router.delete("/:id", handlers.deleteCategory);

module.exports = router;
