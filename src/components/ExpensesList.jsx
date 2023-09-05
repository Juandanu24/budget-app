import PropTypes from "prop-types";
import Expense from "./Expense";

const ExpensesList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  filteredExpenses,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {filteredExpenses.length
              ? "Gastos"
              : "No hay gastos en esta categoría"}
          </h2>
          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Gastos" : "No hay gastos"}</h2>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.array,
  setEditExpense: PropTypes.func,
  deleteExpense: PropTypes.func,
  filter: PropTypes.string,
  filteredExpenses: PropTypes.array,
};

export default ExpensesList;
