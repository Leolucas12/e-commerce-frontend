import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    width: 100%;
    border-radius: 5px;
    padding: 10px 14px;
    background-color: #0984e3;
    color: white;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    border: none;

    &:hover {
        background: ${shade(0.2, '#0984e3')};
    }
`;