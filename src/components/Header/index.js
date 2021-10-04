import { FaShopify, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SearchInput } from "../SearchInput";
import { Container, UserSection } from "./styles";

export function Header() {
    return (
        <Container>
            <Link to='/'><FaShopify size={60} color="#0984e3" /></Link>
            <SearchInput/>
            <UserSection>
                <Link to='/cart'><FaShoppingCart size={30} /></Link>
                <Link to='/profile'><FaUserCircle size={30} /></Link>
            </UserSection>
        </Container>
    )
}