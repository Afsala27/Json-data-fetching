import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Data() {
  const [showPosts, setShowPosts] = useState();
  const apiUrl = "https://www.reddit.com/r/reactjs.json";

  let displayData;
  async function pullJson() {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    //console.log(responseData.data.children);
    displayData = responseData.data.children.map(function (todo) {
      const _ = require("lodash");
      let deby = todo.data.selftext;
      var str = deby;
      console.log(_.unescape(str));
      return (
        <Card
          key={todo.data.id}
          title={todo.data.title}
          selftext_html={str}
          url={todo.data.url}
          score={todo.data.score}
        />
      );
    });
    setShowPosts(displayData);
  }
  useEffect(() => {
    pullJson();
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      {showPosts}
    </div>
  );
}
