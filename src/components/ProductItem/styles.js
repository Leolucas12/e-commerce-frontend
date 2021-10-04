import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #dfe6e9;
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin: 5px;
    
    img {
        width: 500px;
        border-radius: 12px;
    }
    
    section {
        min-height: 500px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

export const ProductInfo = styled.div`
    h3 {
        color: #0984e3;
        font-size: 48px;
    }

    h2 {
        margin-top: 10%;
        color: #d63031;
        font-size: 36px;
    }

    p {
        margin-top: 10%;
        color: #636e72;
        font-size: 24px;
    }
`;