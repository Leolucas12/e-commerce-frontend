import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
`;

export const Content = styled.form`
    background-color: #dfe6e9;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 50%;

    label, input, button {
        width: 80%;
        text-align: left;
        margin-bottom: 6px;
        flex: 0;
    }

    button {
        margin-top: 12px;
        text-align: center;
    }
`;