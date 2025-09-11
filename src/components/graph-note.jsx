import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const GraphNote = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} >
          <CartesianGrid stroke="#ffffff" />
          <XAxis dataKey="name"   tick={{ fill: '#ffffff', fontSize: 14 }} />
          <YAxis   tick={{ fill: '#ffffff', fontSize: 14 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Rouen" barSize={20} fill="#30b3cC" />
          <Bar dataKey="Le havre" barSize={20} fill="#7DDE92" />
          <Line type="monotone" dataKey="Moyenne" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphNote;
