import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";

const ServiceCard = [
    {
        id: 1,
        title: "Luxury Facilities",
        description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus? consectetur adipisicing elit.",
        icon: <FaVectorSquare/>,
        link:"#",
    },
    {
        id: 2,
        title: "Afordable Price",
        description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus? consectetur adipisicing elit.",
        icon: <FaPenToSquare />,
        link:"#",
    },
    {
        id: 3,
        title: "Smooth Workflow",
        description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus? consectetur adipisicing elit.",
        icon: <BiSolidDollarCircle />,
        link:"#",
    },

];

const Services = () => {
  return (
    <div>
        <div className="container py-20">

            <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
                <h1 className="text-3xl font-bold font-serif">What we provide</h1>
                <p className="text-gray-500 text-sm">Bring your dream home to life with one-on-one design help & hand picked products</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    ServiceCard.map((card) => {
                        return <div key={card.id} className="space-y-4 border-[1px] border-black/30 p-3 rounded-[10px] hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300">
                         <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">{card.icon}</span>
                         <p className="text-2xl font-bold font-serif">{card.title}</p>
                         <p className="text-gray-400 text-xs ">{card.description}</p>
                         <a href={card.link} className="inline-block border-b border-black">Learn More</a> 
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Services;