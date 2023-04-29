import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import { List, ListItem } from "./FriendListStyled";

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(item => (  
                <ListItem key={item.id}>
                    <FriendListItem friend={item} />
                </ListItem>
            ))}
        </List>
    )
}

FriendList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
};