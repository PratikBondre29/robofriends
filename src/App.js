import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./components/robots";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [roboName, setRoboName] = useState("");
  const [filterRobot, setFilterRobot] = useState(robots);
  const [hasFiltered, setHasFiltered] = useState(true);
  const [hasFooter, setHasFooter] = useState(true);

  const onsearchChange = (e) => {
    setRoboName(e.target.value);
  };
  useEffect(() => {
    if (roboName !== "") {
      const b = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(roboName.toLowerCase());
      });
      setFilterRobot(b);
      setHasFooter(false);
      if (b.length == 0) {
        setHasFiltered(false);
      } else {
        setHasFiltered(true);
      }
    } else {
      setFilterRobot(robots);
      setHasFooter(true);
    }
  }, [roboName]);

  return (
    <>
      <div className="app_title">
        <h1>RoboFriends</h1>
      </div>
      <SearchBox value={roboName} searchChange={onsearchChange} />
      <ErrorBoundary>
        {hasFiltered ? "" : <h1 className="not_found">Not found!!</h1>}
        <CardList robots={filterRobot} />
      </ErrorBoundary>
      {hasFooter ? (
        <div className="app_footer">
          <h4>
            Made with <span>♥</span> by Pratik
          </h4>
        </div>
      ) : null}
    </>
  );
};

export default App;
