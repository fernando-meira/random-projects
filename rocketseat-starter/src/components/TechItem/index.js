import React from 'react';
import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';

import { Container } from './styles';

export default function TechItem({ tech, onDelete }) {
  return (
    <Container key={tech}>
      {tech}

      <button type="button" onClick={onDelete}>
        <TiDelete />
      </button>
    </Container>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
