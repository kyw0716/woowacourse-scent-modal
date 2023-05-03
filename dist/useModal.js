import { useContext } from 'react';
import { ModalActionContext, ModalStateContext } from './ModalProvider';
export var useModalStateContext = function () {
    var modalState = useContext(ModalStateContext);
    return modalState;
};
export var useModalActionContext = function () {
    var modalAction = useContext(ModalActionContext);
    return modalAction;
};
