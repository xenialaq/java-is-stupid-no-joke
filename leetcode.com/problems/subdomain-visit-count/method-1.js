/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map();
    cpdomains.map((cpdomain) => {
        const [times, fqdn] = cpdomain.split(/\s/);
        let part = fqdn + '.';
        while (!!part) {  
            if (!map.has(part)) {
                map.set(part, Number(times));
            } else {
                map.set(part, map.get(part) + Number(times));
            }
            part = part.replace(/^[^\.]+\./g, '');
        }
    });
    const ret = [];
    map.forEach((times, fqdnDot) => { ret.push(`${times} ${fqdnDot.slice(0, -1)}`) });
    return ret;
};
