import styled from "styled-components";

export const TableData = styled.td`
    width: calc(100%/3);
    font-size: 14px;
    border: 1px solid gray;
    background: ${props => props.ind % 2 === 0
        ? props.theme.colors.white : props.theme.colors.lightGray};
`;