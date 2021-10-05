import createDatabaseConnection from "./database.js";
import createWebServer from "./webserver.js";


function createCore() {
    const database = createDatabaseConnection();
    const webserver = createWebServer();

    function start() {
        console.log('> [core] Starting');
        console.log('> [core] Starting done! System running!');
    }

    function stop() {
        console.log('> [core] Stopping...');
        console.log('> [core] Stopping done!');
    }

    return {
        start,
        stop
    }
}
export default createCore;