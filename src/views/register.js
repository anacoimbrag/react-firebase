import React, { Component } from 'react';
import { VerticalForm, Input } from '../components/input/input';
import { Submit } from '../components/button/button';

class Register extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Registrar</h1>
                </header>
                <main>
                    <VerticalForm>
                        <Input type="text" placeholder="Nome" />
                        <Input type="email" placeholder="email@domain.com" />
                        <Input type="password" placeholder="Senha" />
                        <Submit value="Registrar" />
                    </VerticalForm>
                </main>
            </div>
        )
    }
}

export default Register;