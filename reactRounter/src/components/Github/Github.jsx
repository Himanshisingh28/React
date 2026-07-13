import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
      const data = useLoaderData()
      // const [data, setData] = useState([])
      // useEffect(() =>{
      //       fetch('https://api.github.com/users/hiteshchoudhary')
      //       .then(data => {
      //             console.log(data);
      //             setData(data)
      //       })
      // }, [])
      return (
            <div className="text-center p-4 m-4 bg-gray-700 text-white text-4xl">GithubFollowers:{data.followers}
                  <img src={data.avatar_url} alt="Git Picture" width={300} />
            </div> 
      )
}
export default Github

export const githubInfoLoder = async () => {
      const response = await fetch('https://api.github.com/users/hiteshchoudhary')
      return response.json()
}