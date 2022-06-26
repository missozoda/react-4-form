import React from "react";

const Main = (props) => {
  return (
    <>
      <main className="main">
        <section className="login-section">{props.children}</section>
      </main>
    </>
  );
};

export default Main;