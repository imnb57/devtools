import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <div className="flex justify-center items-center bg-slate-600 h-9 ">
        <h1 className="text-white font-bold ">\devtools\</h1>
      </div>
      <section className="flex flex-row gap-2 mr-4">
        <div className="w-1/3 h-60 mt-5 ml-4 bg-slate-400 rounded-sm items-center flex justify-center ">
          <p className="">first tool</p>
        </div>
        <div className="w-1/3 h-60 mt-5 ml-4 bg-slate-400 rounded-sm items-center flex justify-center ">
          <p className="">second tool</p>
        </div>
        <div className="w-1/3 h-60 mt-5 ml-4 bg-slate-400 rounded-sm items-center flex justify-center ">
          <p className="">third tool</p>
        </div>
      </section>
      <section className="flex flex-row gap-2 mr-4">
        <div className="w-1/3 h-60 mt-5 ml-4 bg-slate-400 rounded-sm items-center flex justify-center ">
          <p className="">first tool</p>
        </div>
        <div className="w-1/3 h-60 mt-5 ml-4 bg-slate-400 rounded-sm items-center flex justify-center ">
          <p className="">second tool</p>
        </div>
        <div className="w-1/3 h-60 mt-5 ml-4 bg-slate-400 rounded-sm items-center flex justify-center ">
          <p className="">third tool</p>
        </div>
      </section>
    </main>
  );
};

export default page;
