import React from 'react'
import { Outlet } from 'react-router-dom'


const DashboardPage = () => {
  return (
    <div>
        <header className='bg-red-500 h-[80px] flex justify-between items-center px-10'>
            <h1>Logo</h1>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
        <section className='flex'>
            <aside className='bg-red-500 w-[200px] h-screen '>
                <h2 className='text-center'>Menu</h2>
                <ul className='flex flex-col items-center justify-center gap-[20px] mt-[100px]'>
                    <li>Dashboard</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </aside>
            <Outlet/>
        </section>
    </div>
  )
}

export default DashboardPage