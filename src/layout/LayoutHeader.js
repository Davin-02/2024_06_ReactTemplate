import {
    CenterLayoutHeaderContent, FullLayoutHeaderContent, LayoutHeaderButton,
    LayoutHeaderContainer,
    LayoutHeaderContentLeft,
    LayoutHeaderContentRight, LayoutHeaderLink, LayoutHeaderText, LayoutHeaderWrapper
} from "./Components";
import LOGO from "../assets/icons/LOGO";
import {staticMenuList} from "../routes/AppRoute";
import {useCallback} from "react";

const HeaderMenus = () => {
    const menuElements = useCallback((menus) => {
        return (
            <>
                {menus.length && menus.map((menu) => {
                    return (
                        <>
                            <LayoutHeaderLink key={menu.key} to={menu.path} hidden={menu.path == null || menu.hiddenMenu}>
                                {menu.name}
                            </LayoutHeaderLink>
                            {
                                menu?.childList?.length && !menu?.hiddenChild && menuElements(menu.childList)
                            }
                        </>
                    )
                })}
            </>
        )
    }, [])

    return menuElements(staticMenuList)
}

export const CenterLayoutHeader = () => {
    return (
        <LayoutHeaderWrapper>
            <LayoutHeaderContainer>
                <CenterLayoutHeaderContent>
                    <LayoutHeaderContentLeft>
                        <LOGO/>
                    </LayoutHeaderContentLeft>
                    <LayoutHeaderContentRight $gap={'15px'}>
                        <HeaderMenus />
                        <LayoutHeaderText>
                            USER
                        </LayoutHeaderText>
                        <LayoutHeaderText>
                            안녕하세요 :>
                        </LayoutHeaderText>
                        <LayoutHeaderButton>
                            버튼
                        </LayoutHeaderButton>
                    </LayoutHeaderContentRight>
                </CenterLayoutHeaderContent>
            </LayoutHeaderContainer>
        </LayoutHeaderWrapper>
    )
}

export const FullLayoutHeader = () => {
    return (
        <LayoutHeaderWrapper>
            <LayoutHeaderContainer>
                <FullLayoutHeaderContent>
                    <LayoutHeaderContentLeft>
                        <LOGO/>
                    </LayoutHeaderContentLeft>
                    <LayoutHeaderContentRight $gap={'15px'}>
                        <HeaderMenus />
                        <LayoutHeaderText>
                            USER
                        </LayoutHeaderText>
                        <LayoutHeaderText>
                            안녕하세요 :>
                        </LayoutHeaderText>
                        <LayoutHeaderButton>
                            버튼
                        </LayoutHeaderButton>
                    </LayoutHeaderContentRight>
                </FullLayoutHeaderContent>
            </LayoutHeaderContainer>
        </LayoutHeaderWrapper>
    )
}