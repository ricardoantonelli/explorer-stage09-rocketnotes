import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
    
  return (
    <Container>

      <Header />

      <main>
       <Content>        
       
              <ButtonText tittle="Excluir nota"/>

              <h1>
                Introdução ao React
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem, 
                numquam vero illo soluta cupiditate perferendis nam odit doloremque sed
                nisi ab eveniet expedita provident maiores, veritatis magnam excepturi inventore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem, 
                numquam vero illo soluta cupiditate perferendis nam odit doloremque sed
                 nisi ab eveniet expedita provident maiores, veritatis magnam excepturi inventore.
              </p>

              <Section title="Links úteis">
                  <Links>
                      <li><a href="#">http://www.rocketseat.com.br</a></li>
                      <li><a href="#">http://www.rocketseat.com.br</a></li>
                  </Links>
              </Section>

              <Section title="Marcadores">
                  <Tag title="express"/>
                  <Tag title="nodejs"/>
              </Section>

              <Button title="Voltar"/>

        </Content> 

      </main>
       
    </Container>
   
   )
}

