// ===============variable=================

// const test = 'hello miya vai';
// console.log(typeof test)

// const number = '71.52';
// const number2 = '7111';
// console.log(parseFloat(number2))
// console.log(Math.ceil(number))
// console.log(parseFloat(number))

// =================================condition====================================
// const hero = 'sakib khan';
// if (hero === 'sakib khan') {
//     console.log('i am the king khan. king of dhallywood')
// }
// else {
//     console.log('i am not sakib khan i am sakib al hasan')
// }

// const nishat = 200;
// if (nishat >= 500) {
//     console.log('amer jonno biriyani aniba')
// }
// else {
//     console.log('vat r vorta nia coila aso')
// }

// const tamim = 82;
// if (tamim > 0) {
//     if (tamim >= 80) {
//         console.log('i am from nested')
//     }
// }
// else {
//     console.log('mark can not be negetive')
// }
// const result = 29;
// if (result >= 33 && result <= 39) {
//     console.log('you are failed')
// }


//========================switch===================================
// ------- case break , default -----------
/* const name = 'rahim';
switch (name) {
    case 'rahim': console.log('wow its rahim');
        break;
    case 'rubel': console.log('tmi rahim na');
        break;
    default: console.log('who are you')
} */

// =====================array============================
// const array = ['rahim', 12, 44, 77, true, 99, 'jamila'];

// console.log(array[3])
// console.log(array[2])
// console.log(array[5])

// array.push('rahima')
// array.pop()
// array.shift()
// array.unshift(1000000000000)
// array.reverse()
// console.log(array.includes('rahim'))
// console.log(array)

// ==============================loop============================
// const i = 0;
// while (i < 10) {
//     i++
//     console.log(i)
// }

// for (let i = 0; i < 10; i++) {
//     console.log('lera bera')
// }

// for (let i = 50; i >= 0; i--) {
//     console.log(i)
// }


// largest string element chacking 
const friends = ['rahim', 'karim', 'sadek', 'aj', 'diudar', 'raishaaaa'];
console.log(friends)

// let longest = friends[0]
// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];
//     // console.log(element)
//     if (element.length > longest.length) {
//         longest = element
//     }
// }
// console.log(longest)

function getLongestElement(friends) {
    let longest = friends[0];
    for (let i = 0; i < friends.length; i++) {
        let element = friends[i]
        if (element.length > longest.length) {
            longest = element
        }
    }
    return longest;
}
const result = getLongestElement(friends);
console.log(result)

const numbers = [1, 3, 5, 7, 9, 33, 22, 66, 88, 99, 44, 55, 77]

function checkLargeNumber(numbers) {
    let largeNumber = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number > largeNumber) {
            largeNumber = number
        }
    }
    return largeNumber
}
console.log(checkLargeNumber(numbers))

