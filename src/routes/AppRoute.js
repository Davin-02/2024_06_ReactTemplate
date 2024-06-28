import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useCallback, useEffect, useMemo, useState} from "react";
import {CenterLayout} from "../layout/CenterLayout";
import Home from "../pages/home";
import About from "../pages/about";
import {FullLayout} from "../layout/FullLayout";

export const staticMenuList = [
    {
        key: "Home",
        name: "Home",
        path: '/',
        icon: null,
        hiddenMenu: false,
        hiddenChild: false,
        childList: [
            {
                key: "About",
                name: "About",
                path: '/about',
                icon: null,
                menuHidden: false,
            },
        ]
    },
    {
        key: "About",
        name: "About",
        path: '/about',
        icon: null,
        menuHidden: false,
    },
]

export const staticMenuRoute = [
    {
        key: "MainLayout",
        name: "MainLayout",
        element: <CenterLayout/>,
        path: null,
        childList: [
            {
                key: "Home",
                name: "Home",
                element: <Home/>,
                path: '/',
            },
        ]
    },
    {
        key: "DescriptionLayout",
        name: "DescriptionLayout",
        element: <FullLayout/>,
        path: null,
        childList: [
            {
                key: "About",
                name: "About",
                element: <About/>,
                path: '/about',
            },
        ]
    },
]

export const AppRoute = () => {
    const [menuList, setMenuList] = useState([]);

    const createMenuRoutes = useCallback((menus) => {
        return (
            <>
                {menus.map((menu) => (
                    menu?.childList?.length ?
                        <Route element={menu.element} path={menu.path} key={menu.key}>
                            {createMenuRoutes(menu.childList)}
                        </Route>
                        :
                        <Route element={menu.element} path={menu.path} key={menu.key}/>
                ))}
            </>
        )
    }, [])

    const menuRoutes = useMemo(
        () => createMenuRoutes(menuList),
        [createMenuRoutes, menuList]
    );

    // 나중에 권한 등에 따른 메뉴 접근 권한을 백엔드에서 가져올 예정
    const getMenuList = useCallback(() => {
        setMenuList(staticMenuRoute);
    }, [])

    useEffect(() => {
        getMenuList()
    }, [getMenuList, setMenuList]);

    return (
        <BrowserRouter>
            <Routes>
                {menuList.length && menuRoutes}
            </Routes>
        </BrowserRouter>
    )
}