const Option = ({ text }: { text: string }) => {
  return (
    <div className="absolute mt-4 inset-x-0 p-7 bg-slate-50 leading-8 text-gray-500 font-medium border">
      {text}
    </div>
  );
};

export default Option;
