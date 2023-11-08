import { GiHamburgerMenu } from "react-icons/gi";
import { BsGearFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Day from "../components/Day";

export interface DayProps {
  dayOfMonth: number;
  nameOfDay: string;
}

const Calendar = () => {
  const [monthState, setMonthState] = useState("");
  const [daysArr, setDaysArr] = useState<DayProps[]>();

  useEffect(() => {
    const setDays = () => {
      const days: DayProps[] = [];
      const today = new Date().getTime();
      const twentyFourHours = 86_400_000;

      for (let i = 0; i < 7; i++) {
        const day = {
          dayOfMonth: new Date(today + twentyFourHours * i).getDate(),
          nameOfDay: displayDayOfWeek(today + twentyFourHours * i),
        };
        days.push(day);
      }
      setDaysArr((prev) => days);
    };
    setDays();
  }, []);

  const displayDayOfWeek = (date = new Date().getTime()) => {
    const dayOfWeek = new Date(date).getDay();
    let dayName;

    switch (dayOfWeek) {
      case 0:
        dayName = "Sun";
        break;
      case 1:
        dayName = "Mon";
        break;
      case 2:
        dayName = "Tue";
        break;
      case 3:
        dayName = "Wed";
        break;
      case 4:
        dayName = "Thu";
        break;
      case 5:
        dayName = "Fri";
        break;
      default:
        dayName = "Sat";
        break;
    }
    return dayName;
  };

  const displayMonth = (date = new Date().getTime()) => {
    const month = new Date(date).getMonth();

    let monthName;

    switch (month) {
      case 0:
        monthName = "January";
        break;
      case 1:
        monthName = "February";
        break;
      case 2:
        monthName = "March";
        break;
      case 3:
        monthName = "April";
        break;
      case 4:
        monthName = "May";
        break;
      case 5:
        monthName = "June";
        break;
      case 6:
        monthName = "July";
        break;
      case 7:
        monthName = "August";
        break;
      case 8:
        monthName = "September";
        break;
      case 9:
        monthName = "October";
        break;
      case 10:
        monthName = "November";
        break;
      case 11:
        monthName = "December";
        break;
      default:
        monthName = "Unable to display month";
        break;
    }
    return monthName;
  };

  useEffect(() => {
    setMonthState(displayMonth());
  }, [monthState, daysArr]);

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
      <div className="flex gap-4">
        {daysArr?.map((day, idx) => (
          <Day key={idx}>{day}</Day>
        ))}
      </div>
      <div> {/*notes*/}</div>
    </div>
  );
};

export default Calendar;
