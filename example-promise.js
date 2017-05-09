// function getTempCallback(location, callback) {
//     callback(undefined, 44);
//     callback('Your shithole was not found');
// }
//
// getTempCallback('Some shit hole', function (err, temp) {
//     if (err) {
//         console.log('Some error', err);
//     } else {
//         console.log('Success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         resolve(79);
//         reject('Your shithole was not found')
//     });
// }
//
// getTempPromise('Some shithole').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// });

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve (a + b)
        } else {
            reject ('Some of the arguments is not a number');
        }
    })
}

addPromise(7, '').then(function (temp) {
    console.log('Success', temp);
}, function (err) {
    console.log('Some shithole', err);
});