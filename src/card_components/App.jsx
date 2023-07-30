import React from "react";
import Card from "./Card";
import contact from "../contact";
function App() {
  return (
    <>
      <h1 className="heading">My contacts</h1>
      <Card
        name={contact[0].name}
        img={contact[0].imgUrl}
        phoneNumber={contact[0].phoneNumber}
        email={contact[0].email}
      />

      <Card
        name={contact[1].name}
        img={contact[1].imgUrl}
        phoneNumber={contact[1].phoneNumber}
        email={contact[1].email}
      />
      <Card
        name={contact[2].name}
        img={contact[2].imgUrl}
        phoneNumber={contact[2].phoneNumber}
        email={contact[2].email}
      />
      <Card
        name={contact[3].name}
        img={contact[3].imgUrl}
        phoneNumber={contact[3].phoneNumber}
        email={contact[3].email}
      />
      <Card
        name={contact[4].name}
        img={contact[4].imgUrl}
        phoneNumber={contact[4].phoneNumber}
        email={contact[4].email}
      />
    </>
  );
}
export default App;
