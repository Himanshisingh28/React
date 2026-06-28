import React from "react";
function Card() {
      return (
            <div class="flex flex-col items-center gap-6 p-7 md:fl rounded-2xl">
                  <div>
                        <img class="size-48 shadow-xl rounded-md" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXT3ziMz6XDysCIrSSrs-vDTwAbNWd8iMnHv5kJ7bSvg&s&ec=121801496" />
                  </div>
                  <div class="flex items-center">
                        <span class="text-2xl font-medium">Class Warfare</span>
                        <span class="font-medium text-sky-500">The Anti-Patterns</span>
                        <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                              <span>No. 4</span>
                              <span>·</span>
                              <span>2025</span>
                        </span>
                  </div>
            </div>
      )
}

export default Card