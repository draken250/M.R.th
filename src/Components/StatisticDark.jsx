import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
  YAxis,
} from "recharts";

function StatisticDark() {
  const calorieValues = [
    { total: 80 }, // Sun
    { total: 120 }, // Mon
    { total: 90 }, // Tue
    { total: 150 }, // Wed
    { total: 120 }, // Thu
    { total: 120 }, // Fri
    { total: 80 }, // Sat
  ];

  const getLastSevenDays = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < calorieValues.length; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const { total } = calorieValues[i];
      days.push({
        date: date.toLocaleDateString("en-US"),
        total,
      });
    }

    return days.reverse();
  };

  const calorieData = getLastSevenDays();

  const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;
    const radius = 18;
    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        radius={radius}
      />
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const date = new Date(payload[0].payload.date);
      const options = { day: "numeric", month: "short", year: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);

      return (
        <div
          style={{
            color: "#000",
            backgroundColor: "#ffffff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <p className="text-sm pb-1 font-medium text-lightBlackText/70">
            On {formattedDate}
          </p>
          <p className="text-sm flex items-center justify-start gap-1 pb-1">
            <div className="h-[20px] w-[4px] rounded-md bg-[#c2da61]"></div>
            <div>
              Total Calories: <span className="font-semibold">{payload[0].value}</span>
            </div>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-fit pl-6 pt-8">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={calorieData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barCategoryGap="0%"
          barSize={50}
        >
          <CartesianGrid strokeDasharray="5 10" strokeOpacity={.7} />
          <YAxis orientation="right" tick={{fontSize: 12}} />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickFormatter={(date) => {
              const today = new Date();
              const dateObj = new Date(date);
              const options = { weekday: "short" };

              if (dateObj.toDateString() === today.toDateString()) {
                return "Today";
              } else if (
                dateObj.toDateString() ===
                new Date(today.setDate(today.getDate() - 1)).toDateString()
              ) {
                return "Yesterday";
              } else {
                return dateObj.toLocaleDateString("en-US", options);
              }
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#aaaaaa20" }} />
          <Bar
            dataKey="total"
            fill="#c2da61"
            shape={<RoundedBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatisticDark;
