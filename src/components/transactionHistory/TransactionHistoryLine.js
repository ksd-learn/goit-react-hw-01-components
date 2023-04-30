import PropTypes from 'prop-types';
import { TableData } from "./TransactionHistoryLineStyled";


export const TransactionHistoryLine = ({ line: { id, type, amount, currency }, ind }) => {
    
    return (
        <tr>
            <TableData ind={ind}>{type}</TableData>
            <TableData ind={ind}>{amount}</TableData>
            <TableData ind={ind}>{currency}</TableData>
        </tr>
    )
}

TransactionHistoryLine.propTypes = {
        line: PropTypes.objectOf(PropTypes.string)
};