import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 20%;
    padding: 10px 0;
    background: ${props => props.theme.colors.lightGray};
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    margin-bottom: 1vw;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 90%;
    padding: 10px 0;
    background: ${props => props.theme.colors.white};
    border: 1px solid #d0d0d0;
    border-radius: 4px;
`;