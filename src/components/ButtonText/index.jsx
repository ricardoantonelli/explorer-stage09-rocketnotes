import { Container } from "./styles";

export function ButtonText({ tittle, isActive = false, ...rest}){
    return(
        <Container 
        type="button"
        isActive={isActive}
        {...rest}>

            {tittle}
        
        </Container>
    );
}