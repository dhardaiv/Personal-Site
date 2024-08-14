import React, { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="text-zinc-500 underline decoration-1 underline-offset-2 decoration-dashed hover:text-blue-300 transition duration-300">
      {children}
    </a>
  );
};

export default Link;
