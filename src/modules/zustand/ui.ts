import { Work, WorkSlugs, works } from '@/lib/workData';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface UiState {
  currentPath: string;
  setCurrentPath: (payload: string) => void;

  navOpen: boolean;
  setNavOpen: (payload: boolean) => void;

  isMobile: boolean;
  viewPort: { w: number; h: number };
  setViewPort: (payload: { w: number; h: number }) => void;

  scrollAvailable: boolean;
  setScrollAvailable: (payload: boolean) => void;

  currentWork: null | Work;
  setCurrentWork: (payload: WorkSlugs | Work | null) => void;
}

export const useUiStore = create(
  persist(
    immer<UiState>(set => ({
      currentPath: '/',
      setCurrentPath: payload =>
        set(state => {
          state.currentPath = payload;
        }),

      navOpen: false,
      setNavOpen: payload =>
        set(state => {
          state.navOpen = payload;
        }),

      isMobile: false,
      viewPort: { w: 0, h: 0 },
      setViewPort: payload =>
        set(state => {
          state.isMobile = payload.w < 640;
          state.viewPort = payload;
        }),

      scrollAvailable: false,
      setScrollAvailable: payload =>
        set(state => {
          state.scrollAvailable = payload;
        }),

      currentWork: null,
      setCurrentWork: payload =>
        set(state => {
          if (typeof payload === 'string') {
            state.currentWork = works.find(v => v.slug === payload) || null;
          } else {
            state.currentWork = payload;
          }
        }),
    })),
    {
      name: 'ui-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
