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
