const intersection = (...arrays) => {
    let result = [];
    let firstArray = arrays[0];
    for (let element of firstArray) {
        if (arrays.every(array => array.includes(element))) {
        result.push(element);
        }
    }
    return [...new Set(result)];
}