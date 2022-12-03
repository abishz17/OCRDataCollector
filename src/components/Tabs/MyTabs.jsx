export default function Tabs({ toggle, settoggle }) {
  return (
    <>
      <div className="md:w-[50rem] self-center md:h-[15.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl border-t-2 bg-white shadow-lg flex flex-col ease-linear duration-300 md:flex-row-reverse">
        <div className=" h-full w-full  shadow-md rounded-xl basis-2/3 relative">
          <div className="h-full w-full relative border-2 text-center  border-slate-200 rounded-2xl text-slate-900">
            <img alt="Image Section" src="../images" />
          </div>
        </div>

        <div className=" h-full w-full mr-2 rounded-2xl text-slate-900 ">
          <h1 className="m-2 text-2xl font-bold">
            Help us by writing Nepali text into a paper.
          </h1>
          <p className="m-2 text-md font-medium">
            Minim reprehenderit cillum officia dolore sit dolore magna dolor
            eiusmod. Nulla anim quis est tempor nostrud eiusmod ipsum id
            incididunt nulla sit veniam elit fugiat. Anim commodo commodo anim
            minim exercitation ad quis. Non anim consequat mollit laborum
            laboris magna pariatur nisi officia culpa est velit. Velit voluptate
            enim minim labore laboris.
          </p>
        </div>
      </div>
      <div className="md:w-[50rem] self-center md:h-[15.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl border-t-2 bg-white shadow-lg flex flex-col ease-linear duration-300 md:flex-row-reverse">
        <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
          <div className="h-full w-full relative border-2 text-center  border-slate-200 rounded-2xl text-slate-900">
            <img alt="Image Section" src="../images" />
          </div>
        </div>

        <div className=" h-full w-full mr-2 rounded-2xl text-slate-900 overflow-hidden">
          <h1 className="m-2 text-xl font-bold">
            Help us by converting handwritten Nepali sentences into digital
            text.
          </h1>
          <p className="m-2 text-md font-medium">
            Minim reprehenderit cillum officia dolore sit dolore magna dolor
            eiusmod. Nulla anim quis est tempor nostrud eiusmod ipsum id
            incididunt nulla sit veniam elit fugiat. Anim commodo commodo anim
            minim exercitation ad quis. Non anim consequat mollit laborum
            laboris magna pariatur nisi officia culpa est velit. Velit voluptate
            enim minim labore laboris.
          </p>
        </div>
      </div>
    </>
  );
}
