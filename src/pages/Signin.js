import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useAuth } from "../hooks/auth";
import api from "../services/api";
import { Container, Content } from "../styles/Login";

export function Signin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const history = useHistory();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            await api.post('/users', {
                name: name,
                email: email,
                password: password,
            }).then(() => {
                signIn({
                    email: email,
                    password: password
                });
                history.push('/admin');
            })
        } catch (err) {
            console.log(err)
        }
    }, [signIn, name, email, password, history])

    return (
        <>
            <Header />
            <Container>
                <Content onSubmit={handleSubmit}>
                    <h2>Criar Conta</h2>
                    <Link to="/login">Já tem login?</Link>
                    <label>Nome</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                    <label>E-mail</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Senha</label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleSubmit}>Criar</Button>
                </Content>
            </Container>
        </>
    )
}