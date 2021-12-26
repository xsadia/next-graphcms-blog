import { ReactNode } from "react";
import Nav from "./Nav";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <header
        className="
      h-14 flex items-center bg-sky-500 fixed top-0 z-50 w-screen px-4"
      >
        <h1 className="font-semibold text-2xl text-white">Fezin Blogs</h1>
      </header>
      <main className="mt-16">{children}</main>
    </div>
  );
};

export default Layout;
