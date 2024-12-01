const ValuesCard = ({title=""}) => {
    return (
        <div className="w-full" >
            <h2 className='text-xl mb-8 text-center font-semibold' >{title}</h2>

            <div
                className="bg-[url('/bg-circle.svg')] bg-contain bg-no-repeat bg-center rounded-xl h-44 w-full flex justify-center items-center mt-14">
                <p className='text-xl font-semibold' >700</p>
            </div>
        </div>
    );
};

export default ValuesCard;
