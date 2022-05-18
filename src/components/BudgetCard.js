import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import { currencyFormatter } from "../utils.js";

const BudgetCard = ({ name, amount, max }) => {
  const getProgrssBarVariant = ({ amount, max }) => {
    const ratio = amount / max;
    if (ratio < 0.5) return "primary";
    if (ratio < 0.75) return "warning";
    return "danger";
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-felx align-items-baseline">
            {currencyFormatter.format(amount)}
            <span className="text-muted fs-6 ms-1">
              /{currencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          variant={getProgrssBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
