import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
               <li><ButtonText tittle="Todos" /></li> 
               <li><ButtonText tittle="React" /></li> 
               <li><ButtonText tittle="Nodejs" /></li> 
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>

            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>

        </Container>
    );
}