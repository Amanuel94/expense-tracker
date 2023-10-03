const Revenues = require("../models/RevenueSchema");
const asyncWrapper = require("../middlewares/async");
const getAllRevenues = asyncWrapper(async (req, res) => {

    const revenues = await Revenues.find({});
    res.status(200).json({ revenues });
});

const getRevenue = asyncWrapper(async (req, res) => {

    const revenue = await Revenues.findOne({ _id: req.params.id });
    if (!revenue)
        return res.status(404).json({ msg: "id not found" });
    res.status(200).json(revenue);

});

const createRevenue = asyncWrapper(async (req, res) => {

    const revenue = await Revenues.create(req.body);
    res.status(201).json({ revenue });
});

const updateRevenue = asyncWrapper(async (req, res) => {
    const { id: revenueID } = req.params;
    const revenue = await Revenues.findByIdAndUpdate({ _id: revenueID }, req.body, { new: true, runValidators: true });

    if (!revenue) {
        return res.status(404).json({ msg: "id not found in database" });
    }
    res.status(200).json({ revenue });
});

const deleteRevenue = asyncWrapper(async (req, res) => {

    const { id: revenueID } = req.params;
    const revenue = await Revenues.findOneAndDelete({ _id: revenueID });
    if (!revenue) {
        return res.status(404).json({ msg: "id not found" })
    }
    res.status(200).json(revenue);


});

module.exports = {
    getAllRevenues,
    getRevenue,
    createRevenue,
    updateRevenue,
    deleteRevenue
};