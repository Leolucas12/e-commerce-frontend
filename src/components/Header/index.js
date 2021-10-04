import { FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cart } from "../Cart";
import { SearchInput } from "../SearchInput";
import { Container, UserSection } from "./styles";

export function Header() {
    return (
        <Container>
            <Link to='/'><FaShopify size={60} color="#0984e3" /></Link>
            <SearchInput/>
            <UserSection>
                <Cart/>
            </UserSection>
        </Container>
    )
}