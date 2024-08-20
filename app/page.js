import Nav from "@/components/Nav";
import Category from "@/components/Category";

export default function Home() {
  return (
    <main className="px-7 sm:px-14 py-2 flex flex-col items-start justify-center">
      <Nav />
      <div className="w-full mb-2 h-20 border-b-[1px] border-black border-opacity-15" />
      <Category title="Games" />
    </main>
  );
}
