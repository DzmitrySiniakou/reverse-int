module.exports = function reverse (n) {
    let a = String(Math.abs(n))
    return +(a.split("").reverse().join(""));
}
