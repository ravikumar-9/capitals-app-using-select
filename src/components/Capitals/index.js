import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  getActiveCountry = capitalId => {
    const activeCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === capitalId,
    )

    console.log(activeCountry.country)
    return activeCountry.country
  }

  onChangeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  render() {
    const {capitalId} = this.state

    const country = this.getActiveCountry(capitalId)
    return (
      <div className="bg-container">
        <div className="capitals-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="selected-container">
            <select
              className="select-bar"
              onChange={this.onChangeCapital}
              value={capitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="options"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
