import React, { PureComponent, Component } from "react";
import { ScatterChart, Scatter} from 'recharts';
import Chart from "react-apexcharts";
import {BrowserRouter as Router,Switch, Route, Link, useRouteMatch, useParams
} from "react-router-dom";
import {PieChart, Pie, Sector, Cell,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';
import './App.css';



const data4 = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: -1000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 500, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: -2000, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: -250, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data4.map(i => i.uv));
  const dataMin = Math.min(...data4.map(i => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const data5 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
 return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const data6 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];


class Ap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options1: { chart: {id: "basic-bar"}, xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]}},
      series1: [{name: "series-1",data: [30, 40, 45, 50, 49, 60, 70, 91]}],

      options2: {},
      series2: [44, 55, 41, 17, 15],
      labels2: ['A', 'B', 'C', 'D', 'E'],

      options3: { chart: {id: "basic-bar"}, xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]}},
      series3: [{name: "series-1",data: [30, 40, 45, 50, 49, 60, 70, 91]}]
    };
  }

  render() {
    return (
      <div className="app">

        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options1}
              series={this.state.series1}
              type="bar"
              width="300"
            />
          </div>
        </div>
		
        <div className="row">
          <div className="donut">
            <Chart options={this.state.options2} series={this.state.series2} type="donut" width="300" />
          </div>
        </div>

        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options3}
              series={this.state.series3}
              type="line"
              width="300"
            />
          </div>
        </div>
       
        <div className="row">

        <AreaChart
        width={300}
        height={200}
        data={data4}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>

        </div>

        <div className="row">
          <PieChart width={300} height={200}>
        <Pie
          data={data5}
          cx={100}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data6.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
        </div>
        <div className="row">
          <ScatterChart
          width={300}
          height={200}
          margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data6} fill="#8884d8" />
        </ScatterChart>
        </div>
      </div>      
    );
  }
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/saisie">Saisie</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/saisie">
            <Saisie />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Saisie() {
  return <h2>Saisie</h2>;
}