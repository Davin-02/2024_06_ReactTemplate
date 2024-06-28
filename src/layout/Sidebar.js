import styled from "styled-components";
import {Link} from "react-router-dom";
import {useCallback} from "react";
import {staticMenuList} from "../routes/AppRoute";
import {Spacer} from "../common/components/Spacer";

const LeftSideBarContainer = styled.div`
    box-sizing: border-box;
    padding: 20px 0;

    display: flex;
    flex-direction: column;

    gap: ${props => props.$gap || 'unset'};
    width: ${props => props.$width || '300px'};
    background-color: ${props => props.theme.colors.primaryVariant2 || 'blue'};
`

const LeftSideBarContent = styled(Link)`
    padding: 10px 15px;
    width: 100%;
    box-sizing: border-box;

    text-decoration: none;
    color: inherit;
    font-size: 18px;

    display: flex;
    align-items: center;

    ${props => props.$isRoot ? 
            `background-color : inherit; font-weight: bold;`
            :
            `background-color : ${props.theme.colors.primaryVariant || 'blue'};`
    }
    &:hover {
        background-color: ${props => props.theme.colors.primaryVariant4 || 'blue'};
        color: ${props => props.theme.colors.white || '#fff'};
    }
`

const LeftSideBarIcon = styled.div`
    width: 20px;
`

const LeftSideBarMenus = () => {
    const LeftSideBarElement = useCallback((menus, isRoot = false) => {
        return (
            <>
                {menus.length && menus.map((menu) => {
                    return (
                        <>
                            {
                                menu.path != null && !menu.hiddenMenu &&
                                <LeftSideBarContent key={menu.key} to={menu.path} $isRoot={isRoot}>
                                    {!isRoot && <Spacer width={'20px'}/>}
                                    <LeftSideBarIcon />
                                    {menu.name}
                                </LeftSideBarContent>
                            }
                            {
                                menu?.childList?.length && !menu?.hiddenChild && LeftSideBarElement(menu.childList)
                            }
                        </>
                    )
                })}
            </>
        )
    }, [])

    return LeftSideBarElement(staticMenuList, true)
}

export const LeftSideBar = () => {
    return (
        <LeftSideBarContainer $width={'300px'}>
            <LeftSideBarMenus menuList={staticMenuList}/>
        </LeftSideBarContainer>
    )
}
