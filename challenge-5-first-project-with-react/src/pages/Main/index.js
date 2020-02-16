import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container } from '../../components/Container';

import { SubmitButton, Form, List, Input } from './styles';

export default function Main() {
  const [repos, setRepo] = useState([]);
  const [newRepo, setNewRepo] = useState('');
  const [loading, setLoading] = useState(false);
  const [erros, setErros] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const { data: response } = await api.get(`/repos/${newRepo}`);

      const data = {
        id: response.id,
        name: response.name,
        fullName: response.full_name,
      };

      const newRepos = [...repos, data];

      setRepo(newRepos);

      setNewRepo('');

      localStorage.setItem('repositories', JSON.stringify(newRepos));

      setErros(false);

      setLoading(false);
    } catch (error) {
      if (error.message === 'Request failed with status code 404') {
        setNewRepo('');
      }

      console.log('Error', error.message);

      setLoading(false);

      setErros(true);
    }
  }

  const handleInputChange = e => {
    setNewRepo(e.target.value);
  };

  useEffect(() => {
    const repositories = JSON.parse(localStorage.getItem('repositories'));

    if (repositories) {
      setRepo(repositories);
    }
  }, []);

  return (
    <Container>
      <h1>
        <FaGithub />
        Repositories
      </h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Adicionar repositório"
          onChange={handleInputChange}
          value={newRepo}
          errorInput={erros}
        />

        <SubmitButton loadingButton={loading}>
          {loading ? (
            <FaSpinner color="#fff" size={16} />
          ) : (
            <FaPlus color="#fff" size={16} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repos.map(repo => (
          <li key={repo.id}>
            <span>{repo.name}</span>
            <Link to={`/repositories/${encodeURIComponent(repo.fullName)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
