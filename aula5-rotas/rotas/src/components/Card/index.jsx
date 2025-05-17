import React from 'react'
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles';
import {FiThumbsUp} from 'react-icons/fi';
import Fundo from '../../assets/fundo.jpeg'; 

export default function Card() {
  return (
    <CardContainer>
        <ImageBackground src={Fundo}/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                <div>
                    <h4>Lucas melo</h4>
                    <p>Há 8 min</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curdo de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp DIO do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
