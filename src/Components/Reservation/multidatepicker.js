import { useState } from "react"
import DatePicker from "react-multi-date-picker"

export default function Multidatepicker({element}) {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])

  return (
    <DatePicker 
      multiple
      value={values} 
      onChange={setValues}
      render={element}
    />
  )
}