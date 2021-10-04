import { Link } from "react-router-dom";
import { Container, UserSection } from "./styles";
import productImage from '../../assets/product.png';

export function Product({ id, name, price, inventory}) {
    return (
        <Container>
            <Link to={`/${id}`}>
                <img src={productImage} alt={name} />
                <h3>{name}</h3>
                <section>
                    <h2>R$ {price}</h2>
                    <p>{inventory} em estoque</p>
                </section>
            </Link>
        </Container>
    )
}