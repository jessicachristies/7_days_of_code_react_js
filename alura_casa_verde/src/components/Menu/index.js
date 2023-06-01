import styled from 'styled-components';

const MenuSection = styled.section`
    display: flex;
    content-align: left;
    margin: 3.6% 0 0 30%;
    background: transparent;
`;

const MenuItem = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #202020;
    text-decoration: none;
    cursor: pointer;
`;

const menuItems = [
    {name: 'Como fazer', href: '#'},
    {name: 'Ofertas', href: '#'},
    {name: 'Depoimentos', href: '#'},
    {name: 'Vídeos', href: '#'}
];

function Menu() {
    return(
        <MenuSection>
            {
                menuItems.map( (item) => (
                    <MenuItem href={item.href}>{item.name} /</MenuItem>
                ))
            }
        </MenuSection>
    );
}

export default Menu;