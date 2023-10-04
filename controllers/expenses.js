const Expenses = require("../models/ExpenseSchema");
const asyncWrapper = require('../middlewares/async');
const { createCustomAPIError } = require('../errors/custom-error');

const getAllExpenses = asyncWrapper(async (req, res) => {
    const expenses = await Expenses.find({});
    res.status(200).json({ expenses });
})

const getExpense = asyncWrapper(async (req, res, next) => {

    const expense = await Expenses.findOne({ _id: req.params.id });
    if (!expense)
        return next(createCustomAPIError("id not found", 404))
    res.status(200).json(expense);
});

const createExpense = asyncWrapper(async (req, res) => {

    const expense = await Expenses.create(req.body);
    res.status(201).json({ expense });

});

const updateExpense = asyncWrapper(async (req, res) => {
    const { id: expenseID } = req.params;
    const expense = await Expenses.findByIdAndUpdate({ _id: expenseID }, req.body, { new: true, runValidators: true });

    if (!expense) {
        return next(createCustomAPIError("id not found", 404))
    }
    res.status(200).json({ expense });
});

const deleteExpense = asyncWrapper(async (req, res) => {
    const { id: expenseID } = req.params;
    const expense = await Expenses.findOneAndDelete({ _id: expenseID });
    if (!expense) {
        return next(createCustomAPIError("id not found", 404))
    }
    res.status(200).json(expense);
});

module.exports = {
    getAllExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
};