const router = require('express').Router();
const File = require('../models/file');


router.get('/:uuid',async function(req,res){
    const file = await File.findOne({ uuid : req.params.uuid});
    if(!file){
        console.log(file);
        console.log('1234');
        return res.render('download',{error : 'Link has been expired'});
    }

    const filePath = `${__dirname}/../${file.path}`;
    console.log(filePath);
    res.download(filePath);
});

module.exports = router;