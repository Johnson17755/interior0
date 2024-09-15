import { div } from "framer-motion/m";

const TestimonialData = [
    {
        id:1,
        name:'John Doe',
        img: 'https://i.pravatar.cc/300?img=1',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vero similique labore animi minima cupiditate. Excepturi, eligendi earum, autem tempore veniam rem ipsum vero quisquam quos maiores suscipit?',
    },
    {
        id:2,
        name:'Rosemary',
        img: 'https://i.pravatar.cc/300?img=2',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vero similique labore animi minima cupiditate. Excepturi, eligendi earum, autem tempore veniam rem ipsum vero quisquam quos maiores suscipit?',
    },
    {
        id:3,
        name:'Jacob',
        img: 'https://i.pravatar.cc/300?img=3',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vero similique labore animi minima cupiditate. Excepturi, eligendi earum, autem tempore veniam rem ipsum vero quisquam quos maiores suscipit?',
    },
];

const Testimonial = () => {
  return (
    <div className="container py-14">
        <div className="">
            <div className="space-y-4 text-center max-w-[500px] mx-auto mb-8">
                <h1 className="text-4xl font-bold font-serif">Words from our customer</h1>
                <p className="text-gray-500 text-sm max-w-[350px] mx-auto">Bring your dream home to life with one-on-one design help & hand picked products
                </p>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-black text-white">
                {
                    TestimonialData.map((card) => {
                        return(
                            <div key={card.id}>
                            <div>
                                <img src={card.img} alt="img" />
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonial;