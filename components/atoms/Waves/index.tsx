import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export default function Waves({ color = '#000000' }: Props) {
  return (
    <div className="wave-wrapper">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <g>
          <path
            fill={color}
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9
              c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4
              c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6
              C72,58.2,0,25.8,0,25.8V100h1000V65.3
              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          />
          <path
            fill={color}
            opacity="0.5"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9
              c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4
              c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6
              C72,58.2,0,25.8,0,25.8V100h1000V65.3
              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          />
        </g>
      </svg>

      <style jsx>{`
        .wave-wrapper {
          position: absolute;
          bottom: 0;
          overflow: hidden;
          width: 100%;
          height: 100px;
        }

        .waves {
          position: absolute;
          width: 200%;
          height: 100px;
          animation: waveMove 6s ease-in-out infinite alternate;
        }

        @keyframes waveMove {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </div>
  );
}
