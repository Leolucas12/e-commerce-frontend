import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    p {
        font-size: 12px;
        position: absolute;
        top: -5px;
        right: -5px;
        background: #d63031;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
    }
`;

export const ProductList = styled.ul`
    width: 1200%;
    list-style: none;
    background-color: #b2bec3;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    top: 100%;
    right: 10%;
`;

export const ProductItem = styled.li`
    padding: 10px;
    background-color: #dfe6e9;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 2px;

    b {
        color: #d63031;
    }
`;
