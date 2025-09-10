import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const color = [
  "#e94a34",
  "#4caf50", 
  "#2196f3", 
  "#ff9800", 
  "#9c27b0", 
  "#00bcd4", 
  "#ffc107"  
];

const GraphRond = ( {data} ) => {
  return (
    <>
      <div className='h-96 w-96'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={900} height={900}>
            <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            outerRadius={80}
            label
            >
            {data.map((ligne, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={color[index % color.length]} 
              />
            ))}
          </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default GraphRond;