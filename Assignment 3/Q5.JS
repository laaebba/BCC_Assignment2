var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var filtered = arr1.filter((item, index) => {
    console.log(
        item,
        index,
        arr1.indexOf(item),
        arr1.indexOf(item)==index,
    );
    return arr1.indexOf(item)==index
})

console.log(filtered);
