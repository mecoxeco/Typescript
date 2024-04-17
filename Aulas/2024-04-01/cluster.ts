const os = require('node:os');
const cluster = require('node:cluster');

const runPrimaryProcess = () => {
    const processCount = os.cpus().lenght;
    console.log(`Primary ${process.pid} is running`)
    console.log(`Forking sever with ${processCount} process`)

    for (let index = 0); index < processCount; index++) cluester.fork();
},
const runWorkerProcess = async () => {
    await import('/main')
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();