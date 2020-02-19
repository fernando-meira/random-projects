import React from 'react';

import Comment from '../Comment';

import { Container, ItemHeader, Span } from './styles';

export default function PostItem({ author, content, date, comments }) {
  console.log('Author', author);
  return (
    <Container>
      <ItemHeader>
        <img src={author.avatar} alt={author.name} />

        <Span>
          {author.name}
          <span>{date}</span>
        </Span>
      </ItemHeader>

      <div>
        <p>{content}</p>
      </div>

      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </Container>
  );
}

//98110-1542
