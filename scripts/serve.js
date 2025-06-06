const os = require('os');
const { spawn } = require('child_process');
const qrcode = require('qrcode-terminal');

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const ifaceList of Object.values(interfaces)) {
    for (const iface of ifaceList) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const ip = getLocalIp();
const port = 3000;
const url = `http://${ip}:${port}`;

qrcode.generate(url, { small: true });

const dev = spawn('npx', ['next', 'dev', '-H', '0.0.0.0', '-p', port], {
  stdio: 'inherit',
});
