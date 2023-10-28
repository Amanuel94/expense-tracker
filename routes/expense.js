const express = require('express');
const auth = require('../middlewares/authentication');
const errorHandlerMiddleware = require('../middlewares/errorHandler');

const {getAllExpenses, getExpense, createExpense, updateExpense, deleteExpense} = require('../controllers/expenses');

const router = express.Router();
router.use(auth);
router.use(errorHandlerMiddleware);

router.route('/').get(getAllExpenses).post(createExpense);
router.route('/:id').get(getExpense).patch(updateExpense).delete(deleteExpense);

module.exports = router;