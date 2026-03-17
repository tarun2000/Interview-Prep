// create a seacrh bar for user name and email for below
// [{"name":"ritik",email:"aman@gmail.com"},{"name":"ritik",email:"ritik@gmail.com"}]

import React, { useState } from "react";

function Question7() {
  const [data, setData] = useState([
    {
      name: "Tarun",
      email: "tarundhiman1309@gmail.com",
      age: "23",
    },
    {
      name: "Kendall",
      email: "kendallJenner@gmail.com",
      age: "29",
    },
    {
      name: "Kylie",
      email: "Kyliejenner@gmail.com",
      age: "28",
    },
    {
      name: "Asha Patel",
      email: "asha.patel@example.com",
      age: "31",
    },
    {
      name: "Miguel Santos",
      email: "miguel.santos@example.com",
      age: "27",
    },
    {
      name: "Lina Chen",
      email: "lina.chen@example.com",
      age: "24",
    },
    {
      name: "Omar Khalid",
      email: "omar.khalid@example.com",
      age: "35",
    },
    {
      name: "Sofia Rossi",
      email: "sofia.rossi@example.com",
      age: "29",
    },
    {
      name: "Ethan Brooks",
      email: "ethan.brooks@example.com",
      age: "26",
    },
    {
      name: "Priya Singh",
      email: "priya.singh@example.com",
      age: "30",
    },
    {
      name: "Noah Müller",
      email: "noah.muller@example.com",
      age: "22",
    },
    {
      name: "Hana Suzuki",
      email: "hana.suzuki@example.com",
      age: "28",
    },
    {
      name: "Luca García",
      email: "luca.garcia@example.com",
      age: "33",
    },
  ]);

  const [searchVal, setSearchVal] = useState("");

  const filterDataSet = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      item.email.toLowerCase().includes(searchVal.toLowerCase()) ||
      item.age.toString().includes(searchVal.toLowerCase()),
  );

  return (
    <div className="p-4">
      <div className="flex">
        <p className="mr-1">Search -</p>
        <input
          className="border rounded px-1"
          type="search"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        ></input>
      </div>

      {filterDataSet.map((val, idx) => {
        return (
          <div className="flex gap-4 " key={idx}>
            <label>{"Name : " + val.name}</label>
            <label>{"Email : " + val.email}</label>
            <label>{"Age : " + val.age}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Question7;
