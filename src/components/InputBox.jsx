import { useState } from "react";


const InputBox = ({
  name, 
  type, 
  // id, 
  onChange,
  value, 
  placeholder,  
  icon,
  errorMessage
}) => {
  const [passwordVisible, setPassWordVisible] = useState(false);
  return (
    <div className="pb-5 relative text-black">
      <div className="relative w-[100%]">
          <input
            name={name}
            type={type === 'password' ? passwordVisible ? 'text' : "password" : type}
            placeholder={placeholder}
            // id={id}
            onChange={onChange}
            value={value}
            className={`w-full ${errorMessage?.length ? 'border-red' : 'border-grey'} bg-grey focus:bg-transparent ${type === 'password' ? 'pr-12' : ''} w-[100%] rounded-md p-4  pl-12 border placeholder:text-black`}
            />
            {/* <Icon className={`fi  absolute input-icon`}/> */}
            <div className="absolute input-icon">{icon}</div>
          <div className="cursor-pointer text-black">
            {
              type === 'password' && <i className={`"fi ${passwordVisible ? 'fi-rr-eye' : 'fi-rr-eye-crossed'} input-icon left-[auto] right-4 cursor-pointer"`} onClick={() => setPassWordVisible(!passwordVisible)}></i>
            }
          </div>
      </div>
      {errorMessage && <p className="text-[#ff3860] absolute -bottom-[2px]">{errorMessage}</p>}
    </div>
  )
}

export default InputBox