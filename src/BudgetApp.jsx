import { useState } from "react";
import Header from "./components/Header";
import PlusIcon from "./assets/svg/nuevo-gasto.svg";
import Modal from "./components/Modal";

function BudgetApp() {
  const [budget, setBudget] = useState(0);
  const [budgetIsValid, setBudgetIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const newExpense = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        budgetIsValid={budgetIsValid}
        setBudgetIsValid={setBudgetIsValid}
      />
      {budgetIsValid && (
        <div className="nuevo-gasto">
          <img src={PlusIcon} alt="plus icon" onClick={newExpense} />
        </div>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
    </div>
  );
}

export default BudgetApp;
