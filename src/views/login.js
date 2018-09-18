import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Submit, FabebookButton, GoogleButton, OnlyTextButton } from '../components/button/button';
import { Input, VerticalForm } from '../components/input/input';
import { VerticalContainer } from '../components/container/container';

class Login extends Component {
    render() {
        return (
           <div>
               <header>
                   <h1>Login</h1>
               </header>
               <main>
                   <VerticalForm>
                       <Input type="email" placeholder="Email" required />
                       <Input type="password" placeholder="Senha" required />
                       <Submit value="Entrar" />
                   </VerticalForm>
                   <VerticalContainer>
                       <FabebookButton>Entrar com facebook</FabebookButton>
                       <GoogleButton>Entrar com google</GoogleButton>
                       <Link className="btn btn-only-text" to="/register">Fazer cadastro</Link>
                   </VerticalContainer>
               </main>
           </div> 
        )
    }
}

export default Login;