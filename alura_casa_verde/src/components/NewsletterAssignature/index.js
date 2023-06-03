import styled from "styled-components";
import { Input } from "../Input";
import { Button } from "../Button";

const NewsletterField = styled.section`
    width: 100%;
    height: 6vh;
    left: 30%;
    top: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

function NewsletterAssignature() {
    return(
        <NewsletterField>
            <Input 
                placeholder="Insira seu e-mail"
            />
            <Button>Assinar newsletter</Button>
        </NewsletterField>
    );
}

export default NewsletterAssignature;