import React from 'react';

import { Container } from './styles';

const data = [
  'Dollor sit amet abin coin said upper',
  'Aint no sunfiun weri gasty non',
  'Dollor sit amet abin coin said upper',
  'Aint no sunfiun weri gasty non',
  'Dollor sit amet abin coin said upper',
  'Aint no sunfiun weri gasty non',
];

export default function ListSection() {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
        ultricies erat, eu feugiat nunc. Nulla nulla libero, accumsan sed ex ut,
        elementum accumsan neque. Curabitur eget justo sit amet leo consequat
        egestas. Vestibulum sagittis dui eu enim interdum tempor. Suspendisse
        potenti. Duis et nibh dolor. Vestibulum vulputate, dui quis elementum
        tristique, nibh urna tincidunt tellus, ut congue neque mauris a eros.
        Donec luctus dui eget pretium congue. Mauris tincidunt tincidunt
        lacinia. Praesent ut velit metus. Proin vestibulum ante leo, id
        ullamcorper mi sodales sed. Suspendisse potenti. Phasellus ac diam
        lacus. Aenean volutpat dolor quam, nec ornare tortor sollicitudin in.
        Vivamus quis ante feugiat, bibendum massa ac, aliquet augue.
      </p>

      <ul>
        {data.map((item, index) => (
          <li key={index + 1}>
            <span>{index + 1}.</span>
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
}
