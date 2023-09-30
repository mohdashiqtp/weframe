import { Progress } from "./ui/progress"
import { Card } from "@/lib/types"
import Draggable from 'react-draggable'

type CardProps = {

    card : Card
}

const Card = ({

    card
    
} :  CardProps) => {

    return (
        <Draggable>
        <div className="cursor-pointer bg-[#211A75] rounded-lg h-[240px] p-2 mt-2">
            <div className="flex justify-between p-2">

                <h1 className="text-yellow-400 ">{card.type}</h1>


            </div>
            <div className="p-2">
                <h1 className="text-xl font-bold">{card.heading}</h1>
            </div>
            <div className="p-2 ">
                <Progress value={card.progress} className="w-[100%] text-red-400" />
            </div>
            <div className="flex justify-between p-2">
                <div className="relative">
                    
                <span className='absolute w-[40px] h-[40px] top-[35px] rounded-full bg-gray-400'></span>
                <span className='absolute w-[40px] h-[40px] left-[20px] top-[35px] rounded-full bg-gray-400'></span>
                <span className='absolute w-[40px] h-[40px] left-[40px]  top-[35px] rounded-full bg-gray-400'></span>

                </div>
                <div className="mt-10">

                    <h1 className="text-sm text-gray-400">Due in {card.maxDue} Days</h1>
                </div>
            </div>

        </div>
        </Draggable>
    )
}

export default Card