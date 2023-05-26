import React from "react";
import { FamilyTree } from "./components/FamilyTree";

function App() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center py-8 mt-4 text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-indigo-300 inline-block text-transparent bg-clip-text fixed">
           Family Tree Of Late Mr. Harji Bhimji Bhudia
        </h1>
      </div>
      <FamilyTree />
    </div>
  );
}

export default App;
