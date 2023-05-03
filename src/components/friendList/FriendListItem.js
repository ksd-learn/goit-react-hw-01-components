import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from "./FriendListItemStyled";

export const FriendListItem = ({ friend: { avatar, name, isOnline} }) => {
    return (
        <ListItem>
            <Status isOnline={isOnline}/>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListItem>
    )
}

FriendListItem.propTypes = {
        friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
     }).isRequired
};