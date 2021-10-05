import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.ul`
    background-color: #dfe6e9;
    width: 100%;
    padding: 12px;
    border-radius: 0 0 10px 10px;
`;

export const ProductListItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #dfe6e9;
    padding: 6px;
    border-radius: 6px;

    &:hover {
        background: ${shade(0.2, '#dfe6e9')};
    }

    img {
        max-width: 50px;
        border-radius: 8px;
    }

    h4 {
        width: 20%;
    }

    svg {
        color: #d63031;
    }
`;

export const Header = styled.div`
    background-color: #dfe6e9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px;
    border-radius: 10px 10px 0 0;

    h1 {
        width: 100%;
    }

    a {
        width: 30%;

        button {
            width: 100%;
        }
    }
`;