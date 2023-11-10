const getData = async () => {
 const res = await fetch("http://localhost:3000/api/posts");
 if(!res.ok) {
  throw new Error('failed to fetch posts')
 }

 return res.json()


}


const Features = async () => {
  const item = await getData()
  // console.log(item)
  return (
    <div>Features</div>
  )
}

export default Features