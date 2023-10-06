import { useContext } from 'react';

import ExpensesOutput from '../Components/ExpOutput/ExpOutput';
import { ExpensesContext } from '../store/ExpContext';

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    return (
        <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            fallbackText="No registered expenses found!"
        />
    );
}

export default AllExpenses;
