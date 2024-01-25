import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Paginacion from '@/commons/Paginacion';
import { parse } from 'cookie';


const RepoDetails = ({ repoContents }) => {
  
  return (
    <div style={{color:'white'}}>
      {/* Display or use repoContents as needed */}
      <pre>{JSON.stringify(repoContents, null, 2)}</pre>
    </div>
  );
};

const Repositories = ({ repos }) => {


 

  const DynamicNavbar = dynamic(() => import('../../commons/SideNavbar'), {
    ssr: false,
    loading: () => <p> Im f</p>,
  });

  const [selectedRepoContents, setSelectedRepoContents] = useState(null);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [accessToken, setAccessToken] = useState('');
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRepos = repos.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

   // Function to fetch repository contents
   const fetchRepoContents = async (repo) => {
    try {
      const storedToken = Cookies.get('githubAccessToken');
      const response = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents`, {
        headers: {
          Authorization: `Bearer ${storedToken}`, // Replace with your access token
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
  const toggle = (i) => {
    return setSelected(i);
  };
  const [visible, setVisible] = useState(true);
  const toggleSideBar = () => {
    return setVisible(!visible);
  };
  

  return (
    <div>
       <div className={ visible ? "logged-home-component" : "logged-home-component-sin-sidebar"}>
         {!visible ? <button 
        onClick={()=>{toggleSideBar()}}
        className="boton-sidebar-mostrar"><img className="icon-mostrar" alt="" src='/abrir-side.png'/></button> :
         <>
          <div className="boton-sidebar-ocultar" onClick={()=>{ toggleSideBar()}}> <img className="icon-ocultar" alt="" src='/equal2.png'/> </div>
         <DynamicNavbar/>
        </> }
        <div style={{opacity:'0'}}>.</div>
       
    <Paginacion anterior="Home" links="/profile" titulo='Repositories' />
    <div className='contenedor-repositories'>

      <h1>Lista de Repositorios</h1>
      {currentRepos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
         <div>
        {Array.from({ length: Math.ceil(repos.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      {selectedRepoContents ? (
        <RepoDetails repoContents={selectedRepoContents} />
      ) : (
        <p>Select a repository to view its contents</p>
      )}
    </div>
    </div>
    </div>
   
  );
};

export async function getServerSideProps(context) {
  // Verifica si ya hay un accessToken en las cookies
  const storedToken = parse(context.req.headers.cookie || '').githubAccessToken;

  if (storedToken) {
    // Si hay un accessToken en las cookies, usa ese para obtener la lista de repositorios
    try {
      const reposResponse = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${storedToken}`,
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

  // Si no hay accessToken en las cookies, continúa con el proceso de autenticación
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

    // Guarda el nuevo accessToken en las cookies
    context.res.setHeader('Set-Cookie', `githubAccessToken=${accessToken}; Path=/; SameSite=None; Secure; HttpOnly`);

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

export default Repositories;