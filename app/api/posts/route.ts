export async function GET() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=1&_limit=10`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const posts = await res.json()
  return Response.json({ message: "get post successfully",posts });
}
