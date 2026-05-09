const { hashIP } = require("./hash");
const { isNodeHealthy } = require("./healthCheck");
const { incrementRequest } = require("./metrics");

const nodes = [
    "Node-A",
    "Node-B",
    "Node-C"
];

function identifyNode(ip, node) {
    console.log(`Incoming IP: ${ip} -> Routed to: ${node}`);
}

function loadBalancer(ip) {

    // Filter healthy nodes
    const healthyNodes = nodes.filter(node =>
        isNodeHealthy(node)
    );

    if (healthyNodes.length === 0) {
        console.log("No healthy nodes available");
        return null;
    }

    // Hash IP
    const hash = hashIP(ip);

    // Choose node
    const index = hash % healthyNodes.length;

    const selectedNode = healthyNodes[index];

    // Update metrics
    incrementRequest(selectedNode);

    // Logging
    identifyNode(ip, selectedNode);

    return selectedNode;
}

module.exports = { loadBalancer };
