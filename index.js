const Stream = require('node-rtsp-stream');
const streamUrl = "rtsp://192.168.1.110/cam0_2";

stream = new Stream({
  name: 'foscam_stream',
  streamUrl: streamUrl,
  wsPort: 9999,
});