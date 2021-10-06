import createDatabaseConnection from "./database.js";
import createWebServer from "./webserver.js";


function createCore() {
    const database = createDatabaseConnection();
    const webserver = createWebServer();

    function start() {
        console.log('> [core] Starting');
        database.start();
        webserver.start();
        console.log('> [core] Starting done! System running!');
    }

    function stop() {
        console.log('> [core] Stopping...');
        webserver.stop();
        database.stop();
        console.log('> [core] Stopping done!');
    }

    return {
        start,
        stop
    }
}
export default createCore;