import styled from "styled-components";

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