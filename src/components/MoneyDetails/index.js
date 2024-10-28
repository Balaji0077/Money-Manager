// Write your code here
import './index.css'

import {Component} from 'react'

class MoneyDetails extends Component {
 
  render() {
    const {income, expenses} = this.props
    return (
      <>
        <div className="balance">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-images"
          />
          <div>
            <p className="money-heading">Your Balance</p>
            <p className="money-rupees" data-testid="balanceAmount">
              Rs {income - expenses}
            </p>
          </div>
        </div>
        <div className="income">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="money-images"
          />
          <div>
            <p className="money-heading">Your Income</p>
            <p className="money-rupees" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
        <div className="expenses">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="money-images"
          />
          <div>
            <p className="money-heading">Your Expenses</p>
            <p className="money-rupees" data-testid="expensesAmount">
              Rs {expenses}
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyDetails
