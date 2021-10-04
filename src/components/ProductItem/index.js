import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import productImage from '../../assets/product.png';
import { setCart } from "../../store/actions/cartActions";
import { Button } from "../Button";
import { useState } from "react";
import { Container, ProductInfo } from "./styles";
import { useEffect } from "react";

export function ProductItem({ id, name, price, inventory, creator }) {
    const dispatch = useDispatch();
    const [inCart, setInCart] = useState(false);
    const cartProducts = JSON.parse(localStorage.getItem('shopping_cart'));
    const reduxCart = useSelector((state) => state.cartProducts.products);

    useEffect(() => {
        if (reduxCart.filter(product => product.id === id).length > 0) {
            setInCart(true);
        }
    }, [reduxCart, id])

    function setCartInStorage() {
        const product = {
            id,
            name,
            price,
            inventory,
        }

        if (reduxCart.filter(product => product.id === id).length > 0) {
            return;
        }

        localStorage.setItem('shopping_cart', JSON.stringify([...cartProducts, product]))
        dispatch(setCart([...reduxCart, product]));
    }

    function removeFromCart() {
        const filteredProducts = reduxCart.filter(product => product.id !== id);
        localStorage.setItem('shopping_cart', JSON.stringify([...filteredProducts]))
        dispatch(setCart([...filteredProducts]));
        setInCart(false);
    }

    return (
        <Container>
            <img src={productImage} alt={name} />
            <section>
                <ProductInfo>
                    <h3>{name}</h3>
                    <h2>R$ {price}</h2>
                    <p>{inventory} em estoque</p>
                    <p>Vendido por: {creator.name}</p>
                </ProductInfo>
                {!inCart &&
                    <Button onClick={() => setCartInStorage()}><FaShoppingCart /> Adicionar ao carrinho</Button>
                }
                {inCart &&
                    <Button onClick={() => removeFromCart()}><FaShoppingCart /> Remover do carrinho</Button>
                }
            </section>
        </Container>
    )
}