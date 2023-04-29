import PropTypes from 'prop-types';
import { Status, Avatar, Name } from "./FriendListItemStyled";

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
    return (
        <>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </>
    )
}

FriendListItem.propTypes = {
        friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
     }).isRequired
};