'use client';
import { LucideArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { contacts } from './Header';

export default function Footer() {
  return (
    <>
      <div className="bg-gray-200 h-px w-full mt-24" />

      <footer className="relative z-10 max-w-[1600px] mx-auto pt-14 pb-8 px-4">
        <div className="flex justify-between items-end antialiased">
          <div className="flex-col gap-4 px-4 items-center">
            <h2 className="text-2xl font-medium">
              상상을 현실로 바꾸는 유니콘 개발자가 필요하신가요?
            </h2>
            <p className="text-base text-gray-500 mt-4 leading-[1.75]">
              궁금한 점이 있으시다면 언제든 우측 연락처로 연락주시면 감사하겠습니다.
              <br />
              글을 통해 풀어낼 수 없는 개발이야기를 나누고 싶습니다.
            </p>
          </div>

          <ul className="flex gap-4 items-center">
            {contacts.map((contact, idx) => (
              <>
                {idx !== 0 && <li className="h-8 w-px bg-gray-200 mx-5" />}
                <li className="flex-col flex w-44 gap-4">
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
        <div className="flex gap-8 justify-end mt-12 text-foreground/60">
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
