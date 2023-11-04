const Input = ({
  placeholder,
  value,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className="appearance-none bg-green-200 text-gray-600 focus:bg-green-100 focus:outline-none rounded px-4 py-2"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></input>
  );
};

export default Input;
