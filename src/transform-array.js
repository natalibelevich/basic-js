module.exports = function transform(arr) {
    console.log(arr);
    if (!Array.isArray(arr)) {
        throw new Error()
    }
    const newArray = [];

    for (let i = 0; i < arr.length;i++) {
        const element = arr[i];
        if (element === '--discard-next') {
            i++;
            continue;
        } else if (element === '--discard-prev') {
            if(i===0) {
                continue;
            }
            newArray.pop();
            continue;
        } else if (element === '--double-next') {
            if(i+1 === arr.length) {
                continue;
            }
            newArray.push(arr[i+1]);
            continue;
        } else if (element === '--double-prev') {
            if(i===0) {
                continue;
            }
            newArray.push(arr[i-1]);
            continue;
        }
        newArray.push(element)
    }
    return newArray;
};
