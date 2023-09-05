import { useEffect, useState } from "react";
import Header from "./components/Header";
import PlusIcon from "./assets/svg/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generateId } from "./helpers";
import ExpensesList from "./components/ExpensesList";
import Filter from "./components/Filter";

function BudgetApp() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [budgetIsValid, setBudgetIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [editExpense, setEditExpense] = useState({});
  const [filter, setFilter] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    const budgetFromLS = Number(localStorage.getItem("budget")) ?? 0;
    if (budgetFromLS > 0) {
      setBudgetIsValid(true);
    }
  }, []);

  useEffect(() => {
    if (filter) {
      const filteredExpenses = expenses.filter(
        (expense) => expense.category === filter
      );
      setFilteredExpenses(filteredExpenses);
    }
  }, [filter, expenses]);

  const newExpense = () => {
    setModal(true);
    setEditExpense({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    if (expense.id) {
      //Update
      const updatedExpenses = expenses.map((expenseState) =>
        expenseState.id === expense.id ? expense : expenseState
      );
      setExpenses(updatedExpenses);
      setEditExpense({});
    } else {
      //Create
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        budgetIsValid={budgetIsValid}
        setBudgetIsValid={setBudgetIsValid}
      />
      {budgetIsValid && (
        <>
          <main>
            <Filter filter={filter} setFilter={setFilter} />
            <ExpensesList
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpenses={filteredExpenses}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={PlusIcon} alt="plus icon" onClick={newExpense} />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      )}
    </div>
  );
}

export default BudgetApp;
