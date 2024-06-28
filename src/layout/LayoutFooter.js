import {
    LayoutCenterFooterContainer,
    LayoutCenterFooterContentCol,
    LayoutCenterFooterContentRow,
    LayoutFooterWrapper
} from "./Components";

export const LayoutFooter = () => {

    return (
        <LayoutFooterWrapper>
            <LayoutCenterFooterContainer>
                <LayoutCenterFooterContentCol>
                    <LayoutCenterFooterContentRow>
                        @davin0915
                    </LayoutCenterFooterContentRow>
                    <LayoutCenterFooterContentRow>
                        @dav_diary
                    </LayoutCenterFooterContentRow>
                </LayoutCenterFooterContentCol>
                <LayoutCenterFooterContentCol>
                    @Davin-02
                </LayoutCenterFooterContentCol>
            </LayoutCenterFooterContainer>
        </LayoutFooterWrapper>
    )
}