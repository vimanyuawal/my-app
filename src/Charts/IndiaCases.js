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
    var totalDeaths = 0;
    var totalCases = 0;
    
    for(var key in data['cases_time_series']) {

      var obj = {
              new_daily_deaths:data['cases_time_series'][key]['dailydeceased'],
              new_daily_cases:data['cases_time_series'][key]['dailyconfirmed'],
              dates:data['cases_time_series'][key]['date'],
              day: day,
              totalDeaths: (totalDeaths+Number(data['cases_time_series'][key]['dailydeceased'])),
              totalCases: (totalCases+Number(data['cases_time_series'][key]['dailyconfirmed']))
            }
      totalDeaths = obj.totalDeaths;
      totalCases = obj.totalCases;
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

      var deathsToday = data[data.length-1].new_daily_deaths;
      var deathsYesterday = data[data.length-2].new_daily_deaths;
      var totalDeathsToday = data[data.length-1].totalDeaths;
      var totalDeathsYesterday = data[data.length-2].totalDeaths;

      var casesToday = data[data.length-1].new_daily_cases;
      var casesYesterday = data[data.length-2].new_daily_cases;
      var totalCasesToday = data[data.length-1].totalCases;
      var totalCasesYesterday = data[data.length-2].totalCases;

      var pctChange_deathsToday = ((deathsToday - deathsYesterday)/deathsYesterday).toFixed(2);
      var pctChange_totalDeathsToday = ((totalDeathsToday - totalDeathsYesterday)/totalDeathsYesterday).toFixed(2);

      var pctChange_casesToday = ((casesToday - casesYesterday)/casesYesterday).toFixed(2);
      var pctChange_totalCasesToday = ((totalCasesToday - totalCasesYesterday)/totalCasesYesterday).toFixed(2);

      return (
        <div>
          <div className="row">
              <div className="col">
                <h4>India Cases</h4>
              </div>
            </div>
          <div className = "row">
            <div className="col recharts-wrapper">
              <ResponsiveContainer width="100%" height={500}>
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
            <div className="row">
                          <div className="col">
                            <h4>Deaths Today: {deathsToday} </h4>
                            <p>{(pctChange_deathsToday >= 0) && <p style={{color:'green'}}> +{pctChange_deathsToday}%</p> }
                            {(pctChange_deathsToday < 0) && <p style={{color:'red'}}> {pctChange_deathsToday}%</p>
                            }</p>
                            <h4>Total Deaths: {totalDeathsToday} </h4>
                            <p>{(pctChange_totalDeathsToday >= 0) && <p style={{color:'green'}}> +{pctChange_totalDeathsToday}%</p> }
                            {(pctChange_totalDeathsToday < 0) && <p style={{color:'red'}}> {pctChange_totalDeathsToday}%</p>
                            }</p>
                          </div>
                          <div className="col">
                          <h4>Cases Today: {casesToday} </h4>
                            <p>{(pctChange_casesToday >= 0) && <p style={{color:'green'}}> +{pctChange_casesToday}%</p> }
                            {(pctChange_casesToday < 0) && <p style={{color:'red'}}> {pctChange_casesToday}%</p>
                            }</p>
                            <h4>Total Cases: {totalCasesToday} </h4>
                            <p>{(pctChange_totalCasesToday >= 0) && <p style={{color:'green'}}> +{pctChange_totalCasesToday}%</p> }
                            {(pctChange_totalCasesToday < 0) && <p style={{color:'red'}}> {pctChange_totalCasesToday}%</p>
                            }</p>
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