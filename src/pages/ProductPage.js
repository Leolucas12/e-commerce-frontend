import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { ProductItem } from "../components/ProductItem";
import api from "../services/api";
import { Container, Content } from "../styles/ProductPage";

export function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    const fetchProduct = async () => {
        const response = await api.get(`products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });

        setProduct(response.data);
    }

    useEffect(() => {
        fetchProduct();
    }, [id])

    return (
        <>
            <Header />
            <Container>
                <Content>
                    {product !== undefined &&
                        <ProductItem id={product.id} name={product.name} price={product.price} inventory={product.inventory} creator={product.creator} />
                    }
                </Content>
            </Container>
        </>
    )
}