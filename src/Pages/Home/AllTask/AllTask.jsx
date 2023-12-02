import React, { useEffect } from "react";

const AllTask = () => {
  useEffect(() => {
    fetch("http://localhost:5000/alltask", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <div></div>;
};

export default AllTask;
