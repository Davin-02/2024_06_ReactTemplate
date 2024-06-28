import styled from "styled-components";
import {Link} from 'react-router-dom'

const LogoLink = styled(Link)`
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
`
const LOGO = () => {
    return (
        <LogoLink to={'/'}>
            LOGO
        </LogoLink>
    )
}

export default LOGO
