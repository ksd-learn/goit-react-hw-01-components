import styled from "styled-components";

const colorListItem = ({ind, theme: {colors}}) => {
    switch (ind) {
        case 0:
            return colors.red;
        case 1:
            return colors.violet;
        case 2:
            return colors.green;
        case 3:
            return colors.blue;
        case 4:
            return colors.gray;
        default:
            return null
    }
}

export const ListSection = styled.section`
    width: 20%;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    margin-bottom: 1vw;
`;

export const List = styled.ul`
    display: flex;
`;

export const ListTitle = styled.h2`
    font-size: 16px;
    text-align: center;
    margin: 1vw 0;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100%/5);
    text-align: center;
    color: ${props => props.theme.colors.white};
    background: ${colorListItem}
`;



