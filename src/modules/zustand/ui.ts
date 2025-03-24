import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface UiState {
  navOpen: boolean;
  setNavOpen: (payload: boolean) => void;
  viewPort: { w: number; h: number };
  setViewPort: (payload: { w: number; h: number }) => void;
}

export const useUiStore = create(
  persist(
    immer<UiState>(set => ({
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
    })),
    {
      name: 'ui-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
