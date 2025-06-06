import os from 'os';

export async function GET() {
  const interfaces = os.networkInterfaces();
  let localIp = '';

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        localIp = iface.address;
        break;
      }
    }
    if (localIp) break;
  }

  return new Response(JSON.stringify({ ip: localIp }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
