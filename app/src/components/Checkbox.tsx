import {useState} from "react";

interface CheckboxPropsType {
  setValue: (value: boolean) => void
  checked: boolean,
}

export default function Checkbox(props: CheckboxPropsType) {
  const [value, setValue] = useState<boolean>(props.checked)

  const handleChange = () => {
    setValue(!value)
    props.setValue(value)
  }

  return (
    <div className="inline-flex items-center absolute top-5 left-2 w-4 h-4">
      <label className="flex items-center cursor-pointer relative">
        <input type="checkbox" defaultChecked={value} onInput={handleChange} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-indigo-600 checked:bg-indigo-600" />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </span>
      </label>
    </div>
  )
}