import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import Transaction from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    selected: 'INCOME',
    historyTable: [],
    incomeRupee: 0,
    expensesRupee: 0,
    value: 'Income',
  }
  redirect = event => {
    return event.preventDefault()
  }

  select = event => {
    const s = event.target.value
    return this.setState({selected: s})
  }

  titleName = event => {
    const t = event.target.value
    return this.setState({title: t})
  }
  amountChange = event => {
    const a = event.target.value
    return this.setState({amount: a})
  }
  addme = () => {
    const {
      title,
      amount,
      selected,
      historyTable,
      incomeRupee,
      expensesRupee,
      value,
    } = this.state
    return selected === 'INCOME'
      ? this.setState(prevState => {
          return {
            historyTable: [
              ...prevState.historyTable,
              {
                id: uuidv4(),
                title: title,
                amount: amount,
                selected: selected,
                value: 'Income',
              },
            ],
            incomeRupee: prevState.incomeRupee + parseInt(amount),
            title: '',
            amount: '',
            selected: 'INCOME',
          }
        })
      : this.setState(prevState => {
          return {
            historyTable: [
              ...prevState.historyTable,
              {
                id: uuidv4(),
                title: title,
                amount: amount,
                selected: selected,
                value: 'Expenses',
              },
            ],
            expensesRupee: prevState.expensesRupee + parseInt(amount),
            title: '',
            amount: '',
            selected: 'INCOME',
          }
        })
  }

  filterDelete = (id, select, price) => {
    const {historyTable, incomeRupee, expensesRupee} = this.state
    const update = historyTable.filter(each => {
      if (each.id !== id) {
        return {...each}
      }
    })
    return this.setState(prevState => {
      if (select === 'INCOME') {
        return {
          historyTable: update,
          incomeRupee: prevState.incomeRupee - price,
        }
      } else {
        return {
          historyTable: update,
          expensesRupee: prevState.expensesRupee - price,
        }
      }
    })
    //return this.setState({historyTable: update})
  }
  render() {
    const {title, amount, historyTable, selected, incomeRupee, expensesRupee} =
      this.state
    return (
      <div className="home-container">
        <div className="name-container">
          <h1 className="name-heading">Hi, Balaji</h1>
          <p className="name-invite">
            Welcome back to your
            <span className="app-theme"> Money Manager</span>
          </p>
        </div>
        <div className="balance-container">
          <MoneyDetails income={incomeRupee} expenses={expensesRupee} />
        </div>
        <div className="add-history-containers">
          <div className="add-container">
            <form onSubmit={this.redirect}>
              <h1 className="add-heading">Add Transaction</h1>
              <label htmlFor="title" className="title-text">
                TITLE
              </label>
              <div className="containers">
                <input
                  placeholder="TITLE"
                  type="text"
                  value={title}
                  id="title"
                  className="type-name"
                  onChange={this.titleName}
                />
              </div>
              <label htmlFor="amount" className="title-text">
                AMOUNT
              </label>
              <div className="containers">
                <input
                  placeholder="AMOUNT"
                  type="text"
                  value={amount}
                  id="amount"
                  className="type-name"
                  onChange={this.amountChange}
                />
              </div>
              <label htmlFor="select" className="title-text">
                TYPE
              </label>
              <div className="containers">
                <select
                  id="select"
                  className="type-name"
                  value={selected}
                  onChange={this.select}
                >
                  {transactionTypeOptions.map(each => (
                    <option
                      key={each.optionId}
                      id={each.optionId}
                      value={each.optionId}
                    >
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-btn" onClick={this.addme}>
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="add-heading">History</h1>
            <ul className="history-table">
              <li className="history-items">
                <p className="para-text-1">Title</p>
                <p className="para-text-2">Amount</p>
                <p className="para-text-3">Type</p>
                <p></p>
              </li>
              {historyTable.map(each => (
                <Transaction
                  details={each}
                  key={each.id}
                  deletedItem={this.filterDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
