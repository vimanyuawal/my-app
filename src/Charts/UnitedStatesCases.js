import React, { Component } from 'react';
import {
  LineChart,
  ResponsiveContainer,
  ResponsiveContainerProps,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";




class UnitedStatesCases extends Component {

    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  getUS_Timeline() {
    fetch('https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTimeline=US')
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
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
    this.getUS_Timeline();
  }

  arrangeForGraph() {
    var data = this.state.items;
    var objectArray = [];
    var day = 1;
    var totalDeaths = 0;
    var totalCases = 0;
    
    for(var key in data['timelineitems'][0]) {
      var date = new Date(key);

      var obj = {
              new_daily_deaths:data['timelineitems'][0][key]['new_daily_deaths'],
              new_daily_cases:data['timelineitems'][0][key]['new_daily_cases'],
              dates:key,
              day: day,
              totalCases: (totalCases + Number(data['timelineitems'][0][key]['new_daily_cases'])),
              totalDeaths: (totalDeaths + Number(data['timelineitems'][0][key]['new_daily_deaths']))
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


      return (
              <div>
                <div className="row">
                    <div className="col">
                      <h4>United States Cases</h4>
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
                        <h6>Deaths Today: {data[data.length-1].new_daily_deaths}</h6>
                  <h6>Total Deaths: {data[data.length-1].totalDeaths}</h6>
                          </div>
                          <div className="col">
                          <h6>Cases Today: {data[data.length-1].new_daily_cases}</h6>
                          <h6>Total Cases: {data[data.length-1].totalCases}</h6>
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

export default UnitedStatesCases;