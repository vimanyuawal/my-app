import React from 'react'
import USChart from '../Charts/UnitedStatesCases'
import IndiaChart from '../Charts/IndiaCases'

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          showIndia: false
        };
  
      // This binding is necessary to make `this` work in the callback
      this.handleClickIndia = this.handleClickIndia.bind(this);
      this.handleClickUS = this.handleClickUS.bind(this);
    }
  
    handleClickIndia() {
      this.setState(state => ({
        showIndia: true
      }));
    }

    handleClickUS() {
        this.setState(state => ({
          showIndia: false
        }));
      }
  
    render() {
        if(!this.state.showIndia)
        {
            return (
                <div>
                    <USChart />
                    <div className="btn-group mr-2">
                        <button type="button" class="btn btn-outline-primary btn-group">
                        United States
                        </button>
                    </div>
                    <div className="btn-group">
                        <button type="button" class="btn btn-outline-primary btn-group" onClick={this.handleClickIndia}>
                        India
                        </button>
                    </div>
                </div>
            );
        }

        return (
                <div>
                    <IndiaChart />
                        <div className="btn-group mr-2">
                            <button type="button" class="btn btn-outline-primary btn-group" onClick={this.handleClickUS}>
                            United States
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" class="btn btn-outline-primary btn-group">
                            India
                            </button>
                        </div>
                </div>
        )
    }
  }

export default Home;