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
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></input>
  );
};

export default Input;
