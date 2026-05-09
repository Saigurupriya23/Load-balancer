const nodeHealth = {
    "Node-A": true,
    "Node-B": true,
    "Node-C": true
};

function isNodeHealthy(node) {
    return nodeHealth[node];
}

function failNode(node) {
    nodeHealth[node] = false;
}

function recoverNode(node) {
    nodeHealth[node] = true;
}

module.exports = {
    isNodeHealthy,
    failNode,
    recoverNode
};
