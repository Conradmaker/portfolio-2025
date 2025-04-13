/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function useQS<T extends { [key: string]: any }>() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const removeQS = useCallback(
    (name: keyof T) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name as string);

      router.push(pathname + '?' + params.toString());
    },
    [searchParams, pathname],
  );
  const setQS = useCallback(
    (name: keyof T, value: T[keyof T]) => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(searchParams.toString());
      params.set(
        name as string,
        window.btoa(typeof value !== 'string' ? JSON.stringify(value) : value),
      );

      router.push(pathname + '?' + params.toString());
    },
    [searchParams, pathname],
  );
  const getQS = useCallback(
    (name: keyof T): T[keyof T] | null => {
      if (typeof window === 'undefined') return null;
      const params = new URLSearchParams(searchParams.toString());

      const result = window.atob(params.get(name as string) || '');
      if (result) return result.includes('{') || result.includes('[') ? JSON.parse(result) : result;
      else return null;
    },
    [searchParams, pathname],
  );
  return { searchParams, router, pathname, setQS, removeQS, getQS };
}
