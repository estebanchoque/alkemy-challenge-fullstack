const { Category } = require("../db");
const asyncWrapper = require("../middlewares/async-wrapper");
const { createCustomError } = require("../errors/custom-error");

const getAllCategories = asyncWrapper();

const getCategory = asyncWrapper();

const createCategory = asyncWrapper();

const updateCategory = asyncWrapper();

const deleteCategory = asyncWrapper();

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
