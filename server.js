const { loadBalancer } = require("./src/loadBalancer");

// Simulate requests
const requests = [
    "192.168.1.1",
    "10.0.0.1",
    "172.16.0.5",
    "192.168.1.1"
];

requests.forEach(ip => {
    loadBalancer(ip);
});
