import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, ProductList, ProductItem } from "./styles";

export function Cart() {
    const reduxCart = useSelector((state) => state.cartProducts.products);
    const [showCart, setShowCart] = useState(false);

    return (
        <Container onClick={() => { (!showCart && reduxCart.length > 0) ? setShowCart(true) : setShowCart(false) }}>
            <FaShoppingCart size={30} />
            <p>{reduxCart.length}</p>
            {showCart &&
                <ProductList>
                    {reduxCart.map((product) => {
                        return <Link to={`/produto/${product.id}`}>
                            <ProductItem>
                                <h3>{product.name} - <b>R${product.price}</b></h3>
                            </ProductItem>
                        </Link>
                    })}
                </ProductList>
            }
        </Container>
    )
}