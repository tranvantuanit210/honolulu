import Image from "next/image";
import * as React from "react";

interface DataDropdown {
  title: string;
  children?: DataDropdown[];
  difColor?: boolean;
}

const getStarted: DataDropdown[] = [
  {
    title: "About Us",
  },
  {
    title: "Start with WHY",
  },
  {
    title: "Out WHAT",
  },
  {
    title: "Out HOW",
  },
  {
    title: "FAQs",
  },
  {
    title: "Join HNL S+D (12-18 yrs)",
    difColor: true,
  },
  {
    title: "Juniors",
    children: [
      {
        title: "About Juniors",
      },
      {
        title: "Join Junior Speech (Under 12 yrs)",
      },
    ],
  },
];
const clubMembers: DataDropdown[] = [
  {
    title: "Club Calendar",
  },
  {
    title: "Resources",
    children: [
      {
        title: "NCFAC",
      },
      {
        title: "SearchOperators",
      },
      {
        title: "Harvard School - Think Tank Search Engine",
      },
    ],
  },
];

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className="h-20 w-full bg-primary flex items-center justify-between py-2 pl-24 pr-32 fixed top-0 left-0 z-10">
      <div>
        <Image src="/images/logo.png" width={160} height={70} className="object-cover cursor-pointer" alt="img"></Image>
      </div>
      <div className="text-white">
        <ul className="flex gap-4 items-center text-lg font-medium">
          <li className="flex items-center gap-2 cursor-pointer relative group">
            <div className="hover:opacity-70 transition-all">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-3 h-3 mt-[2px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className="absolute top-full -left-[0.5rem] opacity-0 invisible min-w-[360px] bg-[#3c4656] py-5 border-0 border-solid border-t-[3px] border-[#e54754] text-white transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:visible">
              <ul className="list-none">
                {getStarted.map((data, index) => (
                  <li
                    key={index}
                    className={`py-[6px] px-5 hover:text-sub ${
                      data.difColor ? "text-[#e08584] hover:text-[#e08584]" : ""
                    }  hover:bg-[rgba(0,0,0,.03)] relative flex gap-2 items-center justify-between group/last`}
                  >
                    {data.title}
                    {index === getStarted.length - 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3 mt-[2px]"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                    {data.children && (
                      <div className="absolute -top-1/2 -left-[64%] opacity-0 invisible min-w-[360px] bg-[#3c4656] py-5 border-0 border-solid border-t-[3px] border-[#e54754] text-white transition-all duration-200 ease-in-out group-hover/last:opacity-100 group-hover/last:visible">
                        <ul className="list-none">
                          {data.children.map((item, index) => (
                            <li
                              key={index}
                              className={`py-[6px] px-5 ${
                                item.difColor ? "#e08584" : ""
                              } hover:text-sub hover:bg-[rgba(0,0,0,.03)] relative flex gap-2 items-center justify-between`}
                            >
                              {item.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-2 cursor-pointer relative group">
            <div className="hover:opacity-70 transition-all">
              Club Members{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-3 h-3 mt-[2px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className="absolute top-full -left-[0.5rem] opacity-0 invisible min-w-[360px] bg-[#3c4656] py-5 border-0 border-solid border-t-[3px] border-[#e54754] text-white transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:visible">
              <ul className="list-none">
                {clubMembers.map((data, index) => (
                  <li
                    key={index}
                    className={`py-[6px] px-5 hover:text-sub ${
                      data.difColor ? "text-[#e08584] hover:text-[#e08584]" : ""
                    }  hover:bg-[rgba(0,0,0,.03)] relative flex gap-2 items-center justify-between group/last`}
                  >
                    {data.title}
                    {index === clubMembers.length - 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-3 h-3 mt-[2px]"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                    {data.children && (
                      <div className="absolute -top-1/2 -left-[64%] opacity-0 invisible min-w-[360px] bg-[#3c4656] py-5 border-0 border-solid border-t-[3px] border-[#e54754] text-white transition-all duration-200 ease-in-out group-hover/last:opacity-100 group-hover/last:visible">
                        <ul className="list-none">
                          {data.children.map((item, index) => (
                            <li
                              key={index}
                              className={`py-[6px] px-5 ${
                                item.difColor ? "#e08584" : ""
                              } hover:text-sub hover:bg-[rgba(0,0,0,.03)] relative flex gap-2 items-center justify-between`}
                            >
                              {item.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <div className="hover:opacity-70 transition-all ">Contact Us</div>
          </li>
        </ul>
      </div>
    </header>
  );
}
