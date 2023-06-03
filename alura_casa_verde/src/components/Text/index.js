import styled from "styled-components";

export const Text = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    color: ${props => props.color || '#000'};
    font-size: ${props => props.fontSize || '18px'};
    text-align: ${props => props.textAlign || 'center'};

    opacity: 0.5;
`;
