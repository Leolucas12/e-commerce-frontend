import styled from 'styled-components';

export const InputContainer = styled.input`
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
`;