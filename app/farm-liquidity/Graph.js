'use client'
// components/Graph.js  
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'A', value:500 },
  { name: 'B', value: 300 },
  { name: 'C', value: 200 },
  { name: 'D', value: 278 },
  { name: 'E', value: 589 },
  { name: 'F', value: 239 },
  { name: 'G', value: 349 },
  { name: 'H', value: 300 },
  { name: 'I', value: 400 },
  { name: 'J', value: 900 },
  { name: 'J', value: 600 },
  { name: 'J', value: 700 },
  { name: 'J', value: 800 },
  { name: 'J', value: 500 },
  { name: 'J', value: 900 },
  { name: 'J', value: 600 },
];

const Graph = () => {
  return (
    <div className='w-full'>
      <ResponsiveContainer width="100%" height={500} >
        <AreaChart data={data} >
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="url(#colorUv)"
            strokeWidth={3}
            dot={false}
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;