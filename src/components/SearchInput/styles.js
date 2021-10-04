import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    display: flex;
    align-items: center;

    form {
        width: 100%;
        display: flex;
        align-items: center;
    }
    
    input {
        padding: 10px;
        flex: 1;
        background: #b2bec3;
        border: 0;
        border-radius: 5px;
        outline: none;
        
        &::placeholder {
            color: #666360;
        }

        &:focus {
            border: 1px solid #0984e3;
        }
    }
    
    button {
        border-radius: 5px;
        padding: 10px 14px;
        margin-left: 5px;
        background-color: #0984e3;
        color: white;
        font-weight: 500;
        cursor: pointer;
        outline: none;
        border: none;
    }
`;