const request = require('request');

function cong(a, b, cb) {
    if(isNaN(a) || isNaN(b)) return cb(new Error('Type error'), null);
    request.get(`http://localhost:3000/tinh/CONG/${a}/${b}`, (err, response, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    if(isNaN(a) || isNaN(b)) return cb(new Error('Type error'), null);
    request.get(`http://localhost:3000/tinh/NHAN/${a}/${b}`, (err, response, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    if(isNaN(a) || isNaN(b)) return cb(new Error('Type error'), null);
    if(b == 0) return cb(new Error('Divide by zero error'), null);
    request.get(`http://localhost:3000/tinh/CHIA/${a}/${b}`, (err, response, body) => {
        if (err) return cb(err, null);
        cb(null, body);
    });
}

// (4 + 5) * 6 / 2
function tinhDienTichHinhThang(a, b, h, cb) {
    cong(a, b, (err, tong) => {
        if (err) return cb(err, null);
        nhan(tong, h, (err, tich) => {
            if (err) return cb(err, null);
            chia(tich, 2, (err, kq) => {
                if (err) return cb(err, null);
                cb(null, kq);
            });
        });
    });
}

tinhDienTichHinhThang(4, 5, 12, (err, result) => {
    if (err) return console.log(err.message);
    console.log(result);
});
