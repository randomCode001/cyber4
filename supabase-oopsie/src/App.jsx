import { useState } from "react";

import { supabaseClient } from "./utils/supabase";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabaseClient
      .from("users")
      .select("*")
      .eq("username", username)
      .eq("password", password);
  };

  return (
    <>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </>
  );
}

export default App;
