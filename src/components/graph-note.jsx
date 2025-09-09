import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: '2020', a1: 13, a2: 16, a3: 12, a4: 15, a5: 12 },
  { name: '2021', a1: 18, a2: 14, a3: 13, a4: 14, a5: 17 },
  { name: '2022', a1: 15, a2: 13, a3: 17, a4: 19, a5: 12 },
  { name: '2023', a1: 20, a2: 14, a3: 14, a4: 13, a5: 18 },
  { name: '2024', a1: 17, a2: 16, a3: 13, a4: 18, a5: 15 },
  { name: '2025', a1: 19, a2: 12, a3: 16, a4: 20, a5: 14 },
];

const GraphNote = () => {
  return (
    <div className='h-96 w-2xl md:w-4xl flex justify-center items-center'>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
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
          <Line connectNulls type="monotone" dataKey="a1" stroke="#EBB9DF" fill="#EBB9DF" />
          <Line connectNulls type="monotone" dataKey="a2" stroke="#60992D" fill="#60992D" />
          <Line connectNulls type="monotone" dataKey="a3" stroke="#FC3162" fill="#FC3162" />
          <Line connectNulls type="monotone" dataKey="a4" stroke="#AFECE7" fill="#AFECE7" />
          <Line connectNulls type="monotone" dataKey="a5" stroke="#6A5D7B" fill="#6A5D7B" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
 export default GraphNote;