const { Operation, Category } = require("../db");
const asyncWrapper = require("../middlewares/async-wrapper");
const { createCustomError } = require("../errors/custom-error");

const getAllOperations = asyncWrapper(async (req, res) => {
  const operations = await Operation.findAll();
  res.status(200).json({ results: operations });
});

const getOperation = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const operation = await Operation.findByPk(id);
  if (!operation) {
    return next(createCustomError(404, `Operation with ID ${id} not found`));
  }
  res.status(200).json(operation);
});

const createOperation = asyncWrapper(async (req, res, next) => {
  const { category, ...operation } = req.body;
  const createdOperation = await Operation.create({ ...operation });
  if (category) {
    const categoryFound = await Category.findAll({
      where: { name: category },
    });
    await createdOperation.addCategory(categoryFound);
  }
  res.status(200).json({
    msg: "Operation created successfully",
    operation: createdOperation,
  });
});

const updateOperation = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const operation = await Operation.findByPk(id);
  if (!operation) {
    return next(createCustomError(404, `Operation with ID ${id} not found`));
  }
  await operation.update({ ...req.body });
  res.status(200).json({
    msg: `Operation with ID ${id} updated successfully`,
    operation,
  });
});

const deleteOperation = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const operation = await Operation.findByPk(id);
  if (!operation) {
    return next(createCustomError(404, `Operation with ID ${id} not found`));
  }
  await operation.destroy();
  res.status(200).json({ msg: `Operation with ID ${id} deleted successfully` });
});

module.exports = {
  getAllOperations,
  getOperation,
  createOperation,
  updateOperation,
  deleteOperation,
};
