import { Stats } from "./Stats";
import PropTypes from 'prop-types';
import { List, ListItem, ListTitle, ListSection } from "./StatisticsStyled";

export const Statistics = ({ data }) => {
    return (
        <ListSection>
            <ListTitle>Upload stats</ListTitle>
            <List p='h'>
                {data.map((item, index) => (  
                    <ListItem key={item.id} ind={index}>
                        <Stats item={item} />
                    </ListItem>
                ))}
            </List>
        </ListSection>
    )
}

Statistics.propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
};