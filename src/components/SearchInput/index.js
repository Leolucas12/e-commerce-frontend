import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { setProducts } from "../../store/actions/productsActions";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";

export function SearchInput() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchText, setSearchText] = useState('');

    async function fetchProducts(e) {
        e.preventDefault();
        const response = await api.get('products', {
            params: {
                tag: searchText
            }
        })
            .catch((err) => {
                console.log("Err: ", err);
            });

        dispatch(setProducts(response.data));
        history.push('/');
    }

    return (
        <Container>
            <form onSubmit={(e) => fetchProducts(e)}>
                <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <Button type="submit"><FaSearch /></Button>
            </form>
        </Container>
    )
}