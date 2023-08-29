import BudgetDashboard from "./BudgetDashboard";
import NewBudget from "./NewBudget";
import PropTypes from "prop-types";

const Header = ({ budget, setBudget, budgetIsValid, setBudgetIsValid }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {budgetIsValid ? (
        <BudgetDashboard budget={budget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setBudgetIsValid={setBudgetIsValid}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  budget: PropTypes.number,
  setBudget: PropTypes.func,
  budgetIsValid: PropTypes.bool,
  setBudgetIsValid: PropTypes.func,
};

export default Header;
