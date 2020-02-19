import React from 'react';

import { Header, PostList } from '../../components';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <PostList />
    </Container>
  );
}
