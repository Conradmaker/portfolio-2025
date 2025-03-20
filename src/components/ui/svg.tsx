import React from 'react';

function Svg() {
  return <div></div>;
}

type HeroSvgProps = {
  color?: string;
  className?: string;
};
function HeroSvg1({ color = '#FFB600', className }: HeroSvgProps) {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_402_5071)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H280V280H0V0ZM140 210C178.66 210 210 178.66 210 140C210 101.34 178.66 70 140 70C101.34 70 70 101.34 70 140C70 178.66 101.34 210 140 210Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_402_5071">
          <rect width="280" height="280" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function HeroSvg2({ color = '#0967F4', className }: HeroSvgProps) {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_402_5067)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140 70C140 31.2667 171.267 0 210 0C248.733 0 280 31.2667 280 70C280 108.733 248.733 140 210 140V70H140ZM70 140V70H140C140 108.733 171.267 140 210 140V210H140C140 171.267 108.733 140 70 140ZM70 140C31.2667 140 0 171.267 0 210C0 248.733 31.2667 280 70 280C108.733 280 140 248.733 140 210H70V140Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_402_5067">
          <rect width="280" height="280" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function HeroSvg3({ color = '#0AA342', className }: HeroSvgProps) {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_402_5078)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140 70C178.733 70 210 101.267 210 140C210 101.34 178.66 70 140 70Z"
          fill={color}
        />
        <path d="M140 70V140H210C210 101.34 178.66 70 140 70Z" fill={color} />
        <path
          d="M140 0H0V140V280H140H280V140H210C210 178.66 178.66 210 140 210C101.34 210 70 178.66 70 140C70 101.34 101.34 70 140 70V0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_402_5078">
          <rect width="280" height="280" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function HeroSvg4({ color = '#FFF100', className }: HeroSvgProps) {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_402_5073)">
        <path
          d="M186.447 280H93.2236V186.667C93.2236 238.311 135.018 280 186.447 280Z"
          fill={color}
        />
        <path
          d="M186.777 93.0032H280V186.336C280 134.692 238.205 93.0032 186.777 93.0032Z"
          fill={color}
        />
        <path
          d="M186.447 280V186.667H279.67C228.242 186.667 186.447 228.356 186.447 280Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 93.3332C0 144.88 41.7375 186.667 93.2233 186.667C144.709 186.667 186.447 144.88 186.447 93.3332C186.447 41.7867 144.709 0 93.2233 0C41.7375 0 0 41.7867 0 93.3332ZM186.447 93.3332L93.2233 93.333V186.667C93.2233 135.178 135.018 93.3332 186.447 93.3332Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_402_5073">
          <rect width="280" height="280" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function HeroSvg5({ color = '#E34343', className }: HeroSvgProps) {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_402_5082)">
        <path d="M279.999 76.4004H153.162V203.601H279.999V76.4004Z" fill={color} />
        <path
          d="M153.17 76.4004C118.07 41.1999 61.2322 41.1999 26.332 76.4004H153.17Z"
          fill={color}
        />
        <path
          d="M26.3247 76.4004C-8.7749 111.601 -8.7749 168.601 26.3247 203.601V76.4004Z"
          fill={color}
        />
        <path
          d="M153.162 76.4004V203.601C188.262 168.601 188.262 111.601 153.162 76.4004Z"
          fill={color}
        />
        <path d="M26.332 203.6C61.4317 238.8 118.269 238.8 153.17 203.6H26.332Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_402_5082">
          <rect width="280" height="280" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
function HeroSvg6({ color = '#F45E09', className }: HeroSvgProps) {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_402_5069)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.9951 70.0037L209.996 69.9967C209.994 31.2633 178.726 -0.00193485 139.992 8.98072e-08C101.258 0.00193266 69.9931 31.2703 69.9951 70.0037ZM209.996 69.9955C248.73 69.9935 279.998 101.259 280 139.992C280.002 178.726 248.737 209.994 210.003 209.996L209.996 69.9955ZM210.004 209.997C210.006 248.731 178.741 279.999 140.007 280.001C101.43 280.003 70.006 248.739 70.003 210.006C31.4254 210.008 0.00193391 178.743 8.96881e-08 140.01C-0.00193357 101.276 31.2634 70.0078 69.997 70.0059L70.004 210.004L210.004 209.997Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_402_5069">
          <rect width="280" height="280" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
Svg.Hero1 = HeroSvg1;
Svg.Hero2 = HeroSvg2;
Svg.Hero3 = HeroSvg3;
Svg.Hero4 = HeroSvg4;
Svg.Hero5 = HeroSvg5;
Svg.Hero6 = HeroSvg6;

export default Svg;
