import {FullLayoutMainContainer, FullLayoutMainContent, LayoutBackground} from "./Components";
import {Outlet} from "react-router-dom";
import {FullLayoutHeader} from "./LayoutHeader";
import {LayoutFooter} from "./LayoutFooter";
import {LeftSideBar} from "./Sidebar";

export const FullLayout = () => {

    return (
        <LayoutBackground>
            <FullLayoutHeader/>
            <FullLayoutMainContainer>
                <LeftSideBar/>
                <FullLayoutMainContent>
                    <Outlet/>
                </FullLayoutMainContent>
            </FullLayoutMainContainer>
            <LayoutFooter/>
        </LayoutBackground>
    )
}