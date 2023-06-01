import styled from 'styled-components';
import Menu from '../Menu';
import Logo from '../Logo';

const HeaderContainer = styled.header`
    position: absolute;
    width: 90%;
    height: 10%;
    left: 20%;
    top: 2%;
`;

function Header() {
    return(
        <HeaderContainer>
            <Logo />
            <Menu />
        </HeaderContainer>
    );
}

export default Header;