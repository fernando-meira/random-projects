import React from 'react';

import BoxContainer from './BoxContainer';

import { Container } from './styles';

export default function TextSection() {
  return (
    <Container>
      <h2>Aint oupt sain crays</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        tincidunt augue ac quam ullamcorper, id volutpat nisi mollis. Aenean
        sagittis vehicula semper. Sed erat ante, fermentum ac rhoncus placerat,
        vehicula sed ex. Morbi congue malesuada fringilla. Nulla urna dui,
        venenatis sit amet urna sed, fermentum euismod lorem. Nulla facilisi.
        Nunc id libero at ligula dapibus vestibulum eu nec tellus. Donec laoreet
        ultricies lacus.
      </p>

      <BoxContainer />
      <p>
        Aenean eu luctus massa. Pellentesque blandit ligula quis mauris
        elementum interdum. In vitae tempor metus, nec feugiat ex. Curabitur
        fermentum sagittis lectus, sed pretium felis maximus quis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Aenean fermentum vitae sapien ac auctor.
      </p>
    </Container>
  );
}
