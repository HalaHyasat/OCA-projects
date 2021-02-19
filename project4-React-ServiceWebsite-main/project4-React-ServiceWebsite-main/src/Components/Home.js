import React from 'react'
import auth from "./auth";

function Home(props) {
  return (
    <div>
      <h1>hello Home</h1>
      <button
        onClick={() => {
          auth.home(() => {
            props.history.push("/login");
          });
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Home
