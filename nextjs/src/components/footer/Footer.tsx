import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface FooterProps {}

const dataFooter: string[] = ["About", "FAQs", "Join", "Junior Speech", "Join Junior Speech", "Club Calendar"];

export default function Footer(props: FooterProps) {
  return (
    <footer className="py-14 w-full bg-primary text-white flex justify-center items-center">
      <div className="py-7 flex items-start justify-between gap-8 w-4/5 max-w-[1080px]">
        <div className="flex flex-col gap-6 items-center">
          <div>
            <Image src="/images/logo.png" width={288} height={120} className="object-cover cursor-pointer" alt="img"></Image>
          </div>
          <div>
            <Image src="/images/sub-logo.png" width={226} height={64} className="object-cover cursor-pointer" alt="img"></Image>
          </div>
        </div>
        <div>
          <ul className="list-none flex flex-col gap-2">
            {dataFooter.map((data, index) => (
              <li className="cursor-pointer" key={index}>
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">Contact Us:</h4>
          <Link href="mailto:aloha@honoluluspeechanddebate.org" className="text-[#E02B20] cursor-pointer">
            aloha@honoluluspeechanddebate.org
          </Link>
        </div>
      </div>
    </footer>
  );
}
