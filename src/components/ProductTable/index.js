import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
import { Container, ProductListItem, Header } from "./styles";
import productImage from '../../assets/product.png';
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { useCallback } from "react";

export function ProductTable() {
    const [products, setProducts] = useState([]);

    const { user } = useAuth();

    const fetchProducts = async () => {
        const response = await api.get(`products/user/${user.id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });

        setProducts(response.data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return <>
        <Header>
            <h1>Seus Produtos:</h1>
            <Link to="/admin/produto/novo"><Button>Novo Produto</Button></Link>
        </Header>
        <Container>
            {products.map(product => {
                return <Link to={`/admin/produto/${product.id}`} key={product.id}>
                    <ProductListItem>
                        <img src={productImage} alt={product.name} />
                        <h4>{product.name}</h4>
                        <h4>R$ {product.price}</h4>
                        <h4>Estoque: {product.inventory}</h4>
                    </ProductListItem>
                </Link>
            })}
        </Container>
    </>
}