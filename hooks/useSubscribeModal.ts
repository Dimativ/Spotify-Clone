import {create} from "zustand";

interface AuthSubscribeStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSubscribeModal = create<AuthSubscribeStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

export default useSubscribeModal;