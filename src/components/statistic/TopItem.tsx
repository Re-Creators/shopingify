interface Props {
  name: string;
  value: number;
  color: string;
}
function TopItem({ name, value, color }: Props) {
  return (
    <div>
      <div className="flex justify-between mt-3">
        <span>{name}</span>
        <span>{value}%</span>
      </div>
      <div className="relative w-full h-3 rounded-full bg-gray-300 mt-3 overflow-hidden">
        <div
          className={`absolute h-full inset-0 ${color}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default TopItem;
