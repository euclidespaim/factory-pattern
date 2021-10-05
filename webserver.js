function createWebServer() {
    function start() {
        console.log('> [webserver] Starting...');
        console.log('> [webserver] Waiting ports be available...');
        console.log('> [webserver] Starting done!');
    }

    function stop() {
        console.log('> [webserver] Stopping...');
        console.log('> [webserver] Gracefully waiting for all clients...');
        console.log('> [webserver] Closing all ports...');
        console.log('> [webserver] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createWebServer;