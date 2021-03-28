import React from "react";

function Heading() {
  const datetime = new Date();
  let hrs = datetime.getHours();
  let message = "Good morning !";
  let cust_color = { color: "red" };
  if ((hrs > 12) & (hrs < 18)) {
    message = "Good Afternoon !";
    cust_color.color = "green";
  }
  if ((hrs > 18) & (hrs < 24)) {
    message = "Good Evening !";
    cust_color.color = "blue";
  }
  return (
    <h1 className="heading" style={cust_color}>
      {message}
    </h1>
  );
}

export default Heading;
