import { useCallback, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import { AdminHeader } from "../components/AdminHeader";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import api from "../services/api";
import { Container, Content, TagsContainer, Tag, Buttons } from "../styles/NewProduct";

export function NewProduct() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [inventory, setInventory] = useState('');
    const [tags, setTags] = useState('');
    const [tagValues, setTagValues] = useState([]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            await api.post('products', {
                name: name,
                price: price,
                inventory: inventory,
                tags: tagValues,
            })
            history.push('/admin');
        } catch (err) {
            console.log(err)
        }
    }, [name, price, inventory, tagValues])

    const handleTags = useCallback((tags) => {
        const tagsArray = tags.split(',');
        tagsArray.pop();
        setTags(tags);
        setTagValues(tagsArray);
    }, [])

    return (
        <>
            <AdminHeader />
            <Container>
                <Content onSubmit={handleSubmit}>
                    <Buttons>
                        <Button onClick={() => history.goBack()} ><FaArrowLeft size={20} /></Button>
                    </Buttons>
                    <h2>Cadastrar Produto</h2>
                    <label>Nome</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Preço</label>
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} onBlurCapture={() => setPrice(parseFloat(price).toFixed(2))} />
                    <label>Estoque</label>
                    <Input type="number" value={inventory} onChange={(e) => setInventory(e.target.value)} />
                    <label>Tags</label>
                    <Input placeholder="Tags separadas por vírgula" value={tags} onChange={(e) => handleTags(e.target.value)} />
                    <TagsContainer>
                        {tagValues.map((tag, index) => {
                            return <Tag key={index}>{tag}</Tag>
                        })}
                    </TagsContainer>
                    <Button onClick={handleSubmit}>Cadastrar</Button>
                </Content>
            </Container>
        </>
    )
}