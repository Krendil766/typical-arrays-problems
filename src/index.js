exports.min = function min(array) {
    return array != undefined && array.length != 0 ? Math.min(...array) : 0;
}

exports.max = function max(array) {
    return array != undefined && array.length != 0 ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
    return array != undefined && array.length != 0 ? array.reduce((aver, item) => aver += item, 0) / array.length : 0
}