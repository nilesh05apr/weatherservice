
function logger(service) {
    let date = new Date();
    console.log(`${service} called at: ${date}`)
}

module.exports = logger;