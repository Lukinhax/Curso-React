import React from 'react'
import {Link} from 'react-router-dom';
import Button from '../../components/Button/index';
import Header from '../../components/Header';
import { Container, Column, Title, TitleHighLight} from './styles';
import Card from '../../components/Card';
import  UserInfo  from '../../components/UserInfo';

export default function Feed() {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column $flex={3}>
        <Title>Feed</Title>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </Column>
        <Column $flex={1}>
          <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
          <UserInfo percentual={80} nome="Lucas Melo" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <UserInfo percentual={27} nome="Lucas Melo" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <UserInfo percentual={89} nome="Lucas Melo" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <UserInfo percentual={57} nome="Lucas Melo" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <UserInfo percentual={12} nome="Lucas Melo" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
        </Column>
      </Container>
    </>
  )
}
