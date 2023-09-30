"use client"
import { ChevronLeftCircle, GripVertical, MessageSquare, UserPlus  , Plus } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { useState , useEffect } from 'react'
import Card from '@/components/card'


const toDoData = [
    {
        type : 'important',
        maxDue : 10,
        heading : 'create a HTML Page ',
        progress : 25
    }
]
const inprogressData = [

    {

        type : 'important',
        maxDue : 10,
        heading : 'create a HTML Page ',
        progress : 25

    },
    {

        type : 'Bug Fixing',
        maxDue : 10,
        heading : 'create a css Page ',
        progress : 5

    }

]

const doneData = [
    {

        type : 'Video',
        maxDue : 0,
        heading : 'create a javacript Page ',
        progress : 100

    }
]


export default function Kanban() {

  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

    return (
        <div className='p-8'>
            <div className="md:w-full hidden  md:flex h-[200px] bg-[#15132B] rounded-lg " >
                <div className="text-white w-[10%] flex p-10">

                    <ChevronLeftCircle />

                </div>
                <div className="w-[60%] pt-10">

                    <div>
                        <h1 className="text-4xl text-white font-bold">School November Task</h1>
                        <p className="font-semibold text-gray-500">created by instuctor day on November 31 ,2022</p>
                    </div>
                    <div>
                        <div className='relative'>
                            <span className='absolute w-[40px] h-[40px] top-[35px] rounded-full bg-gray-400'></span>
                            <span className='absolute w-[40px] h-[40px] left-[20px] top-[35px] rounded-full bg-gray-400'></span>
                            <span className='absolute w-[40px] h-[40px] left-[40px]  top-[35px] rounded-full bg-gray-400'></span>
                            <span className='absolute w-[40px] h-[40px] left-[60px]  top-[35px] rounded-full bg-gray-400'></span>
                            <span className='absolute w-[40px] h-[40px] left-[80px]  top-[35px] rounded-full bg-red-700 text-center text-1xl text-white items-center justify-center flex font-bold'>5+</span>

                        </div>
                        <div className='flex  w-[65%] justify-between ml-[140px] pt-[40px] '>
                            <div className='flex bg-violet-500 text-white rounded-md p-2'>
                                <UserPlus />
                                <button>Invite Poeple</button>

                            </div>
                            <div className='flex border border-violet-500 text-white rounded-md p-2'>

                                <button>Private</button>

                            </div>
                            <div className='flex bg-violet-500 text-white rounded-md p-2'>

                                <button>Exit</button>

                            </div>
                            <div className='flex border border-violet-500 text-white rounded-md p-2'>
                                <MessageSquare />
                                <button>45 Comments</button>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-[30%] pt-10 flex flex-col text-white pb-5 justify-between">
                    <div className='flex'>

                        <div>
                            <h1 className='text-lg font-bold'>Centered Martial Arts</h1>
                            <p className='text-gray-400'>sunnywale , Ca</p>
                        </div>

                        <div className=" ml-10 w-[60px] h-[60px] rounded-lg bg-gray-400">
                        </div>
                       

                    </div>
                    <div className='flex justify-between text-white p-2'>

                        <Progress value={progress} className='w-[80%] text-black border border-gray-400' />


                    </div>

                </div>

            </div>
            <div className='p-2 grid grid-cols-1 md:grid-cols-4 text-white lg:grid-cols-4'>
                <div className='w-full p-2'>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-bold '>To-Do List {toDoData.length} </h1>

                        <div className='w-[50px] h-[50px] rounded-lg flex justify-center items-center text-center font-bold bg-violet-500'>
                            <Plus />
                        </div>
                    </div>

                    <div className='flex flex-col p-2'>
                        {
                            toDoData.map((todo) => (
                                <Card card={todo} key={todo.type} />
                            ))
                        }
                    </div>

                </div>
                <div className='w-full p-2'>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-bold '>Inprogress {inprogressData.length} </h1>

                        <div className='w-[50px] h-[50px] rounded-lg flex justify-center items-center text-center font-bold bg-violet-500'>
                            <Plus />
                        </div>
                    </div>

                    <div className='flex flex-col p-2'>
                    {
                            inprogressData.map((todo) => (
                                <Card card={todo} key={todo.type} />
                            ))
                        }
                    </div>

                </div>
                <div className='w-full p-2'>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-bold '>Done {doneData.length} </h1>

                        <div className='w-[50px] h-[50px] rounded-lg flex justify-center items-center text-center font-bold bg-violet-500'>
                            <Plus />
                        </div>
                    </div>

                    <div className='flex flex-col p-2'>
                    {
                            doneData.map((todo) => (
                                <Card card={todo} key={todo.type} />
                            ))
                        }
                    </div>

                </div>
                <div className='w-full p-2'>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-bold '>Revised </h1>

                        <div className='w-[50px] h-[50px] rounded-lg flex justify-center items-center text-center font-bold bg-violet-500'>
                            <Plus />
                        </div>
                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </div>
    )
} 
