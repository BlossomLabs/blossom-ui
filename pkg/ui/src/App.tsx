import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { TextCopy, Blockie, TransactionBadge } from ".";
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
      <TransactionBadge
        transaction="0xbffb1572c2b820ffd1ce420382a242b8df030fb8a206908703ca39e36ec78646"
        networkType="gnosis"
      />
      <TransactionBadge
        transaction="0x8aa6c8ecae2cef6236a194cf2f285036fa2d822aef098b2d97f5405b2b04bca0"
        shorten={false}
      />
    </div>
  );
}

export default App;
