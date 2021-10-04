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
        max-width: 200px;
        border-radius: 12px;
    }

    h3 {
        color: #0984e3;
    }

    section {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        h2 {
            color: #d63031;
        }

        p {
            color: #636e72;
            font-size: 12px;
        }
    }
`;