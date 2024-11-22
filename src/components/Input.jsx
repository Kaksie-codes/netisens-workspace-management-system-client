/* eslint-disable react/prop-types */

const Input = ({type, placeholder}) => {
  return (
    <div className="relative border custom-input">
        <input type={type} className="w-full" />
        <span className="placeholder">{placeholder}<span className="text-red-800">*</span></span>
    </div>
  )
}

export default Input