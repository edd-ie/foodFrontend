import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '07/31',
    uv: 3000
  },
  {
    name: '07/31',
    uv: 3000
  },
  {
    name: '07/31',
    uv: 2000
  },
  {
    name: '07/31',
    uv: 2780
  },
  {
    name: '08/01',
    uv: 1890
  },
  {
    name: '08/01',
    uv: 2390
  },
  {
    name: '08/01',
    uv: 3490
  },
];

export default class Trasnsactions extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: '95%'}}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#ff9900 " fill="#ff9900" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
