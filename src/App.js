import "./App.css";
import Card from "./components/Card";
import React from "react";
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";

function App() {
  const [check, setCheck] = React.useState(Array(9).fill(null));
  const [temp, setTemp] = React.useState(Array(9).fill(null));
  const [turn, changeTurn] = React.useState(true);

  const whoIsWinner = ()=>{
    const winnerTable = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let i of winnerTable)
    {
        const [x,y,z] = i;
        if(temp[x]!=null && temp[x] === temp[y] && temp[x] === temp[z])
        return check[x];
    }
    return false;
}

  const winner = whoIsWinner();

  const handleClick = (index) => {
    if (check[index] !== null) return;

    const value = [...check];
    const value1 = [...temp];
    value[index] = turn ? (
      <FaRegCircle size={100} className="text-gray-800 hover:text-gray-300" />
    ) : (
      <ImCross size={70} className="text-gray-800 hover:text-gray-300" />
    );
    value1[index] = turn ? "O" : "X";
    changeTurn(!turn);
    setCheck(value);
    setTemp(value1);
  };

  const handleButton = () => {
    setCheck(Array(9).fill(null));
  };

  return (
    <>
      {winner ? (
        <div className="h-screen w-screen bg-gradient-to-r from-[#01DBFF] to-[#918DAC]">
        <div className="flex justify-center pt-48 items-center text-5xl font-signature"><h1 className="mx-2">Game Over And</h1><h1 className="mx-2"> {winner} </h1><h1 className="mx-2">is Winner !</h1>
        </div>
        <div className="flex justify-center items-center mt-10 ml-20">
        <button
              className="bg-gradient-to-b from-[#392D69] to-[#B57BEE] mt-4 py-2 px-5 text-3xl rounded-md cursor-pointer text-white"
              onClick={handleButton}
            >
              {" "}
              RESET{" "}
            </button>
        </div>
        </div>
      ) : (
        <div className="h-screen w-screen bg-gradient-to-r from-[#01DBFF] to-[#918DAC]">
          <div className="font-signature text-3xl text-white flex justify-center bg-[#7286D3] py-4 mb-[50px]">
            <h1> Tic Tac Toe Game </h1>
          </div>
          <div className="flex justify-center items-center text-5xl font-bold font-signature underline mb-6">
            <h1 className="mr-6 mb-4">Player</h1>{" "}
            <h1 className="mb-4">{turn ? <FaRegCircle /> : <ImCross />}</h1>
            <h1 className="ml-6 mb-4">Move !</h1>
          </div>
          <div>
            <div className="flex justify-center">
              <Card click={() => handleClick(0)} value={check.at(0)} />
              <Card click={() => handleClick(1)} value={check.at(1)} />
              <Card click={() => handleClick(2)} value={check.at(2)} />
            </div>
            <div className="flex justify-center">
              <Card click={() => handleClick(3)} value={check.at(3)} />
              <Card click={() => handleClick(4)} value={check.at(4)} />
              <Card click={() => handleClick(5)} value={check.at(5)} />
            </div>
            <div className="flex justify-center">
              <Card click={() => handleClick(6)} value={check.at(6)} />
              <Card click={() => handleClick(7)} value={check.at(7)} />
              <Card click={() => handleClick(8)} value={check.at(8)} />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-b from-[#392D69] to-[#B57BEE] mt-4 py-2 px-5 text-3xl rounded-md cursor-pointer text-white"
              onClick={handleButton}
            >
              {" "}
              RESET{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
