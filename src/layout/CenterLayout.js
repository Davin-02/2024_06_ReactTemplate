import {CenterLayoutMainContainer, LayoutBackground} from "./Components";
import {Outlet} from "react-router-dom";
import {CenterLayoutHeader} from "./LayoutHeader";
import {LayoutFooter} from "./LayoutFooter";

export const CenterLayout = () => {
    return (
        <LayoutBackground>
            <CenterLayoutHeader />
            <CenterLayoutMainContainer>
                <Outlet />
            </CenterLayoutMainContainer>
            <LayoutFooter />
        </LayoutBackground>
    )
}