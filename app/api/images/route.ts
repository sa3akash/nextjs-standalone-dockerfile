export async function GET() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=1&_limit=10`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const images = await res.json()
  return Response.json({ message: "get images successfully",images });
}
