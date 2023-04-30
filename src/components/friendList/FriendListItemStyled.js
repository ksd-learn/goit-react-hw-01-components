import styled from "styled-components";


export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 90%;
    padding: 10px 0;
    background: ${props => props.theme.colors.white};
    border: 1px solid #d0d0d0;
    border-radius: 4px;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    background: ${props => {
        return props.isOnline === true ? props.theme.colors.red : props.theme.colors.green
    }};
    border-radius: 50%;
    margin-left: 5%;
`;

export const Avatar = styled.img`
    width: 20%;
    margin-left: 5%;
`;

export const Name = styled.p`
    font-size: 16px;
    font-weight: 800;
    margin-left: 10%;
`;