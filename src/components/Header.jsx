import BudgetDashboard from "./BudgetDashboard";
import NewBudget from "./NewBudget";
import PropTypes from "prop-types";

const Header = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  budgetIsValid,
  setBudgetIsValid,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {budgetIsValid ? (
        <BudgetDashboard
          expenses={expenses}
          setExpenses={setExpenses}
          budget={budget}
          setBudget={setBudget}
          setBudgetIsValid={setBudgetIsValid}
        />
      ) : (
        <NewBudget
          expenses={expenses}
          budget={budget}
          setBudget={setBudget}
          setBudgetIsValid={setBudgetIsValid}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  expenses: PropTypes.array,
  setExpenses: PropTypes.func,
  budget: PropTypes.number,
  setBudget: PropTypes.func,
  budgetIsValid: PropTypes.bool,
  setBudgetIsValid: PropTypes.func,
};

export default Header;
