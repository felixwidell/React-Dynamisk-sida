import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles.css";
import loadingsymb from "./images/Loading-symbol.png"

const GitHubProjects = ({ username, type }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, type]);

  if (loading) return  <div className='loadingContainer'><img src={loadingsymb} className='loading'/><h3>Loading...</h3></div>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  return (
    <div className='repoWrapper'>
      <ul className='repoListElement'>
        {repos.slice(0,4).map(repo => (
          <li key={repo.id} className='repoList'>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className='repoListElement'>
        {repos.slice(5, 9).map(repo => (
          <li key={repo.id} className='repoList'>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProjects;