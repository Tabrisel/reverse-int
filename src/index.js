module.exports = function reverse(n) {
    let a = Math.abs(n);
    let result = String("");
    while (a != 0) {
        let last_char = String(a % 10);
        a = Math.floor(a / 10);
        result = result + last_char;
    }
    return result;
}
