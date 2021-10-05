import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
`;

export const Content = styled.div`
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

export const Buttons = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
`;

export const Tag = styled.div`
    border-radius: 5px;
    padding: 10px 14px;
    margin: 5px 5px;
    background-color: #0984e3;
    color: white;
    font-weight: 500;
`;