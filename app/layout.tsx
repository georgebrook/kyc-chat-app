import './globals.css';
import './theme.css';
import { Dai_Banna_SIL, Montserrat } from 'next/font/google';

const dmSerifText = Dai_Banna_SIL({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-body',
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        {children}fdsgsdf
      </body>
    </html>
  );
}
