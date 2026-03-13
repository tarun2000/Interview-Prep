//QUESTION: SHUFFLE LIST ITEMS WHEN CLICK ON BUTTON

import React, { useState } from "react";

function Question6() {
  const [listData, setListData] = useState(["1", "2", "3", "4", "5"]);

  const shuffleList = () => {
    const tempListData = [...listData];
    for (let i = 0; i < tempListData.length; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      //SWAP
      [tempListData[i], tempListData[randomIndex]] = [tempListData[randomIndex], tempListData[i]];
    }
    setListData(tempListData);
  };

  return (
    <div className="p-2 flex gap-3">
      {listData.map((val, idx) => {
        return <p key={idx}> {val}</p>;
      })}

      <button onClick={shuffleList} className="border rounded-md px-1 bg-orange-100">
        Shuffle
      </button>
    </div>
  );
}

export default Question6;
