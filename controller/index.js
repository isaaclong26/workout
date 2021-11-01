const router=require("express").Router();
const apiRoutes = require('./api');
const path = require("path")
router.use('/api', apiRoutes);

router.use('/exercise', async (req,res )=>{
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
})
router.use('/stats', async (req,res )=>{
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})


module.exports = router;
