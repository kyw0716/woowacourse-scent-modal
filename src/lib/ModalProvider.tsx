import { ReactNode, createContext, useMemo, useState } from 'react';

interface ModalProps {
  children: ReactNode;
}

export const ModalStateContext = createContext({
  isOpen: false,
});

export const ModalActionContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const action = useMemo(
    () => ({
      openModal() {
        setIsOpen(true);
      },
      closeModal() {
        setIsOpen(false);
      },
    }),
    []
  );

  return (
    <ModalActionContext.Provider value={action}>
      <ModalStateContext.Provider value={{ isOpen }}>
        {children}
      </ModalStateContext.Provider>
    </ModalActionContext.Provider>
  );
};
