import PropTypes from 'prop-types';
import { Label, Percentage } from "./StatsStyled";

export const Stats = ({ item: { label, percentage } }) => {
    return (
        <>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </>       
    )
}

Stats.propTypes = {
        item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
};