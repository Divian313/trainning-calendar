import React from "react";
import "./Week.css";

function Week() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const now = new Date();
  const todayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1;
  // const today = days[todayIndex];

  return (
    <div className=" mt-5">
      <div className="row row-cols-7">
        {days.map((day, index) => {
          const date = now.getDate() + index - todayIndex;
          return (
            <div className="col">
              <div key={index} className={index === todayIndex ? "today" : ""}>
                <p>{day}</p>
                <div className="container day">
                  <p>{date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Week;
