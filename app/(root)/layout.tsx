import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex bg-black-3 h-full">
      <LeftSidebar />
      <section className="flex-1 flex flex-col px-4 sm:px-14">
        <div className="mx-auto w-full max-w-5xl flex flex-col max-sm:px-4">
          <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" alt="meno icon" width={30} height={30} />
              <MobileNav/>
          </div>
          <div className="flex flex-col md:pb-14">
              toaster
            {children}
          </div>
        </div>
      </section>
      <RightSidebar />
    </main>
  );
}
