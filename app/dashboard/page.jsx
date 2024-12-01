'use client';

import React from 'react';
import WeekChartDotted from "@/components/charts/WeekChartDotted";
import ValuesCard from '@/components/cards/ValuesCard';
import LinksTable from '@/components/tables/LinksTable';
import LinksCard from '@/components/cards/LinksCard';


export default function page() {



  return (
    <section className="pt-28 px-5 sm:px-5 md:px-5 lg:px-36 flex flex-col gap-5 pb-8 bg-[url('/light-bg-dashboard.svg')] dark:bg-[url('/dark-bg-dashboard.svg')] bg-cover">
      <div className='flex justify-between gap-5 flex-col sm:flex-row' >

        <div className="bg-[rgba(217,217,217,0.4)] backdrop-blur-sm rounded-xl p-4 sm:w-[70%]">
          <h2 className='text-xl mb-8 font-semibold text-start' >Click Trends</h2>
          <WeekChartDotted />
        </div>

        <div className="bg-[rgba(217,217,217,0.4)] backdrop-blur-sm rounded-xl p-4 sm:w-[30%]">
          <ValuesCard title="Total Users:" />
        </div>

      </div>

      <LinksTable />


      <div className="bg-[rgba(217,217,217,0.4)] backdrop-blur-sm rounded-xl p-4 w-full flex flex-col justify-stretch sm:flex-row">
        <ValuesCard title="Total URL:" />
        <ValuesCard title="Active URL count:" />
        <ValuesCard title="Total URL:" />
      </div>

      <div className='border-[1px] border-solid border-black rounded-lg p-4 py-7 flex flex-col gap-2' >
        <h2 className='font-semibold text-xl mb-3' >Top Performing Links</h2>
        <LinksCard />
        <LinksCard />
      </div>
    </section>
  );
}
