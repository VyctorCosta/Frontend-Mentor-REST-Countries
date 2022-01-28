import React from "react";
import { useRouter } from "next/router"

function HomePage() {
  const route = useRouter();
  
  return (
    <>
      <h1>Home</h1>
      <button onClick={event => {
        route.push("/newPage")
      }}>Clique</button>
      <style jsx>{`
        h1 {
          color: red
        }
      `}</style>
    </>
  );
}

export default HomePage;
