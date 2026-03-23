
import { create } from 'zustand'

interface State {
    isModalAgregarOpen: boolean;

    openModalAgregar: () => void;
    closeModalAgregar: () => void;
}

export const useUIStore = create<State>()((set) => ({
    isModalAgregarOpen: false,

    openModalAgregar: () => set({ isModalAgregarOpen: true }),
    closeModalAgregar: () => set({ isModalAgregarOpen: false }),
}));