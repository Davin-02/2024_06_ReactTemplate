import {createContext, useEffect, useState} from "react";

export const WindowSize = Object.freeze({
    DEFAULT : 'DEFAULT', // 기본 값 페이지
    SHRINK_MENU : 'SHRINK_MENU', // < 1130
    MOBILE: 'MOBILE' // < 650 상단(헤더)의 메뉴가 wrap 되기 이전의 사이즈로 적절하게 적용
});

export const WindowSizeContext = createContext(WindowSize.DEFAULT);

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(WindowSize.DEFAULT);

    useEffect(() => {
        function onResizeWindow() {
            const size = document.body.clientWidth;
            if (size < 650) {
                setWindowSize(WindowSize.MOBILE);
            } else if (size < 1130) {
                setWindowSize(WindowSize.SHRINK_MENU);
            } else {
                setWindowSize(WindowSize.DEFAULT);
            }
        }
        onResizeWindow();
        window.addEventListener('resize', onResizeWindow);

        return () => {
            window.removeEventListener('resize', onResizeWindow);
        };
    }, []);

    return windowSize;
}