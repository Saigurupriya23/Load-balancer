function hashIP(ip) {

    let hash = 0;

    for (let i = 0; i < ip.length; i++) {
        hash = (hash * 31 + ip.charCodeAt(i)) % 100000;
    }

    return hash;
}

module.exports = { hashIP };
