/* eslint-disable react/prop-types */

import { FaRegUser } from "react-icons/fa"

const WorkspaceCard = ({image, title, description, noOfUsers}) => {
  return (
    <div className="bg-white h-[350px] lg:h-[500px] rounded-2xl overflow-hidden">
      <div className="h-[50%] overflow-hidden">
        <img src={image} alt="workspace image" className="h-full w-full object-cover" />
      </div>
      <div className="h-50% text-black p-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="flex items-center justify-start mt-4 p-2 gap-4 border w-[fit-content] border-black rounded-sm">
          <FaRegUser />
          {noOfUsers}
        </div>        
      </div>
    </div>
  )
}

export default WorkspaceCard