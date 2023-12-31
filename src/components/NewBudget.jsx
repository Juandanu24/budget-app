import { useState } from "react";
import PropTypes from "prop-types";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setBudgetIsValid }) => {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget <= 0) {
      setMessage("No es un presupuesto válido");
      return;
    }
    setMessage("");
    setBudgetIsValid(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Define tu presupuesto!</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {message && <Message type={"error"}>{message}</Message>}
      </form>
    </div>
  );
};

NewBudget.propTypes = {
  budget: PropTypes.number,
  setBudget: PropTypes.func,
  setBudgetIsValid: PropTypes.func,
};

export default NewBudget;
