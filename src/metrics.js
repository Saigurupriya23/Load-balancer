const metrics = {
    "Node-A": 0,
    "Node-B": 0,
    "Node-C": 0
};

function incrementRequest(node) {
    metrics[node]++;
}

function showMetrics() {

    console.log("\nRequest Metrics:");

    for (const node in metrics) {
        console.log(`${node}: ${metrics[node]} requests`);
    }
}

module.exports = {
    incrementRequest,
    showMetrics
};
