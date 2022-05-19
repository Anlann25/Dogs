import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/Input';
import Button from '../forms/Button';
import UserForm from '../../Hooks/UserForm';
import {UserContext} from '../../UserContext';

const LoginForm = () => 
{
    const username = UserForm();
    const password = UserForm();
    
    const  { userLogin, error, loading } = React.useContext(UserContext);
  

    async function handleSubmit(event) {
        event.preventDefault();
        
        if(username.validate() && password.validate()){
         userLogin(username.value, password.value)

           
        }
    }


    return(
     <section>
     <form action="" onSubmit={handleSubmit}>
     <input label="Usuario" type="text" name="username" {...username} />
     <input label="Senha" type="password" name="password" {...password}/>
     {loading ?  <Button disabled >Carregando...</Button> 
     ) : (   
     <Button >Entrar</Button>
     )}

     
      <Button >Entrar</Button>
     {error && <p>{error}</p>}


     </form>
    <h1>Login</h1>

 <link to="/login/criar">Cadastro</Link>
    </section>
    );
};

export default LoginForm;