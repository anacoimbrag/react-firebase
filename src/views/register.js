import React, { Component } from 'react';
import { Input } from '../components/input/input';
import { Submit } from '../components/button/button';
import { register } from '../firebase/auth';
import { VerticalContainer } from '../components/container/container';

class Register extends Component {

    state = {
        name: undefined,
        email: undefined,
        password: undefined
    }

    onChangeInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })
    }

    doRegister = async () => {
        try {
            await register({ displayName: this.state.name, email: this.state.email, password: this.state.password })
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
            alert('Não foi possível fazer o cadastro.')
        }
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Registrar</h1>
                </header>
                <main>
                    <VerticalContainer>
                        <Input type='text' name='name' placeholder='Nome' onChange={this.onChangeInput} />
                        <Input type='email' name='email' placeholder='email@domain.com' onChange={this.onChangeInput} />
                        <Input type='password' name='password' placeholder='Senha' onChange={this.onChangeInput} />
                        <Submit value='Registrar' onClick={this.doRegister} />
                    </VerticalContainer>
                </main>
            </div>
        )
    }
}

export default Register;