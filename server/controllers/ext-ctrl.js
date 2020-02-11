// const Ext = require('../models/ext-model')

getExtList = async (req, res) => {

    const ccxt = require ('ccxt');
    console.log (ccxt.exchanges);
    return res.status(200).json({ success: true, data: ccxt })

    // await Movie.find({}, (err, movies) => {
    //     if (err) {
    //         return res.status(400).json({ success: false, error: err })
    //     }
    //     if (!movies.length) {
    //         return res
    //             .status(404)
    //             .json({ success: false, error: `Movie not found` })
    //     }
    //     return res.status(200).json({ success: true, data: movies })
    // }).catch(err => console.log(err))
}

module.exports = {
    getExtList
}
