const consts = require('./consts')
const handleComplains = function (complaint) {
    if (complaint.type === consts.types.finance) {
        console.log('Money doesn\'t grow on trees');
    }
    if (complaint.type === consts.types.weather) {
        console.log('it is my way of nature. Not much to be done');
    }
    if (complaint.type === consts.types.emotions) {
        console.log('it will pass, as all all things do, with time');
    }
}
module.exports.handleComplains = handleComplains