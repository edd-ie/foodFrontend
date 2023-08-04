import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 3000
  },
  {
    name: 'Page B',
    uv: 3000
  },
  {
    name: 'Page C',
    uv: 2000
  },
  {
    name: 'Page D',
    uv: 2780
  },
  {
    name: 'Page E',
    uv: 1890
  },
  {
    name: 'Page F',
    uv: 2390
  },
  {
    name: 'Page G',
    uv: 3490
  },
];

export default class Trasnsactions extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: 270 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
