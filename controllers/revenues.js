const getAllRevenues = (req, res) =>{
    res.send("get all");
}

const getRevenue = (req, res) =>{
    res.send("get single");
}

const createRevenue = (req, res) =>{
    res.send("create");
}

const updateRevenue = (req, res) =>{
    res.send("update");
}

const deleteRevenue = (req, res) =>{
    res.send("get all");
}

module.exports = {
    getAllRevenues,
    getRevenue,
    createRevenue,
    updateRevenue,
    deleteRevenue
};