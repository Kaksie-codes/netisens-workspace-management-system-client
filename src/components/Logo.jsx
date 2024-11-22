/* eslint-disable react/prop-types */
import NetisensLogo from '/net-logo.png'

const Logo = ({size}) => {
  return (
    <div className={`${size === 'big' ? 'w-full max-w-[230px] md:max-w-[250px] xl:w-[400px]' : 'w-[100px] xl:w-[150px]'}`}>
        <img src={NetisensLogo} alt="logo" className='w-full h-full object-cover'/>
    </div>
  )
}

export default Logo