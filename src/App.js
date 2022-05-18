import Button from 'react-bootstrap/Button'
import  Container from "react-bootstrap/Container";
import Stack from 'react-bootstrap/Stack'
import "./App.css";
import BudgetCard from './components/BudgetCard';
function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div style= {{display:"gird", gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))", gap:"1rem", alignItems: "flex-start"}}>
        <BudgetCard name = "Entertainmnet" amount={200} max={1000}/>
      </div>
    </Container>
  );
}

export default App;
