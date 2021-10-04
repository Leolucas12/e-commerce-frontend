import { Link } from "react-router-dom";
import productImage from '../../assets/product.png';
import { Container } from "./styles";

export function Product({ id, name, price, inventory}) {
    return (
        <Container>
            <Link to={`/produto/${id}`}>
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