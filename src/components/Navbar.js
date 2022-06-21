import React from "react";
import { Avatar, ConnectButton } from 'web3uikit'

function Navbar() {
  return <div className="flex justify-between items-center p-5 z-[100]">
    <h1 className="text-red-600 font-bold text-2xl lg:text-4xl">NETFLIX</h1>
    <div className="flex space-x-4 items-center">
        <Avatar />
        <ConnectButton/>
    </div>
    </div>;
}

export default Navbar;
