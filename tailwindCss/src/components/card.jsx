import React from "react";
function Card({username, btntext}) {
      console.log( username);
      
      return (
            <div className="flex flex-col items-center gap-6 p-7 md:fl rounded-2xl">
                  <div>
                        <img className="size-48 shadow-xl rounded-md" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXT3ziMz6XDysCIrSSrs-vDTwAbNWd8iMnHv5kJ7bSvg&s&ec=121801496" />
                  </div>
                  <div className="flex items-center">
                        <span className="text-2xl font-medium">Class Warfare</span>
                        <span className="font-medium text-sky-500">{username}</span>
                        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                              <span>No. 4</span>
                              <span>·</span>
                              <span>2025</span>
                        </span>
                        <button className="bg-green-400 text-white rounded-xl p-3">{btntext}</button>
                  </div>
            </div>
      )
}

export default Card