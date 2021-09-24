/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var hash = (s) => {
    // do not use char diff as string wraps
    if (!s.length) {
        return '_';
    }
    const a = 'a'.charCodeAt(0);
    const offset = s.charCodeAt(0) - a;
    const hhh = [0];
    for (let i = 1; i < s.length; i++) {
        hhh.push((26 + s.charCodeAt(i) - a - offset) % 26);
    }
    return hhh.join('|');
}
var groupStrings = function(strings) {
    const map = {};
    strings.forEach(s => {
        const h = hash(s);
        map[h] = map[h] || [];
        map[h].push(s);
    });
    return Object.values(map);
};
