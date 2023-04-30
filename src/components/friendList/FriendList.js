import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import { List } from "./FriendListStyled";

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(item => (  
                <FriendListItem key={item.id} friend={item} />
            ))}
        </List>
    )
}

FriendList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
};