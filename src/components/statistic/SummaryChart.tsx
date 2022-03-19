import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartData } from "../../helper/convertToStats";

interface Props {
  data: ChartData[];
}

function SummaryChart({ data }: Props) {
  return (
    <div className="w-full h-96 mt-5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="items" stroke="#F9A109" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SummaryChart;
