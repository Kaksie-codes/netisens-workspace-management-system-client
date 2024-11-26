/* eslint-disable react/prop-types */

const CategoryCard = ({image, role, description, isInFocus}) => {
  return (
    <div style={{ backgroundColor: 'white', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }} className="bg-white h-[350px] rounded-3xl text-black px-5 py-10 flex flex-col items-center">
        <img src={image} alt="" />
        <h1 className="text-2xl font-bold">{role}</h1>
        <p className="text-center text-lg">{description}</p>
        <div>
        <div className="w-[40px] h-[40px] border border-green-500 rounded-full bg-white flex items-center justify-center">
            <div className={`w-[20px] h-[20px] rounded-full border border-white  ${isInFocus ? "bg-green-800" : ""}`}></div>
        </div>
        </div>
    </div>
  )
}

export default CategoryCard