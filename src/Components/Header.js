import React from 'react'
import { Link } from 'react-router-dom';
import Styles from './Header.module.css';
import {ReactComponent as Dogs} from '../src/Assets/dogs.svg';
import { UserContext } from './UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
}

const Header = () => {
    return 
        <Header className={Styles.Header}> 
        <nav className={${styles.nav} 'container'}>
  <Link className={styles.logo} to="/" aria-label="Dogs - Home">
    <Dogs/>
  </Link>
  {data ? (
  <Link className={styles.login} to="/conta">
   {data.nome}
   <button onClick={userLogout}>Sair</button>
  </Link>
  ) : (
  <Link className={styles.login} to="/login">
    Login / Criar
  </Link>
  ) }

        </nav>
        </Header>
  
  };

export default Header;