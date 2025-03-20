import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface UiState {
  navOpen: boolean;
  setNavOpen: (payload: boolean) => void;
}

export const useUiStore = create(
  persist(
    immer<UiState>(set => ({
      navOpen: false,
      setNavOpen: payload =>
        set(state => {
          state.navOpen = payload;
        }),
    })),
    {
      name: 'ui-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
