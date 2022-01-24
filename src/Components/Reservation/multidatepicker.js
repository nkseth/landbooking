import { CallMadeOutlined } from "@mui/icons-material";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
import "react-multi-date-picker/styles/layouts/mobile.css"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import "react-multi-date-picker/styles/colors/green.css"
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
   
      className="green"
      value={value}
      onChange={onChange}
      render={<Icon />}
      style={style}
     
      plugins={[
        <DatePanel />
       ]}
      minDate={new Date()}
     
    />
  );
}
