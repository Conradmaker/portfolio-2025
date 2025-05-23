import React from 'react';
import Title from './Title';
import { cn } from '@/lib/utils';

const cc = 'rounded-xl min-h-44 flex flex-col items-center justify-center';
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="max-w-[1632px] px-4 w-full mx-auto">
      <Title slug={slug} />

      <div className="grid grid-cols-7 gap-6">
        <div className={cn(cc, 'col-span-2 text-7xl font-medium')}>Front End</div>
        <div className={cn(cc, 'col-span-2 bg-gray-100')}>
          <p>기술 스택</p>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div className={cn(cc, 'col-span-2 bg-gray-100 text-7xl font-semibold')}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 97 120"
            fill="#fef2ff"
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="1px"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M38.48 34.99V44.11L18.48 34.11V24.99L38.48 34.99Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M38.48 44.11L22.5898 53.28L18.48 51.23L11.0598 47.51L2.58984 43.28L18.48 34.11L38.48 44.11Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M28.6099 79.78L9.11987 70.05L8.91992 69.95C8.46992 69.72 8.03986 69.46 7.60986 69.16C4.25986 66.8 2.58984 62.73 2.58984 56.96V43.28L11.0598 47.51L18.48 51.23L22.5898 53.28V66.96C22.5898 69.67 22.96 72.01 23.7 73.97C24.53 76.18 25.8399 77.91 27.6099 79.16C27.9399 79.39 28.2699 79.6 28.6099 79.78Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M38.48 107.93V117.04L18.48 107.04V97.9299L26.9399 102.16L38.48 107.93Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M44.1697 84.2499L43.0996 83.7099L42.3196 83.3199L36.8096 80.5699C37.8496 80.3099 38.9396 79.9299 40.0696 79.4299C40.6496 80.8199 41.4096 81.9599 42.3196 82.8599C42.6096 83.1499 42.9097 83.4099 43.2297 83.6399C43.5297 83.8699 43.8397 84.0699 44.1697 84.2499Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M54.3701 84.62V98.75L42.8401 92.9799L34.3701 88.75V80.9699C35.1601 80.9099 35.9701 80.7799 36.8101 80.5699L42.3201 83.3199L43.1001 83.71L44.1702 84.25L44.4702 84.4C44.8602 84.6 45.2602 84.7699 45.6802 84.9099C48.2302 85.7499 51.1301 85.66 54.3701 84.62Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M78.21 21.18V12.06L74.0999 14.43L66.1499 19.02L58.21 23.6L38.48 34.99V44.11L22.5898 53.28V66.96C22.5898 69.67 22.96 72.01 23.7 73.97C24.53 76.18 25.8399 77.91 27.6099 79.16C27.9399 79.39 28.2699 79.6 28.6099 79.78L28.6899 79.82C30.3899 80.74 32.2899 81.12 34.3699 80.97C35.1599 80.91 35.9698 80.78 36.8098 80.57C37.8498 80.31 38.9398 79.93 40.0698 79.43C40.6498 80.82 41.4098 81.96 42.3198 82.86C42.6098 83.15 42.91 83.41 43.23 83.64C43.53 83.87 43.8399 84.07 44.1699 84.25L44.47 84.4C44.86 84.6 45.2599 84.77 45.6799 84.91C48.2299 85.75 51.1299 85.66 54.3699 84.62V98.75L38.48 107.93V117.04L78.21 94.11V84.99L62.3198 94.16V80.03C63.0498 79.42 63.76 78.78 64.46 78.11C66.85 75.84 69.03 73.23 71.01 70.29C73.56 66.5 75.4299 62.51 76.6199 58.33C81.5799 54.78 85.7398 49.89 89.0798 43.67C92.4198 37.45 94.0999 31.45 94.0999 25.68V12L78.21 21.18ZM38.48 70.55C36.1 70.94 34.18 70.39 32.72 68.92C31.27 67.44 30.54 65.26 30.54 62.37V57.81L38.48 53.23V70.55ZM86.1499 30.26C86.1499 33.15 85.42 36.17 83.97 39.33C82.51 42.49 80.59 45.25 78.21 47.61V30.29L86.1499 25.7V30.26Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M86.1499 25.7V30.2599C86.1499 33.1499 85.42 36.17 83.97 39.33C82.51 42.49 80.59 45.25 78.21 47.61V30.2899L86.1499 25.7Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M38.48 53.23V70.55C36.1 70.94 34.18 70.39 32.72 68.92C31.27 67.44 30.54 65.26 30.54 62.37V57.81L38.48 53.23Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M78.21 21.18V12.06L74.0999 10.01L66.6699 6.28998L74.0999 2L94.0999 12L78.21 21.18Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M78.21 12.06L74.0999 14.43L66.1499 19.02L58.21 23.6L38.48 34.99L18.48 24.99L58.21 2.06L66.6699 6.28998L74.0999 10.01L78.21 12.06Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M54.3699 98.75L38.48 107.93L26.9399 102.16L18.48 97.93L34.3699 88.75L42.8398 92.98L54.3699 98.75Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
            <path
              d="M78.21 84.99L62.3198 94.16V80.03C63.0498 79.42 63.76 78.78 64.46 78.11L78.21 84.99Z"
              stroke="#F14CFF"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className={cn(cc, 'col-span-2 bg-gray-100 text-7xl font-semibold')}>Back End</div>
        <div className={cn(cc, 'col-span-2 bg-gray-100 text-7xl font-semibold')}>Design</div>
      </div>
    </div>
  );
}
