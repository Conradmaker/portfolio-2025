import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface UiState {
  currentPath: string;
  setCurrentPath: (payload: string) => void;

  navOpen: boolean;
  setNavOpen: (payload: boolean) => void;
  viewPort: { w: number; h: number };
  setViewPort: (payload: { w: number; h: number }) => void;
  scrollAvailable: boolean;
  setScrollAvailable: (payload: boolean) => void;

  projectModal: null | 'realiz';
  toggleProjectModal: (payload: 'realiz' | null) => void;
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

      viewPort: { w: 0, h: 0 },
      setViewPort: payload =>
        set(state => {
          state.viewPort = payload;
        }),

      scrollAvailable: false,
      setScrollAvailable: payload =>
        set(state => {
          state.scrollAvailable = payload;
        }),

      projectModal: null,
      toggleProjectModal: payload =>
        set(state => {
          state.projectModal = payload;
        }),
    })),
    {
      name: 'ui-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
