import PropTypes from 'prop-types';
import { TransactionHistoryLine } from "./TransactionHistoryLine";
import { TransactionTable, TableHeader} from "./TransactionHistoryStyled";


export const TransactionHistory = ({dataBase}) => {
    return (
        <TransactionTable>
            <thead>
                <tr>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </tr>
            </thead>
            
            <tbody>
                {dataBase.map((item, index) => (
                    <TransactionHistoryLine key={item.id} line={item} ind={index} />
                ))}
            </tbody>
        </TransactionTable>
    )
}

TransactionHistory.propTypes = {
        dataBase: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
};