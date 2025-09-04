import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const annee = [
  { name: 'Année 1', value: 40 },
  { name: 'Année 2', value: 35 },
  { name: 'Année 3', value: 33 },
  { name: 'Année 4', value: 25 },
  { name: 'Année 5', value: 24 },
];

export default function Example() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={annee}
            outerRadius={80}
            fill="#e94a34"
            label
            />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}