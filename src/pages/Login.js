import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useAuth } from "../hooks/auth";
import { Container, Content } from "../styles/Login";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const history = useHistory();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            await signIn({
                email: email,
                password: password
            });
            history.push('/admin');
        } catch (err) {
            console.log(err)
        }
    }, [signIn, email, password, history])

    return (
        <>
            <Header />
            <Container>
                <Content onSubmit={handleSubmit}>
                    <h2>Fazer Login</h2>
                    <label>E-mail</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Senha</label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleSubmit}>Entrar</Button>
                </Content>
            </Container>
        </>
    )
}