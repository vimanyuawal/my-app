import React, { Component } from 'react';
import {
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";




class IndiaCases extends Component {

    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  getIndiaData() {
    fetch('https://api.covid19india.org/data.json')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log('Could not access data');
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    this.getIndiaData();
  }

  arrangeForGraph() {
    var data = this.state.items;
    var objectArray = [];
    var day = 1;
    
    for(var key in data['cases_time_series']) {

      var obj = {
              new_daily_deaths:data['cases_time_series'][key]['dailydeceased'],
              new_daily_cases:data['cases_time_series'][key]['dailyconfirmed'],
              dates:data['cases_time_series'][key]['date'],
              day: day
            }
      objectArray.push(obj);
      day += 1;
    } 

    objectArray.pop();
    
    return objectArray;

  }


  render() {
    const { error, isLoaded, items } = this.state;
    if(isLoaded) {
      var data = this.arrangeForGraph(items);
      console.log(data);   

      return (
        <div>
          <div className="row">
              <div className="col">
                <h4>India Cases</h4>
              </div>
            </div>
          <div className = "row">
            <div className="col recharts-wrapper">
              <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={data}
                    margin={{
                      top: 50,
                      right: 200,
                      left: 200,
                      bottom: 50
                    }
                    }
                  >
                  <CartesianGrid stroke="#efe" strokeDasharray="1 1"/>
                    <XAxis dataKey="dates"/>
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="new_daily_cases" stroke="#8884d8" />
                    <Line type="monotone" dataKey="new_daily_deaths" stroke="#82ca9d" />
                  </LineChart>
                  </ResponsiveContainer>
                </div>
            </div>
      </div>

          );
    }

    return (
        <p>Loading graph...</p>
      )
  }

}

export default IndiaCases;