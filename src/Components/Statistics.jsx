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

function Statistics() {
  const bpmValues = [
    { rest: 60, active: 120 }, // Today
    { rest: 62, active: 115 }, // Yesterday
    { rest: 63, active: 118 }, // 3 days ago
    { rest: 61, active: 122 }, // 4 days ago
    { rest: 65, active: 119 }, // 5 days ago
    { rest: 64, active: 121 }, // 6 days ago
    { rest: 66, active: 117 }, // 7 days ago
  ];

  const getLastSevenDays = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < bpmValues.length; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const { rest, active } = bpmValues[i];
      days.push({
        date: date.toLocaleDateString("en-US"),
        rest,
        active,
      });
    }

    return days.reverse();
  };

  const bpmData = getLastSevenDays();

  const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;
    const radius = 16;
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
            <div className="h-[20px] w-[4px] rounded-md bg-[#8ecae6]"></div>
            <div>
              Resting BPM: <span className="font-semibold">{payload[0].value}</span>
            </div>
          </p>
          <p className="text-sm flex items-center justify-start gap-1 pb-1">
            <div className="h-[20px] w-[4px] rounded-md bg-[#219ebc]"></div>
            <div>
              Active BPM: <span className="font-semibold">{payload[1].value}</span>
            </div>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-fit">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={bpmData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barCategoryGap="0%"
          barSize={50}
        >
          <CartesianGrid strokeDasharray="5 10" />
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
            dataKey="active"
            stackId="a"
            fill="#219ebc"
            shape={<RoundedBar />}
          />
          <Bar
            dataKey="rest"
            stackId="a"
            fill="#8ecae6"
            shape={<RoundedBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Statistics;
