const mongoose = require('mongoose');

const connectDB = (url) =>{
return mongoose.connect(url,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify :false,
    useUnifiedTopology :true ,

    //Bunları deprecation hataları aldığımız için yaptık.
}).then(console.log('CONNECTED TO DB.'))
}

module.exports = connectDB
