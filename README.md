
# Project Documentation

## Overview

This is a real-time messaging app built with Next.js and Firebase Realtime Database. It supports both desktop and mobile clients, allowing users to send and receive messages instantly.

The app uses an atomic design system with components organized as atoms, molecules, and organisms for modularity and ease of development.

## Architecture & Design

- **Framework:** Next.js with Turbopack
- **Component Structure:** Atomic Design (atoms, molecules, organisms)
- **Styling:** CSS Modules with BEM utility function (see below)
- **Fonts:** Dai Banna SIL (body), Montserrat (headings) via `next/font/google`
- **Realtime Backend:** Firebase Realtime Database
- **Development:** Runs locally on machine’s LAN IP with QR code for mobile access

## Development Setup
Install the node modules

```bash
npm inmstall
```

The development environment runs multiple processes concurrently for ease of development:

```bash
npm run dev
```

This command runs:

- SVG sprite generation
- Next.js development server with Turbopack (next dev --turbopack)
- Storybook for component development and documentation

**Once up and running you can scan the QR code with your phone that appears and start chatting right away!**

Visit:
- The main app at: http://localhost:3000/
- The Storybook instance at: http://localhost:6006/?path=/docs/atoms-errortext--docs

## Mobile Testing on Local Network

A custom Node.js script serves the app on your local IP and prints a QR code so you can easily open the app on your phone:

```js
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

console.log(`\n📱 Scan this QR code or open on your phone:\n`);
qrcode.generate(url, { small: true });
console.log(`\n🔗 ${url}\n`);

const dev = spawn('npx', ['next', 'dev', '-H', '0.0.0.0', '-p', port], {
  stdio: 'inherit',
});
```

## BEM Utility Function

For consistent CSS class naming, the following utility function is used:

```ts
type Modifiers = string[] | undefined;
type ExtraClasses = string | string[] | undefined;

export function bem(
  block: string,
  element?: string | null,
  modifiers?: Modifiers,
  extra?: ExtraClasses
): string {
  const base = element ? `${block}__${element}` : block;
  const modClasses = modifiers?.map(mod => `${base}--${mod}`) || [];

  const extraClasses = Array.isArray(extra)
    ? extra
    : extra
    ? [extra]
    : [];

  return [base, ...modClasses, ...extraClasses].join(' ');
}
```

## Layout Component (layout.tsx)

Defines global styles, fonts, and metadata:

```tsx
import './globals.css';
import './theme.css';
import { Dai_Banna_SIL, Montserrat } from 'next/font/google';

const dmSerifText = Dai_Banna_SIL({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-body',
});

const montserrat = Montserrat({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata = {
  title: 'Message your phone',
  description: 'Message your phone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${dmSerifText.variable} ${montserrat.variable}`} lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

## Project Summary & Brief

The project provides two main clients:

- Desktop client: Allows users to send and receive messages in real-time.
- Mobile client: Allows users to send and receive messages in real-time.

Messages are stored and synchronized via Firebase Realtime Database. The UI is designed to be user-friendly and responsive for both device types.

## Supporting Documentation

- Storybook is used for developing and documenting UI components.
- Firebase credentials are stored securely in .env.local (not committed to source control).
- Presentation materials and further documentation will be included in the final deliverable.
