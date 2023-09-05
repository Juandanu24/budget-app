import PropTypes from "prop-types";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gasto</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">--Todas las categorías--</option>
            <option value="ahorros">Ahorros</option>
            <option value="comida">Comida</option>
            <option value="hogar">Hogar</option>
            <option value="ocio">Ocio</option>
            <option value="gastos">Gastos varios</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default Filter;
