import WSAvcPlayer from 'h264-live-player';

const videoOptions = {
    width: 960,
    height: 540
};

function setupClient(canvas) {
    const { hostname, protocol } = window.location;
    const port = protocol === 'https:' ? 8081 : 8080;
    const wsProtocol = protocol === 'https:' ? 'wws:' : 'ws:';
    const videoUrl = `${wsProtocol}//${hostname}:${port}`;

    const webSocket = new WebSocket(videoUrl, 'echo-protocol');
    webSocket.binaryType = "arraybuffer";

    const wsavc = new WSAvcPlayer(canvas, "webgl", 1, 35);
    wsavc.initCanvas(videoOptions.width, videoOptions.height);

    webSocket.onopen = () => {
        console.log('socket is connected')

        webSocket.send(JSON.stringify({
            name: 'camera',
            state: 'on',
            options: videoOptions
        }));
    }
    
    webSocket.onmessage = (evt) => {
        if(typeof evt.data == "string") return;
    
        var frame = new Uint8Array(evt.data);
        wsavc.addFrame(frame);
    };
}

export default setupClient;