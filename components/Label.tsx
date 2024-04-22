type LabelProps = {
  label: string;
  htmlFor: string;
};
const Label = ({ label, htmlFor }: LabelProps) => {
  return (
    <label className="text-slate-600 font-medium" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
