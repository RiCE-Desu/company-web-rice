/* eslint-disable react/prop-types */
import * as Icons from "lucide-react";

export const CardServices = ({ text, icon }) => {
  const IconComponent = Icons[icon] || Icons.AlertCircle;
  return (
    <div className="p-6 flex flex-row justify-center gap-5 items-center bg-white shadow rounded">
      <IconComponent />
    <p className="text-xl">{text}</p></div>
  );
}
