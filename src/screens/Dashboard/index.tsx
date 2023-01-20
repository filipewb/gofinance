import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import {
  Container, Header, UserInfo, Photo, User, UserGreeting, UserName, UserWrapper, Icon, HighlightCards
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/85641580?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Filipe</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
        type='up'
        title='Entradas' 
        amount='R$ 17.450,00' 
        lastTransaction='Ultima dia 12 de setembro.' 
        />
        <HighlightCard 
        type='down'
        title='Saidas' 
        amount='R$ 7.450,00' 
        lastTransaction='Ultima dia 13 de setembro.' 
        />
        <HighlightCard 
        type='total'
        title='Total' 
        amount='R$ 10.000,00' 
        lastTransaction='Ultima dia 13 de setembro.' 
        />
      </HighlightCards>
    </Container>
  )
}