const getAllExpenses = (req, res) =>{
    res.send("get all");
}

const getExpense = (req, res) =>{
    res.send("get single " + req.params.id);
}

const createExpense = (req, res) =>{
    res.send("create");
}

const updateExpense = (req, res) =>{
    res.send("update " + req.params.id);
}

const deleteExpense = (req, res) =>{
    res.send("delete " + + req.params.id);
}

module.exports = {
    getAllExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
};