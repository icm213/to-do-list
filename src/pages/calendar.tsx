import { GiHamburgerMenu } from "react-icons/gi";
import { BsGearFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Calendar = () => {
  const [monthState, setMonthState] = useState("");

  const displayMonth = () => {
    const month = new Date().getMonth();

    switch (month) {
      case 0:
        setMonthState("January");
        break;
      case 1:
        setMonthState("February");
        break;
      case 2:
        setMonthState("March");
        break;
      case 3:
        setMonthState("April");
        break;
      case 4:
        setMonthState("May");
        break;
      case 5:
        setMonthState("June");
        break;
      case 6:
        setMonthState("July");
        break;
      case 7:
        setMonthState("August");
        break;
      case 8:
        setMonthState("September");
        break;
      case 9:
        setMonthState("October");
        break;
      case 10:
        setMonthState("November");
        break;
      case 11:
        setMonthState("December");
        break;
      default:
        setMonthState("Unable to display month");
        break;
    }
  };

  useEffect(() => displayMonth(), [monthState]);

  return (
    <div className="w-70 p-10">
      <div>
        <div>
          <div className="flex justify-between w-60">
            <GiHamburgerMenu />
            <BsGearFill />
          </div>
        </div>
      </div>
      <div className="flex w-70 justify-between py-10">
        <div className="text-gray-800 h-10">{`${new Date().getDate()} ${monthState}`}</div>
        <button className="bg-green-400 text-white  rounded-full py-2 px-4">
          Add Task
        </button>
      </div>
      <div> {/*notes*/}</div>
    </div>
  );
};

export default Calendar;
