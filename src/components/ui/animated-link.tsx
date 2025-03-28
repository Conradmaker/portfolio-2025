'use client';
import { useUiStore } from '@/modules/zustand/ui';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function AnimatedLink({
  children,
  onClick,
  ...props
}: { children: React.ReactNode } & LinkProps & React.HTMLProps<HTMLAnchorElement>) {
  const { push } = useRouter();
  const { setCurrentPath } = useUiStore();
  return (
    <Link
      onClick={e => {
        e.preventDefault();
        onClick?.(e);
        setCurrentPath(props.href as string);
        setTimeout(() => {
          push(props.href as string);
        }, 500);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
