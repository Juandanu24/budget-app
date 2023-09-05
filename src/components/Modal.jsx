import { useEffect, useState } from "react";
import CerrarBtn from "../assets/svg/cerrar.svg";
import PropTypes from "prop-types";
import Message from "./Message";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense,
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
      setId(editExpense.id);
      setDate(editExpense.date);
    }
  }, [editExpense]);

  const closeModal = () => {
    setAnimateModal(false);
    setEditExpense({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const createNewExpense = (e) => {
    e.preventDefault();

    if ([name, amount, category].includes("")) {
      setErrorMessage("Todos los campos son obligatorios");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    saveExpense({ name, amount, category, id, date });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          className="pointer"
          src={CerrarBtn}
          alt="close pic"
          onClick={closeModal}
        />
      </div>
      <form
        onSubmit={createNewExpense}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>{editExpense.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>

        <div className="campo">
          <label htmlFor="name">Nombre del Gasto</label>
          <input
            id="name"
            type="text"
            placeholder="Añade un nuevo gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Cantidad</label>
          <input
            id="amount"
            type="number"
            placeholder="Añade un la cantidad ej. $300"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorros">Ahorros</option>
            <option value="comida">Comida</option>
            <option value="hogar">Hogar</option>
            <option value="ocio">Ocio</option>
            <option value="gastos">Gastos varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          value={editExpense.name ? "Guardar cambios" : "Agregar nuevo gasto"}
        />
        {errorMessage && <Message type="error">{errorMessage}</Message>}
      </form>
    </div>
  );
};

Modal.propTypes = {
  setModal: PropTypes.func,
  animateModal: PropTypes.bool,
  setAnimateModal: PropTypes.func,
  saveExpense: PropTypes.func,
  editExpense: PropTypes.object,
  setEditExpense: PropTypes.func,
};

export default Modal;
