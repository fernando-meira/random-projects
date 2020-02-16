import React, { useState, useEffect, useMemo } from 'react';

import TechItem from '../TechItem';

import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);

  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const handleInputChange = e => {
    setNewTech(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setTechs([...techs, newTech]);
    setNewTech('');
  };

  function handleDelete(tech) {
    setTechs(techs.filter(t => t !== tech));
    console.log(tech);
  }

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <Container>
      <h1>{newTech}</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => handleDelete(tech)}
            />
          ))}
        </ul>

        <p>Você tem {techSize} techs.</p>

        <input
          type="text"
          placeholder="Digite aqui"
          onChange={handleInputChange}
          value={newTech}
        ></input>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
