import { useEffect, useState } from 'react'
function Github() {
    const [data,setdata] = useState([])
    useEffect(()=> {
        fetch('https://api.github.com/users/vansh16saini')
        .then(res => res.json())
        .then(data => setdata(data))
    },[])
  return (
    <div className="bg-gray-600 text-3xl text-white p-4 m-4 text-center">Github followers:{data.followers}
    <img src={data.avatar_url} alt="github profile" className=" aline-left w-40 h-40 rounded-full mx-auto"/>
    </div>
  )
}

export default Github