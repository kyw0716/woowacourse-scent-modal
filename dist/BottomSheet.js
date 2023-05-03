var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { useModalActionContext } from './useModal';
export var BottomSheet = function (_a) {
    var children = _a.children;
    var closeModal = useModalActionContext().closeModal;
    return (_jsxs(Fragment, { children: [_jsx(Style.BackDrop, { onClick: closeModal }), _jsx(Style.Content, { children: children })] }));
};
var ModalShowKeyframes = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nfrom {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"], ["\nfrom {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"])));
var Style = {
    BackDrop: styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100vw;\n    height: 100vh;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    background-color: #0000006d;\n  "], ["\n    width: 100vw;\n    height: 100vh;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n\n    background-color: #0000006d;\n  "]))),
    Content: styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 100vw;\n    height: max-content;\n\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n\n    padding: 20px 0;\n    background-color: white;\n\n    animation: ", " 0.4s;\n  "], ["\n    width: 100vw;\n    height: max-content;\n\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n\n    padding: 20px 0;\n    background-color: white;\n\n    animation: ", " 0.4s;\n  "])), ModalShowKeyframes),
};
var templateObject_1, templateObject_2, templateObject_3;
