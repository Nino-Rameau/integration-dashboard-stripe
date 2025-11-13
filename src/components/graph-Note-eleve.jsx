import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Example( {data} ) {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 20]}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#30b3cC" />
          <Line type="monotone" dataKey="moyenne classe" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}