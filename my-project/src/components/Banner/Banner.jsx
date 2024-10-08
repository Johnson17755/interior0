import Banner1 from '../../assets/banner.png';

const Banner = () => {
  return (
    <div>
        <div className="container py-14">
            <div className="grid  grid-col-1 md:grid-cols-2 gap-10">
                <div className='flex flex-col justify-center'>
                    <img src={Banner1} alt="Banner" className='w-[95%] md:w-[340px] xl:w-full mx-auto' />
                </div>
                <div className='space-y-5 flex justify-center flex-col'>
                    <h1 className='text-4xl font-bold font-serif'>We believe that a team makes any project better</h1>
                    <p className='text-gray-500 text-sm leading-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, voluptatibus quisquam dolores neque quia ea voluptatem consectetur eaque ipsa! Laborum necessitatibus voluptate quos debitis possimus fugiat, quasi sed sapiente.</p>
                    <div>
                        <button className='primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>Discover Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;