import React from 'react';

import { Container } from './styles';

export default function Aside({ isHorizontal }) {
  return (
    <Container isHorizontal={isHorizontal}>
      <div>
        <a href="http://localhost:3000/" className="clap">
          <img src={require('../../assets/clap-gray-3@2x.png')} alt="Curtir" />
        </a>

        <p>37</p>
      </div>

      <a href="https://web.whatsapp.com/">
        <img
          src={require('../../assets/if-whatsapp-853339@2x.png')}
          alt="WhatsApp"
        />
      </a>

      <a href="https://www.facebook.com/">
        <img
          className="img-facebook"
          src={require('../../assets/if-entoni-facebook-330869@2x.png')}
          alt="Facebook"
        />
      </a>

      <a href="https://twitter.com/">
        <img src={require('../../assets/twiter@2x.png')} alt="Twitter" />
      </a>

      <a href="https://linkedin.com">
        <img
          src={require('../../assets/if-linkedin-853357@2x.png')}
          alt="Linkedin"
        />
      </a>

      <a href="https://gmail.com">
        <img src={require('../../assets/mail@2x.png')} alt="E-mail" />
      </a>
    </Container>
  );
}

Aside.defaultProps = {
  isHorizontal: false,
};
