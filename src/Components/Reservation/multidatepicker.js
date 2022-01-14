import { CallMadeOutlined } from "@mui/icons-material";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
export default function Multidatepicker({
  element,
  style,
  className,
  value,
  onChange,
}) {
  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [values, setValues] = useState([]);
  

  return (
    <DatePicker
      multiple
      value={value}
      onChange={onChange}
      render={<Icon />}
      style={style}
      className={className}
      minDate={new Date()}
    />
  );
}
