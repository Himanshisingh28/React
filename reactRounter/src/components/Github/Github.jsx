import React, { useEffect, useState } from "react";

function Github(){
      const [data, setData] = useState([])
      useEffect(() =>{
            fetch('https://api.github.com/users/hiteshchoudhary')
            .then(data => {
                  console.log(data);
                  setData(data)
            })
      }, [])
      return(
            <div className="text-center p-4 m-4 bg-gray-700 text-white text-4xl">GithubFollowers:{data.followers}</div>
      )
}
export default Github