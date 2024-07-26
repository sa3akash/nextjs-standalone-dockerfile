'use client'

import {useEffect, useState, useTransition} from 'react'
export default function Home() {

  const [isPending, startTransition] = useTransition()
  const [users, setUsers] = useState([])


  useEffect(()=>{
    startTransition(async()=>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=1&_limit=10`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const dataUser = await res.json()
      setUsers(dataUser)
    })
  },[])
 
  console.log("posts",users)

  return (
    <main className="flex min-h-screen w-full items-center justify-center flex-col gap-20">
      <div>
        <h1>Posts</h1>
        {isPending && <p>Loading...</p>}
        {!isPending && JSON.stringify(users)}
      </div>
    </main>
  );
}