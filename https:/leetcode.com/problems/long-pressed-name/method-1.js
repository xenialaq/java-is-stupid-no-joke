/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let lastIdx = -1; // you can type this one indefinitely
    let nextIdx = 0; // or type next one, also updating next & last
    for (ch of typed) {
        // lastIdx from [-1 .. name len-1), ignored if -1
        // nextIdx from [0 .. name len)
        
        // move to new char before considering repeating char
        // e.g. typed = aleex, name = aleex, 2nd 'e' should be new char, not repeating char
        if (ch === name[nextIdx]) {
            lastIdx++;
            nextIdx++;
        } else if (lastIdx >= 0 && ch === name[lastIdx]) {
            // pass
        } else {
            return false;
        }
    }
    // at last see if lastIdx is the last index of ~typed~ NAME
    return nextIdx === name.length;
};
