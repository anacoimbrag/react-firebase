import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Submit, FabebookButton, GoogleButton } from '../components/button/button';
import { Input } from '../components/input/input';
import { VerticalContainer } from '../components/container/container';
import { login, facebookLogin, googleLogin } from '../firebase/auth';

class Login extends Component {

    state = {
        email: undefined,
        password: undefined
    }

    onChangeInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })
    }

    doLogin = async () => {
        try {
            await login({ email: this.state.email, password: this.state.password })
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
            alert('Ocorreu um erro ao fazer login')
        }
    }

    doFacebookLogin = async () => {
        try {
            await facebookLogin()
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
            alert('Ocorreu um erro ao fazer login com facebook')
        }
    }

    doGoogleLogin = async () => {
        try {
            await googleLogin()
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
            alert('Ocorreu um erro ao fazer login com google')
        }
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Login</h1>
                </header>
                <main>
                    <VerticalContainer>
                        <Input type='email' name='email' placeholder='Email' required onChange={this.onChangeInput} />
                        <Input type='password' name='password' placeholder='Senha' required onChange={this.onChangeInput} />
                        <Submit value='Entrar' onClick={this.doLogin} />
                    </VerticalContainer>
                    <VerticalContainer>
                        <FabebookButton onClick={this.doFacebookLogin}>Entrar com facebook</FabebookButton>
                        <GoogleButton onClick={this.doGoogleLogin}>Entrar com google</GoogleButton>
                        <Link className='btn btn-only-text' to='/register'>Fazer cadastro</Link>
                    </VerticalContainer>
                </main>
            </div>
        )
    }
}

export default Login;