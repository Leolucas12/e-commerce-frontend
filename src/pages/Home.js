import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header";
import { NotFound } from "../components/NotFound";
import { Product } from "../components/Product";
import api from "../services/api";
import { setProducts } from "../store/actions/productsActions";
import { Container, Content } from "../styles/Home";

export function Home() {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await api.get('products')
            .catch((err) => {
                console.log("Err: ", err);
            });

        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Content>
                    {products.map((product) => {
                        return <Product key={product.id} id={product.id} name={product.name} price={product.price} inventory={product.inventory} />
                    })}
                    {products.length === 0 &&
                        <NotFound />
                    }
                </Content>
            </Container>
        </>
    )
}