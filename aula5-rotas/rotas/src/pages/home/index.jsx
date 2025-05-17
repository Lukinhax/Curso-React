import React from 'react'
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/index';
import Header from '../../components/Header';
import { Container, TextContent, Title, TitleHighLight } from './styles';
import banner from '../../assets/banner.png';

export default function Home() {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header/>
      <Container>

        <div>
            <Title>
              <TitleHighLight>
              Implemente
              <br />
              </TitleHighLight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo 
              desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="começar agora" variant="secondary" onClick={handleClickSignIn}/>
        </div>

        <div>
            <img src={banner} alt="Imagem principal" />
        </div>

      </Container>
    </>
  )
}
