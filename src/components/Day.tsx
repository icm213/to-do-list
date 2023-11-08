import { DayProps } from "../pages/calendar";

const Day = ({ children }: { children: DayProps }) => {
  return (
    <div className="bg-green-400 rounded-lg flex flex-col justify-center content-center items-center w-10 h-12 ">
      <div className="text-l pt-1">{children.dayOfMonth}</div>
      <div className="text-xs">{children.nameOfDay}</div>
    </div>
  );
};

export default Day;
