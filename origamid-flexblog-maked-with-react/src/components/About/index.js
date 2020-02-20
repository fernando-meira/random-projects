import React from 'react';

import sobre1 from '../../assets/sobre1.jpg';
import sobre2 from '../../assets/sobre2.jpg';

import { Container, H1, TextAbout, ImgAbout } from './styles';

export default function About() {
  return (
    <>
      <H1>
        Novos valores e <br /> Propriedades de CSS
      </H1>
      <Container>
        <TextAbout>
          <h2>Sobre</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente apropriadas objetivos.
          </p>

          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente apropriadas objetivos.
          </p>
        </TextAbout>

        <ImgAbout>
          <img src={sobre1} alt="sobre1" />

          <img src={sobre2} alt="sobre2" />
        </ImgAbout>
      </Container>
    </>
  );
}
