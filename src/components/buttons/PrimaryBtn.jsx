/* eslint-disable react/prop-types */

const PrimaryBtn = ({styles, text}) => {
  return (
    <button className={` text-lg font-bold w-full md:w-[280px] xl:w-[300px] px-4 whitespace-nowrap rounded-[20px] p-[10px] gap-[10px] ${styles}`}>
        {text}
    </button>
  )
}

export default PrimaryBtn