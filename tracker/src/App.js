
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import Transactionlist from './components/Transactionlist';
function App() {
  return (
    <div>
     <Header/>
     <div className='container'>
     <Balance/> 
     <IncomeExpenses/>
     <Transactionlist/>
    </div></div>
  );
}

export default App;
