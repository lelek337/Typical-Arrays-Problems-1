exports.min = function min(array) {
    if (array == [] || array == undefined) {
        return 0;
    }
    let newMin = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < newMin) {
            newMin = array[i];
        }
    }
    return newMin;
};

exports.max = function max(array) {
    if (array == [] || array == undefined) {
        return 0;
    }
    let newMax = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > newMax) {
            newMax = array[i];

        }
    }
    return newMax;
};

exports.avg = function avg(array) {
    if (array == undefined || (array == [])) {
        return 0;
    }
    let newAvg = 0,
        sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    newAvg = sum / array.length;
    return newAvg;
};
console.log(console.log());
