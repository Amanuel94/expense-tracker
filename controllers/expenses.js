const Expenses = require("../models/ExpenseSchema");

const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expenses.find({});
        res.status(200).json({ expenses });
    }
    catch (error) {
        res.status(500).json({ msg: error });

    }
}

const getExpense = async (req, res) => {
    try {
        const expense = await Expenses.findOne({ _id: req.params.id });
        if (!expense)
            return res.status(404).json({ msg: "id not found" });
        res.status(200).json(expense);
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createExpense = async (req, res) => {
    try {
        const expense = await Expenses.create(req.body);
        res.status(201).json({ expense });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateExpense = async (req, res) => {
    try{
        const {id:expenseID} = req.params;
        const expense  = await Expenses.findByIdAndUpdate({_id:expenseID}, req.body, {new:true, runValidators:true});
        
        if (!expense){
            return res.status(404).json({msg:"id not found in database"});
        }
            res.status(200).json({expense});
        
    }
    catch(err){
        res.status(500).json({msg:err});
    }
}

const deleteExpense = async (req, res) => {

    try {
        const {id:expenseID} = req.params;
        const expense = await Expenses.findOneAndDelete({_id:expenseID});
        if(!expense){
            return res.status(404).json({msg:"id not found"})
        }
        res.status(200).json(expense);
    }
    catch(error) {
        res.status(500).json({msg:error});
    }

}

module.exports = {
    getAllExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
};