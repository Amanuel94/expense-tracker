const express = require('express');
const {getAllRevenues, getRevenue, createRevenue, updateRevenue, deleteRevenue} = require('../controllers/revenues');
const router = express.Router();

router.route('/').get(getAllRevenues).post(createRevenue);
router.route('/:id').get(getRevenue).patch(updateRevenue).delete(deleteRevenue);

module.exports = router;