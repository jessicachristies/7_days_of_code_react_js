import logo from '../../images/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  float: left;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

function Logo() {
    return (
        <LogoContainer>
          <LogoImage 
            src={logo} 
            alt='Casa Verde' 
          />
        </LogoContainer>
    );
}

export default Logo;