import { ReactNode } from 'react';
interface ModalProps {
    children: ReactNode;
}
export declare const ModalStateContext: import("react").Context<{
    isOpen: boolean;
}>;
export declare const ModalActionContext: import("react").Context<{
    openModal: () => void;
    closeModal: () => void;
}>;
export declare const ModalProvider: ({ children }: ModalProps) => JSX.Element;
export {};
