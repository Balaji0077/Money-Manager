// Write your code here
import './index.css'
const Transaction = props => {
  const {details, deletedItem} = props
  const {id, title, amount, selected,value} = details
  const deleteItem = () => {
    return deletedItem(id, selected, amount)
  }
  return (
    <li className="list-items-transaction">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{value}</p>
      <button data-testid="delete" className="delete-btn" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default Transaction
