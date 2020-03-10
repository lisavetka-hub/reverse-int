module.exports = function reverse(n) {
    let string;

    string = String(Math.abs(n))
        .split("")
        .reverse()
        .join("");
    return string;
};
