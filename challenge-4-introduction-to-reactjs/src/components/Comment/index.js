import React from 'react';

import { Container } from './styles';

export default function Comment({ author, content }) {
  return (
    <Container>
      <img src={author.avatar} alt={author.name} />
      <div>
        <p>
          {author.name}
          <span>{content}</span>
        </p>
      </div>
    </Container>
  );
}
