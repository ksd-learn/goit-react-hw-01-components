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

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100%/5);
    text-align: center;
    color: ${props => props.theme.colors.white};
    background: ${colorListItem}
`;

export const Label = styled.span`
    font-size: 12px;
    padding-top: 10px;
`;

export const Percentage = styled.span`
    font-size: 14px;
    font-weight: 700;
    padding-bottom: 10px;
`;
