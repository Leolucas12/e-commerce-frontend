import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { setProducts } from "../../store/actions/charactersActions";
import { Container } from "./styles";

export function SearchInput() {
    const dispatch = useDispatch();
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

            console.log(searchText, response.data)

        dispatch(setProducts(response.data));
    }

    return (
        <Container>
            <form onSubmit={(e) => fetchProducts(e)}>
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button type="submit"><FaSearch /></button>
            </form>
        </Container>
    )
}