'use client'

import Image from 'next/image'
import {useEffect, useState, useTransition} from 'react'
export default function Home() {

  const [isPending, startTransition] = useTransition()
  const [users, setUsers] = useState([])


  useEffect(()=>{
    startTransition(async()=>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=1&_limit=10`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const dataUser = await res.json()
      setUsers(dataUser.images)
    })
  },[])
 
  console.log("images",users)

  return (
    <main className="flex min-h-screen w-full items-center justify-center flex-col gap-20">
      <div>
        <h1>Images</h1>
        {isPending && <p>Loading...</p>}
        {!isPending && users?.map((item:{url:string},index)=>(
          <div key={index}>
            <Image width={500} height={500} src={item.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}