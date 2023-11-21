"use client";

import Link from "next/link";
import * as React from "react";

export interface ThankProps {}

export default function Thank(props: ThankProps) {
  const handleClick = () => {
    window.location.reload();
  }

  return (
    <div>
      <div className="flex flex-col gap-6 mt-8">
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(51,167,181)" className="w-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-[2rem] font-semibold">Thanks!</h1>
        </div>
        <p className="text-base">Your response was submitted.</p>
        <Link href="#" onClick={handleClick} className="text-[#0693e3] text-sm no-underline">
          Submit another response
        </Link>
      </div>
    </div>
  );
}
