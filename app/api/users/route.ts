export async function GET() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?_start=1&_limit=10`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const users = await res.json()
  return Response.json({ message: "get users successfully",users });
}
