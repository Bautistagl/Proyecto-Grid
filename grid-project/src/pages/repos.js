import axios from 'axios';
import AuthComponent from '@/github/AuthComp';
import { useState } from 'react';


const ReposPage = ({ repos }) => {

  const selectedRepo = repos[0];
  const [repoContents, setRepoContents] = useState(null);


  // useEffect(() => {
  //   if (selectedRepo) {
  //     fetchRepoContents(selectedRepo);
  //   }
  // }, [selectedRepo]);

  // const fetchRepoContents = async (repo) => {
  //   try {
  //      // Utiliza el código de autorización para obtener el token de acceso
  //   const CLIENT_ID = 'Iv1.4c4e4dcaca465cb4';
  //   const CLIENT_SECRET = '4067558e0ad02b61718229a88176b7362afa1bb7';
  //   const REDIRECT_URI = 'http://localhost:3000/dashboard/repositories';

  //   const params = {
  //     client_id: CLIENT_ID,
  //     client_secret: CLIENT_SECRET,
  //     code: code,
  //     redirect_uri: REDIRECT_URI,
  //   };
  //   const response1 = await axios.post('https://github.com/login/oauth/access_token', null, {
  //     params: params,
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   });
   
  //   const accessToken = response.data.access_token;

   
  //     const response = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents/`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`, // Replace with your access token
  //       },
  //     });

  //     setRepoContents(response.data);
  //   } catch (error) {
  //     console.error('Error fetching repository contents', error);
  //     setRepoContents(null);
  //   }
  // };


  return (
    <div>
   
      <AuthComponent/>
      {/* {repoContents ? (
        <RepoDetails repoContents={repoContents} />
      ) : (
        <p>Loading repository contents...</p>
      )} */}
      
    </div>
  );
};

export async function getServerSideProps(context) {
  // Obtén el código de autorización de la URL de la solicitud
  const code ='d86ca08634447908491d';

  // Si no hay código de autorización, redirige a la página de autorización de GitHub
  if (!code) {
    const CLIENT_ID = 'Iv1.4c4e4dcaca465cb4';
    const REDIRECT_URI = 'http://localhost:3000/';
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
    const REDIRECT_URI = 'http://localhost:3000/dashboard/repositories';

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
      props: { repos },
    };
  } catch (error) {
    console.error('Error al obtener la lista de repositorios', error);
    return {
      props: { repos: [] },
    };
  }
}

export default ReposPage;