import styled from "styled-components";

export const TransactionTable = styled.table`
    width: 40%;
    border-collapse: collapse;
    border: 1px solid gray;
`;

export const TableHeader = styled.th`
    width: calc(100%/3);
    font-size: 14px;
    border: 1px solid gray;
    background: ${props => props.theme.colors.blue};
`;
