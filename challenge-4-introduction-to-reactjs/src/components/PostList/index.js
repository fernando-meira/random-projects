import React from 'react';

import { PostItem } from '../../components';

import data from '../../data';

import { Container } from './styles';

export default function PostList() {
  const posts = data.posts;

  console.log('Posts', posts);
  return (
    <Container>
      {posts.map(post => (
        <PostItem key={post.id} {...post} />
      ))}
    </Container>
  );
}
