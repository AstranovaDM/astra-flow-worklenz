/**
 * Local-only same-origin reverse proxy with WebSocket upgrade support.
 * Not for production deploy — used so Socket.IO works on localhost preview.
 * Usage: node local-ws-proxy.mjs  (binds 127.0.0.1:${FLOW_PROXY_PORT:-18080})
 */
import http from 'http';
import httpProxy from 'http-proxy';

const PORT = Number(process.env.FLOW_PROXY_PORT || 18080);
const FE = process.env.FLOW_FE_URL || 'http://127.0.0.1:5000';
const BE = process.env.FLOW_BE_URL || 'http://127.0.0.1:3001';
const proxy = httpProxy.createProxyServer({ ws: true, xfwd: true });
const isBe = (url = '') =>
  /^(?:\/api|\/secure|\/csrf-token|\/socket\.io|\/socket\/|\/auth\/google|\/auth\/apple|\/webhook|\/stripe|\/paddle|\/public\/)/.test(
    url
  );

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: isBe(req.url) ? BE : FE }, err => {
    if (!res.headersSent) res.writeHead(502);
    res.end(String(err?.message || 'Bad Gateway'));
  });
});
server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head, { target: isBe(req.url) ? BE : FE }, () => socket.destroy());
});
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Astra Flow local WS proxy on 127.0.0.1:${PORT} -> FE ${FE} / BE ${BE}`);
});
