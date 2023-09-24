const Revenues = require("../models/RevenueSchema");

const getAllRevenues = async (req, res) => {
    try {
        const revenues = await Revenues.find({});
        res.status(200).json({ revenues });
    }
    catch (error) {
        res.status(500).json({ msg: error });

    }
}

const getRevenue = async (req, res) => {
    try {
        const revenue = await Revenues.findOne({ _id: req.params.id });
        if (!revenue)
            return res.status(404).json({ msg: "id not found" });
        res.status(200).json(revenue);
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createRevenue = async (req, res) => {
    try {
        const revenue = await Revenues.create(req.body);
        res.status(201).json({ revenue });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateRevenue = async (req, res) => {
    try{
        const {id:revenueID} = req.params;
        const revenue  = await Revenues.findByIdAndUpdate({_id:revenueID}, req.body, {new:true, runValidators:true});
        
        if (!revenue){
            return res.status(404).json({msg:"id not found in database"});
        }
            res.status(200).json({revenue});
        
    }
    catch(err){
        res.status(500).json({msg:err});
    }
}

const deleteRevenue = async (req, res) => {

    try {
        const {id:revenueID} = req.params;
        const revenue = await Revenues.findOneAndDelete({_id:revenueID});
        if(!revenue){
            return res.status(404).json({msg:"id not found"})
        }
        res.status(200).json(revenue);
    }
    catch(error) {
        res.status(500).json({msg:error});
    }

}

module.exports = {
    getAllRevenues,
    getRevenue,
    createRevenue,
    updateRevenue,
    deleteRevenue
};