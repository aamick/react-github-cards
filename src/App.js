import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./index.css";

import Card from "./Card";

function App(props) {
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    if (active === false) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    fetch("https://api.github.com/users/aamick")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <Button
        variant="contained"
        color="secondary"
        justifyContent="center"
        onClick={handleToggle}
      >
        Toggle User
      </Button>
      {active === true ? <Card {...user} /> : ""}
    </div>
  );
}

export default App;
