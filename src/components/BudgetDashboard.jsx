import PropTypes from "prop-types";

const BudgetDashboard = ({ budget }) => {
  const formatBudget = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatBudget(budget)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatBudget(0)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatBudget(0)}
        </p>
      </div>
    </div>
  );
};

BudgetDashboard.propTypes = {
  budget: PropTypes.number,
};

export default BudgetDashboard;
