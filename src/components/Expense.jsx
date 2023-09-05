import PropTypes from "prop-types";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatDate, formatMoney } from "../helpers";

import IconoAhorro from "../assets/svg/icono_ahorro.svg";
import IconoHogar from "../assets/svg/icono_casa.svg";
import IconoComida from "../assets/svg/icono_comida.svg";
import IconoGastos from "../assets/svg/icono_gastos.svg";
import IconoOcio from "../assets/svg/icono_ocio.svg";
import IconoSalud from "../assets/svg/icono_salud.svg";
import IconoSuscripciones from "../assets/svg/icono_suscripciones.svg";

const iconsDictionary = {
  ahorros: IconoAhorro,
  comida: IconoComida,
  hogar: IconoHogar,
  ocio: IconoOcio,
  gastos: IconoGastos,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

const Expense = ({ expense, setEditExpense, deleteExpense }) => {
  const { name, amount, date, category, id } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Editar</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => deleteExpense(id)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={iconsDictionary[category]} alt="icon expense" />

            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{formatMoney(amount)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

Expense.propTypes = {
  expense: PropTypes.object,
  setEditExpense: PropTypes.func,
  deleteExpense: PropTypes.func,
};

export default Expense;
