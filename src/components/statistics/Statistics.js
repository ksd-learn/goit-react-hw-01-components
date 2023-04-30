import { Stats } from "./Stats";
import PropTypes from 'prop-types';
import { List, ListTitle, ListSection } from "./StatisticsStyled";


export const Statistics = ({ title="Upload stats", data }) => {
    return (
        <ListSection>
            <ListTitle>{title}</ListTitle>
            <List>
                {data.map((item, index) => (  
                    <Stats key={item.id} ind={index} item={item} />
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