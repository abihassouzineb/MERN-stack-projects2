import React from "react";
import banner from "../assets/banner.png";
export default function Header() {
  return (
    <header className="flex px-16 py-10 justify-between items-center space-x-5">
      <div className="flex flex-col gap-y-5 items-start">
        <p className="text-5xl font-medium">New relases this week</p>
        <p className="max-w-lg text-sm">
          lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem
          Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum
        </p>

        <button className="rounded-md bg-yellow-400 px-10 py-1">Subscribe</button>
      </div>

      <img src={banner} alt="banner" />
    </header>
  );
}
