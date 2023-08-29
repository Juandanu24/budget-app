import { useState } from "react";
import CerrarBtn from "../assets/svg/cerrar.svg";
import PropTypes from "prop-types";

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const closeModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const createNewExpense = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
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
        <legend>Nuevo Gasto</legend>

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
            onChange={(e) => setAmount(e.target.value)}
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

        <input type="submit" value="Agregar nuevo gasto" />
      </form>
    </div>
  );
};

Modal.propTypes = {
  setModal: PropTypes.func,
  animateModal: PropTypes.bool,
  setAnimateModal: PropTypes.func,
};

export default Modal;
