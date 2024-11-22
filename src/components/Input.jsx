/* eslint-disable react/prop-types */

import { useState } from "react"

const Input = ({type, placeholder}) => {
  const [value, setValue] = useState(""); 

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="w-full ">
      {
        type === "select" ? (
          <select className="w-[fit-content] min-w-full custom-input p-[10px]" value={value} onChange={handleChange}>
            <option value="" disabled>Select your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not-to-say">Prefer not to say</option>
          </select>
        ) : (
          <div className="relative border custom-input w-full">
            <input
              type={type}
              value={value}
              className="w-full"
              onChange={handleChange}
            />
            <span className={`placeholder ${value.length > 0 ? 'has-value' : ''}`}>{placeholder}<span className="text-red-800">*</span></span>
          </div>
        )
      }      
    </div>
  )
}

export default Input