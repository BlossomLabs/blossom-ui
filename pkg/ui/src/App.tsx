import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { TextCopy, Blockie } from ".";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const address = "0x05e5472AEc66eB811329CE0c7698A620b6c5CB35";
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Box w={"200px"}>
        <TextCopy value={address} />
      </Box>
      <Blockie address={address} />
      <Blockie address={address} radius={"md"} scale={2} opacity={0.5} />
    </div>
  );
}

export default App;
