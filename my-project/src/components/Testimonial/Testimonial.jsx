const TestimonialData = [
    {
        id:1,
        name:'John Doe',
        designation: 'Designer',
        img: 'https://i.pravatar.cc/300?img=1',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vero similique labore animi minima cupiditate. Excepturi, eligendi earum, autem tempore veniam rem ipsum vero quisquam quos maiores suscipit?',
    },
    {
        id:2,
        name:'Rosemary',
        designation: 'Developer',
        img: 'https://i.pravatar.cc/300?img=2',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vero similique labore animi minima cupiditate. Excepturi, eligendi earum, autem tempore veniam rem ipsum vero quisquam quos maiores suscipit?',
    },
    {
        id:3,
        name:'Jacob',
        designation: 'Manager',
        img: 'https://i.pravatar.cc/300?img=3',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vero similique labore animi minima cupiditate. Excepturi, eligendi earum, autem tempore veniam rem ipsum vero quisquam quos maiores suscipit?',
    },
];

const Testimonial = () => {
  return (
    <div className="py-14">
        <div className="">
            <div className="space-y-4 text-center max-w-[500px] mx-auto mb-8">
                <h1 className="text-4xl font-bold font-serif">Words from our customer</h1>
                <p className="text-gray-500 text-sm max-w-[350px] mx-auto">Bring your dream home to life with one-on-one design help & hand picked products
                </p>
            </div>

            <div className="bg-black p-12">
            <div className="container grid grid-cols-1 md:grid-cols-3 text-white gap-6">
                {
                    TestimonialData.map((card) => {
                        return(
                            <div key={card.id} className=" border-[1px] border-gray-500 p-5 group hover:bg-white duration-300">
                            <div className="flex flex-row items-center gap-3">
                                <img src={card.img} alt="img" className="w-[60px] rounded-full" />
                                <div>
                                    <p className="text-sm font-bold font-serif group-hover:text-black">{card.name}</p>
                                    <p className="text-gray-5 text-xs group-hover:text-black">{card.designation}</p>
                                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                                </div>
                            </div>
                            <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                              <p className="text-sm text-gray-500 group-hover:text-black">{card.text}</p>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial;