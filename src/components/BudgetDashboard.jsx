import PropTypes from "prop-types";
import { formatMoney } from "../helpers";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetDashboard = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  setBudgetIsValid,
}) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(30);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    );
    const totalAvailable = budget - totalSpent;

    const newPercentage = ((totalSpent / budget) * 100).toFixed(2);

    setAvailable(totalAvailable);
    setSpent(totalSpent);

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1500);
  }, [expenses, budget]);

  const handleResetApp = () => {
    const resp = confirm("¿Deseas resetear presupuesto y gastos?");
    if (resp) {
      setBudget(0);
      setExpenses([]);
      setBudgetIsValid(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          text={`${percentage}% Gastado`}
          value={percentage}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span>
          {formatMoney(budget)}
        </p>
        <p className={`${available < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span>
          {formatMoney(available)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatMoney(spent)}
        </p>
      </div>
    </div>
  );
};

BudgetDashboard.propTypes = {
  expenses: PropTypes.array,
  setExpenses: PropTypes.func,
  budget: PropTypes.number,
  setBudget: PropTypes.func,
  setBudgetIsValid: PropTypes.func,
};

export default BudgetDashboard;
