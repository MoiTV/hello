const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 0, 3, 9, 5];

function equalNumber(arr1, arr2) {
    const sameNumber = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sameNumber.push(arr2[j]);
            }
        }
    }

    return sameNumber;
}

console.log(equalNumber(array1, array2));