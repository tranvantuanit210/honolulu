import * as React from "react";

export interface LoadingProps {
  className?: string;
}

export default function Loading({ className }: LoadingProps) {
  return (
    <div className={`h-[1833px] pt-40 ${className}`}>
      <div aria-label="Loading..." role="status" className="flex items-center justify-center space-x-2 opacity-50">
        <svg className="h-20 w-20 animate-spin stroke-red-400" viewBox="0 0 256 256">
          <line x1={128} y1={32} x2={128} y2={64} strokeLinecap="round" strokeLinejoin="round" strokeWidth={15} />
          <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={15} />
          <line x1={215} y1={128} x2={192} y2={128} strokeLinecap="round" strokeLinejoin="round" strokeWidth={15} />
          <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={15} />
          <line x1={128} y1={215} x2={128} y2={192} strokeLinecap="round" strokeLinejoin="round" strokeWidth={15} />
          <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={15} />
          <line x1={32} y1={128} x2={64} y2={128} strokeLinecap="round" strokeLinejoin="round" strokeWidth={15} />
          <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={15} />
        </svg>
        <span className="text-xl font-medium text-red-400">Loading...</span>
      </div>
    </div>
  );
}
