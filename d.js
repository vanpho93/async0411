const request = require('request');

function congPromise(a, b) {
    return new Promise((resolve, reject) => {
        if(isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request.get(`http://localhost:3000/tinh/CONG/${a}/${b}`, (err, response, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

function nhanPromise(a, b) {
    return new Promise((resolve, reject) => {
        if(isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request.get(`http://localhost:3000/tinh/NHAN/${a}/${b}`, (err, response, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

function chiaPromise(a, b) {
    return new Promise((resolve, reject) => {
        if(b == 0) return reject(new Error('Divide by zero'));
        if(isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
        request.get(`http://localhost:3000/tinh/CHIA/${a}/${b}`, (err, response, body) => {
            if (err) return reject(err);
            resolve(body);
        });
    });
}

// (4 + 5) * 6 / 2

congPromise(4, 5)
.then(tong => nhanPromise(tong, 6))
.then(tich => chiaPromise(tich, 2))
.then(kq => console.log(kq))
.then(x => console.log(x))
.catch(err => console.log(err.message));

// function tinhDienTichHinhThang(a, b, h) {
//     return congPromise(a, b)
//     .then(tong => nhanPromise(tong, h))
//     .then(tich => chiaPromise(tich, 2));
// }

async function tinhDienTichHinhThang(a, b, h) {
    const tong = await congPromise(a, b);
    const tich = await nhanPromise(tong, h);
    const kq = await chiaPromise(tich, 2);
    return kq;
}

// tinhDienTichHinhThang(4, 5, 6, (err, result) => console.log(result));
tinhDienTichHinhThang(4, 5, 6)
.then(kq => console.log(kq))
.catch(error => console.log(error))
