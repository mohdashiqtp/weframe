import { Bell, ChevronDown, FolderClosed, MessagesSquare, Search, Videotape } from 'lucide-react'

const Navbar = async () => {


    return (
        <div className="h-[80px] text-white flex bg-[#15132B]">
            <div className="hidden md:flex ml-10 mt-3  h-[70%] rounded-full bg-[#211A75]  md:w-[350px] ">
                <Search className='mt-4 ml-5' />
                <input type="text" className='bg-transparent focus:border-none text-gray-500' placeholder='Search Here' />
            </div>
            <div className='hidden md:flex p-5 justify-between  items-center  md:w-[350px]'>
                <div>
                    <h2 className='text-violet-500' >other menus</h2>
                </div>
                <div className='flex  justify-between w-[60%]'>
                    <div className='relative cursor-pointer ml-2'>
                        <Bell />

                        <span className='absolute bottom-[17px]  text-center rounded-full left-[8px] w-5 h-5 bg-[#5ECFFF] '>5</span>


                    </div>
                    <div className='relative cursor-pointer ml-2'>
                        <Videotape />

                        <span className='absolute bottom-[17px]  text-center rounded-full left-[8px] w-5 h-5 bg-[#5ECFFF] '>5</span>


                    </div>
                    <div className='relative cursor-pointer ml-2'>
                        <MessagesSquare />

                        <span className='absolute bottom-[17px]  text-center rounded-full left-[8px] w-5 h-5 bg-[#5ECFFF] '>5</span>


                    </div>
                    <div className='relative cursor-pointer ml-2'>
                        <FolderClosed />

                        <span className='absolute bottom-[17px]  text-center rounded-full left-[8px] w-5 h-5  bg-red-500'></span>


                    </div>

                </div>

            </div>
            <div className='bg-211A75 p-3 hidden  md:flex items-center rounded-full justify-center m-4'>
                <div className='relative inline-flex'>
                    <select className="block appearance-none text-white font-bold w-full  bg-transparent  px-4 py-2 pr-8 rounded-full leading-tight focus:outline-none focus:border-blue-500 focus:bg-transparent  focus:shadow-outline-blue">
                        <option value="option1">English</option>
                        <option value="option2">Arabic</option>
                        <option value="option3">Chinese</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center w-[20%]'>

                <div className=" ml-10 w-[60px] h-[60px] rounded-lg bg-gray-400">
                </div>
                <div className="flex flex-col md:flex-row">
                     <h1>Instructor Day</h1>
                     <span className='text-gray-400'>Super Admin</span>
                </div>
                <ChevronDown />

            </div>
        </div>
    );
}

export default Navbar;