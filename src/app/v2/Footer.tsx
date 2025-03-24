'use client';
import { LucideArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="bg-gray-200 h-px w-full mt-24" />
      <footer className="relative z-10 max-w-[1600px] mx-auto p-14 px-4">
        <div className="flex justify-between items-center antialiased">
          <div className="flex flex-col gap-3 w-40">
            <div className="text-sm">
              <p className="text-xs">COPYRIGHT:</p>
              <p className="ml-2">&copy;2025 Ryuwongeun</p>
            </div>
            <div className="text-sm">
              <p className="text-xs">LAST UPDATED:</p>
              <p className="ml-2">2025 / 03</p>
            </div>
          </div>
          <ul className="flex gap-4 items-center">
            <li className="flex-col flex w-44 gap-4">
              <span className="text-sm">EMAIL :</span>
              <Link href="mailto:yhg0337@gmail.com">
                <p className="transition-all duration-300 group/link self-end flex items-center hover:bg-[#001713] bg-gray-100 p-1 rounded-full text-sm gap-1 pl-3 cursor-pointer">
                  <span className="group-hover/link:text-white transition-all duration-300">
                    yhg0337@gmail.com
                  </span>
                  <LucideArrowUpRight className="size-6 p-0.5 bg-white rounded-full" />
                </p>
              </Link>
            </li>
            <li className="h-8 w-px bg-gray-200 mx-5" />
            <li className="flex-col flex w-44 gap-4">
              <span className="text-sm">GITHUB :</span>
              <Link
                href="https://github.com/Conradmaker"
                target="_blank"
                className="transition-all duration-300 group/link self-end flex items-center hover:bg-[#001713] bg-gray-100 p-1 rounded-full text-sm gap-1 pl-3 cursor-pointer"
              >
                <span className="group-hover/link:text-white transition-all duration-300">
                  @conradmaker
                </span>
                <LucideArrowUpRight className="size-6 p-0.5 bg-white rounded-full" />
              </Link>
            </li>
            <li className="h-8 w-px bg-gray-200 mx-5" />
            <li className="flex-col flex w-44 gap-4">
              <span className="text-sm">BLOG :</span>
              <Link
                href="https://velog.io/@yhg0337/posts"
                target="_blank"
                className="transition-all duration-300 group/link self-end flex items-center hover:bg-[#001713] bg-gray-100 p-1 rounded-full text-sm gap-1 pl-3 cursor-pointer"
              >
                <span className="group-hover/link:text-white transition-all duration-300">
                  @Conrad.log
                </span>
                <LucideArrowUpRight className="size-6 p-0.5 bg-white rounded-full" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
