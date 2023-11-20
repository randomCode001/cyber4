import { useState } from "react";
function Find({ token = "secret" }) {
  const [show, setShow] = useState(0);
  const [secret, setSecret] = useState(false);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fivd the hidden flag!</h1>
      <div style={{ display: "none" }}>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => setShow(show + 1)}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
        <button onClick={() => console.log("Nope")}>Click here to win</button>
      </div>
      {show === 5 ? (
        <div>
          It&apos;s not that e<span onClick={() => setSecret(true)}>a</span>sy
        </div>
      ) : null}
      {secret ? <div>{token}</div> : null}
    </>
  );
}

export default Find;
