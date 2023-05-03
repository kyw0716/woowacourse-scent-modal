var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useMemo, useState } from 'react';
export var ModalStateContext = createContext({
    isOpen: false,
});
export var ModalActionContext = createContext({
    openModal: function () { },
    closeModal: function () { },
});
export var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var action = useMemo(function () { return ({
        openModal: function () {
            setIsOpen(true);
        },
        closeModal: function () {
            setIsOpen(false);
        },
    }); }, []);
    return (_jsx(ModalActionContext.Provider, __assign({ value: action }, { children: _jsx(ModalStateContext.Provider, __assign({ value: { isOpen: isOpen } }, { children: children })) })));
};
