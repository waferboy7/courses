function add10Percent(array) {
    return array.map((number) => number += number * 0.1);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(add10Percent(array));