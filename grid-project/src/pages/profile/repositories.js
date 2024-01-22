import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';


const RepoDetails = ({ repoContents }) => {
  return (
    <div style={{color:'white'}}>
      {/* Display or use repoContents as needed */}
      <pre>{JSON.stringify(repoContents, null, 2)}</pre>
    </div>
  );
};

const Repositories = ({ repos, accessToken }) => {

  const [selectedRepoContents, setSelectedRepoContents] = useState(null);

   // Function to fetch repository contents
   const fetchRepoContents = async (repo) => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Replace with your access token
        },
      });

      setSelectedRepoContents(response.data);
    } catch (error) {
      console.error('Error fetching repository contents', error);
      setSelectedRepoContents(null);
    }
  };

  const handleRepoClick = (repo) => {
    fetchRepoContents(repo);
  };

  return (
    <div>
      <h1>Lista de Repositorios</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} >
            <Link href={`https://github.com/${repo.owner.login}/${repo.name}`}>
            {repo.name}
            </Link>
          </li>
        ))}
      </ul>

      {selectedRepoContents ? (
        <RepoDetails repoContents={selectedRepoContents} />
      ) : (
        <p>Select a repository to view its contents</p>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  // Obtén el código de autorización de la URL de la solicitud
  const code = context.query.code;
  

  // Si no hay código de autorización, redirige a la página de autorización de GitHub
  if (!code) {
   
    const CLIENT_ID = 'Iv1.4c4e4dcaca465cb4';
    const REDIRECT_URI = 'http://localhost:3000/repos';
    const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repos`;

    // Redirige al usuario a la página de autorización de GitHub
    context.res.writeHead(302, { Location: AUTH_URL });
    context.res.end();
    return { props: {} };
  }

  try {
    
    // Utiliza el código de autorización para obtener el token de acceso
    const CLIENT_ID = 'Iv1.4c4e4dcaca465cb4';
    const CLIENT_SECRET = '4067558e0ad02b61718229a88176b7362afa1bb7';
    const REDIRECT_URI = 'http://localhost:3000/profile/repositories';

    const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
      redirect_uri: REDIRECT_URI,
    };

    const response = await axios.post('https://github.com/login/oauth/access_token', null, {
      params: params,
      headers: {
        Accept: 'application/json',
      },
    });

    const accessToken = response.data.access_token;

    // Utiliza el token de acceso para obtener la lista de repositorios del usuario autenticado
    const reposResponse = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const repos = reposResponse.data;

    return {
      props: { repos,accessToken },
    };
  } catch (error) {
    console.error('Error al obtener la lista de repositorios', error);
    return {
      props: { repos: [] },
    };
  }
}

export default Repositories;