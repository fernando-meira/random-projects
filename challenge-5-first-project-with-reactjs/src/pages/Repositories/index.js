import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import api from '../../services/api';

import { Container } from '../../components/Container';

import { Loading, Owner, IssuesList, Span } from './styles';

export default function Repositories({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function searchReposAndIssues() {
      const repoName = decodeURIComponent(match.params.repositories);

      const [response, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);

      setIssues(issues.data);
      setRepository(response.data);
      setLoading(false);
    }

    searchReposAndIssues();
  }, []);

  if (loading) {
    return (
      <Loading>
        <AiOutlineLoading3Quarters />
      </Loading>
    );
  }

  return (
    <Container>
      <h1>Repositories</h1>
      <Owner>
        <Link to="/">
          <IoIosArrowDropleft />
        </Link>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.owner.login}</h1>
        <p>{repository.description}</p>
      </Owner>

      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>

                {issue.labels.map(labels => (
                  <Span key={labels.id} color={`#${labels.color}`}>
                    {labels.name}
                  </Span>
                ))}
              </strong>

              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>
    </Container>
  );
}

Repositories.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repositories: PropTypes.string,
    }),
  }).isRequired,
};
