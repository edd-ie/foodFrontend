import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

let total = 300+100+250+40+10

let data = [
    {subject: 'Burgers',A: 300, fullMark: total},
    {subject: 'sides', A: 100, fullMark: total},
    {subject: 'Fries', A: 250, fullMark: total},
    {subject: 'Main', A: 50	, fullMark: total},
    {subject: 'Desert',A: 10, fullMark: total},
    ]

// const data = [
//   {
//     subject: 'Math',
//     A: 120,
//     fullMark: 150,
//   },
//   {
//     subject: 'Chinese',
//     A: 98,
//     fullMark: 150,
//   },
//   {
//     subject: 'English',
//     A: 86,
//     fullMark: 150,
//   },
//   {
//     subject: 'Geography',
//     A: 99,
//     fullMark: 150,
//   },
//   {
//     subject: 'Physics',
//     A: 85,
//     fullMark: 150,
//   },
//   {
//     subject: 'History',
//     A: 65,
//     fullMark: 150,
//   },
// ];

export default class RadarGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/radar-chart-specified-domain-mfl04';

  render() {
    return (
      <ResponsiveContainer width="90%" height="80%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 500]} />
          <Radar name="Categories" dataKey="A" stroke="#ff9900" fill="#ff9900" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}