'use client';

import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QRCodeLocalhost() {
  const [localUrl, setLocalUrl] = useState('');

  useEffect(() => {
    const getLocalIp = async () => {
      try {
        const res = await fetch('/api/local-ip');
        const data = await res.json();
        const port = window.location.port || '3000';
        setLocalUrl(`http://${data.ip}:${port}/mobile`);
      } catch (err) {
        console.error('Error fetching local IP:', err);
      }
    };
    getLocalIp();
  }, []);

  if (!localUrl) return <p>Loading QR code...</p>;

  return (
    <div>
      <QRCodeSVG value={localUrl} size={256} />
    </div>
  );
}
