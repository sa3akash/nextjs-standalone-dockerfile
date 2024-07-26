import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center flex-col gap-20">
      <div className="flex gap-3 items-center">
        <Link href="/posts" className="p-2 bg-gray-400">
          Posts
        </Link>
        <Link href="/users" className="p-2 bg-gray-400">
          Users
        </Link>
        <Link href="/images" className="p-2 bg-gray-400">
          Images
        </Link>
      </div>
      <h1 className="text-7xl">Hello World!</h1>
      <div>
        <Image src="/icon.webp" width={100} height={100} alt="icon" />
      </div>
    </main>
  );
}
