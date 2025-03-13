import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/en";
import Footer from "../components/Footer";

dayjs.locale("en");

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs();

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const daysInMonth = endOfMonth.date();
  const startDay = startOfMonth.day();
  
  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div>
      <br /><br /><br />
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-xl">
        
        <div className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-t-xl">
          <button onClick={prevMonth} className="p-2">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-xl font-bold">{currentDate.format("MMMM YYYY")}</h2>
          <button onClick={nextMonth} className="p-2">
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center font-semibold text-gray-700 border-b">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2">{day}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-1 p-2">
          {Array(startDay).fill(null).map((_, index) => (
            <div key={index} className="p-4"></div>
          ))}
          {days.map((day) => {
            const isToday = today.isSame(currentDate.date(day), "day");
            return (
              <div
                key={day}
                className={`p-4 text-center border rounded-lg cursor-pointer hover:bg-blue-100 ${isToday ? "bg-blue-500 text-white font-bold" : ""}`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
      <br /><br />
      
      <Footer/>
    </div>
  );
};

export default MyCalendar;
