import styled from "styled-components";
import { Title } from "../../components/Title";
import { Text } from "../Text";
import NewsletterAssignature from "../NewsletterAssignature";

const NewsletterContainer = styled.div`
    position: absolute;
    margin-top: 20%;
    width: 50vw;
    height: 40vh;
    left: 20%;
`;

function Newsletter() {
    return (
        <NewsletterContainer>
            <Text 
                color="#202020"
                fontSize="22px"
                textAlign="left"
            >
                Sua casa com as
            </Text>
            <Title
                color="#202020"
                fontSize="82px"
                fontFamily="Elsie Swash Caps"
                textAlign="left"
            >
                melhores plantas
            </Title>
            <Text 
                color="#202020"
                fontSize="16px"
                textAlign="left"
            >
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </Text>
            <NewsletterAssignature />
        </NewsletterContainer>
    );
}

export default Newsletter;