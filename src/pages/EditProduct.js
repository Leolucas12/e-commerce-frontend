import { useEffect } from "react";
import { useCallback, useState } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import { AdminHeader } from "../components/AdminHeader";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import api from "../services/api";
import { Container, Content, TagsContainer, Tag, DeleteButton, Buttons } from "../styles/EditProduct";

export function EditProduct() {
    const { id } = useParams();
    const history = useHistory();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [inventory, setInventory] = useState('');
    const [tags, setTags] = useState('');
    const [tagValues, setTagValues] = useState([]);

    const fetchProduct = async () => {
        const response = await api.get(`products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });

        const product = response.data;
        setName(product.name);
        setPrice(product.price);
        setInventory(product.inventory);
        setTagValues(product.tags);
        let tags = '';
        product.tags.map(tag => {
            tags += tag + ', ';
        })
        setTags(tags);
    }

    useEffect(() => {
        fetchProduct();
    }, [id])

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        console.log(tagValues)
        try {
            await api.put(`products/${id}`, {
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

    const handleDelete = useCallback(async (id) => {
        await api.delete(`products/${id}`);
        history.push('/admin');
    }, [])

    return (
        <>
            <AdminHeader />
            <Container>
                <Content onSubmit={handleSubmit}>
                    <Buttons>
                        <Button onClick={() => history.goBack()} ><FaArrowLeft size={20} /></Button>
                        <Button onClick={() => handleDelete(id)} ><FaTrash size={20} /></Button>
                    </Buttons>
                    <h2>Atualizar Produto</h2>
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
                    <Button onClick={handleSubmit}>Atualizar</Button>
                </Content>
            </Container>
        </>
    )
}