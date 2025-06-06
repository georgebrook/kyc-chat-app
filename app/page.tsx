"use client";

import { useRouter } from 'next/navigation';
import Button from "@molecules/Button";
import Heading from "@atoms/Heading";
import QRCodeLocalhost from "@/components/QRCodeLocalhost";
import { bem } from '@/lib/bem';
import Waves from '@/components/atoms/Waves';

export default function Home() {
  const router = useRouter();

  const blockName = 'page'

  return (
    <div className={bem(blockName)}>
      <div className='page__intro'>
        <div className={bem(blockName, 'left')}>
          <QRCodeLocalhost />
        </div>
        <div className={bem(blockName, 'right')}>
          <Heading level={1}>
            Message your phone from your computer
          </Heading>
          <p>Scan the QR code on the left with your phone to start chatting from your phone, then click the button below to continue the conversation on desktop.</p>
          <Button iconName="chat" iconSize={25} onClick={() => router.push('/desktop')}>Chat from desktop</Button>
          <p>OR, open the mobile view in a new window and chat there:</p>
          <Button iconName="mobile" iconSize={20} onClick={() => router.push('/mobile')}>Mobile page</Button>
        </div>

        <div className='page__mobile'>
          <p>Please view this on a laptop or desktop</p>
        </div>
      </div>

      <Waves color="#ffffff" />


      <style jsx>{`
        .page {
          background-color: var(--color--neutral);
          background: linear-gradient(353deg, #1fa9DCD9 0, #c3e8F6EB 59%);
          background-repeat: no-repeat;
          background-attachment: fixed;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }

        .page__intro {
          background-color: var(--color-background);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(11.6px);
          -webkit-backdrop-filter: blur(11.6px);
          display: flex;
          justify-content: center;
          border-radius: var(--radius-large);
          align-items: center;
          width: 900px;
          padding:var(--space-default) 70px;
          gap:var(--space-default);
          position: absolute;
          top: 50%;
          overflow: hidden;
          left: 50%;
          transform: translate(-50%, -70%);
        }

        .page__left {
          width: 50%;
          display: flex;
          border-right: 1px solid var(--color-border);
          margin-right: 40px;
          height: 80%;
          align-items: center;
          justify-content: center;
        }

        .page__right {
          width: 50%;
          padding: 50px 0;
        }

        .page__mobile {
          display: none;
        }

        @media (max-width: 1199px) {
          .page__left,
          .page__right {
            display: none;
          }

          .page {
            background: var(--background);
          }

          .page__mobile {
            display: block;
          }

          .page__intro {
            width: 100%;
            height: 100%;
            background: none;
            box-shadow: none;
            border-radius: 0;
            transform: none;
            position: static;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
