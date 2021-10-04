import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    background-color: #dfe6e9;
    height: 75px;
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const UserSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 5%;

    svg {
        cursor: pointer
    }
`;