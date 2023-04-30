import PropTypes from 'prop-types';
import { ListItem, Label, Percentage } from "./StatsStyled";


export const Stats = ({ ind, item: { label, percentage } }) => {
    return (
        <ListItem ind={ind}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </ListItem>       
    )
}

Stats.propTypes = {
        item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
};