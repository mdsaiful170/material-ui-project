
const Cardbox = (props) => {
  const { id, title, img, subtext } = props || {};
  return (
    <>
      <div key={id} className="border cursor-pointer hover:shadow ease-in group/box transition-all duration-150 border-stone-100 col-span-5 flex items-center flex-col  bg-white p-8 rounded-lg  text-center ">
        <img src={img} className=" group-hover/box:scale-105 transition-all duration-150 ease-linear object-cover max-w-full w-fit pb-7" alt="" />
        <h3 className="text-neutral-900  text-2xl font-medium pb-2">{title}</h3>
        <p className="md:max-w-[236px] text-stone-400 text-base font-normal">
          {subtext}
        </p>
      </div>
    </>
  );
};

export default Cardbox;
