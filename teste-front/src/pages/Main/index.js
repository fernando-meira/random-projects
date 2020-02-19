import React, { useState, useEffect } from 'react';

import {
  Header,
  Aside,
  FirstSection,
  BlockquoteSection,
  ListSection,
  TextSection,
  Footer,
} from '../../components';

import api from '../../services/api';

import { Container, ImgList } from './styles';

export default function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get('volumes?q=HARRY%20POTTER');

        const books = response.data.items;

        setItems(books);

        console.log(books);
      } catch (error) {
        console.log('Error', error.message);
      }
    }

    fetchBooks();
  }, []);
  return (
    <Container>
      <Header />
      <Aside />
      <FirstSection />
      <BlockquoteSection />
      <ListSection />
      <ImgList>
        {items.map(item => (
          <img
            key={item.id}
            src={item.volumeInfo.imageLinks.smallThumbnail}
            alt={item.volumeInfo.imageLinks.title}
          />
        ))}
      </ImgList>
      <TextSection />
      <Footer />
    </Container>
  );
}
