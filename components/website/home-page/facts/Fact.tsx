import Counter from "./Counter";

type FactProps = {
  id: number;
  value: number;
  label: string;
};
const Fact = ({ id, value, label }: FactProps) => {
  return (
    <div className="flex flex-col items-center">
      <Counter value={value} id={id} />
      <h2 className="text-lg font-semibold text-gray-300">{label}</h2>
    </div>
  );
};

export default Fact;
