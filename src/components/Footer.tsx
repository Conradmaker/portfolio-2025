'use client';
import { LucideArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { contacts } from './Header';

export default function Footer() {
  return (
    <>
      <div className="bg-gray-200 h-px w-full mt-24" />

      <footer className="relative z-10 max-w-[1632px] w-full overflow-hidden mx-auto pt-14 pb-8 px-4">
        <div className="md:flex justify-between items-start lg:items-end antialiased">
          <div className="flex-col gap-4 items-center">
            <h2 className="text-xl sm:text-2xl font-medium">
              상상을 현실로 바꾸는
              <br className="xs:hidden" /> 유니콘 개발자가 필요하신가요?
            </h2>
            <p className="text-sm xs:text-base text-gray-500 mt-4 leading-[1.75]">
              궁금한 점이 있으시다면 <span className="xl:hidden">아래</span>
              <span className="hidden xl:inline">우측</span> 연락처로 연락주시면 감사하겠습니다.
              <br />
              글을 통해 풀어낼 수 없는 개발이야기를 나누고 싶습니다.
            </p>
          </div>

          <ul className="flex flex-col xl:flex-row gap-4 xl:gap-4 justify-start xl:justify-end items-center mt-8 md:mt-0">
            {contacts.map((contact, idx) => (
              <>
                {idx !== 0 && <li className="hidden xl:block h-8 w-px bg-gray-200 mx-5" />}
                <li className="flex xl:flex-col w-full xl:w-44 justify-between xs:justify-end xl:justify-stretch items-center xl:items-stretch gap-4">
                  <span className="text-sm">{contact.type.toUpperCase()} :</span>
                  <Link
                    href={contact.href}
                    target={contact.target}
                    className="transition-all duration-300 group/link self-end flex items-center hover:bg-[#001713] bg-[#F7F8FA] p-1 rounded-full text-sm gap-1 pl-3 cursor-pointer"
                  >
                    <span className="group-hover/link:text-white transition-all duration-300">
                      {contact.label}
                    </span>
                    <LucideArrowUpRight className="size-6 p-0.5 bg-white rounded-full" />
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-8 justify-end mt-12 text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="text-xs">COPYRIGHT:</span>
            <span className="text-sm">&copy;2025 Ryuwongeun</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">LAST UPDATED:</span>
            <span className="text-sm">2025 / 04</span>
          </div>
        </div>
      </footer>
    </>
  );
}
