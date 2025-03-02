import { useContext } from "react";
import Header from "../components/layout/Header";
import { FoodAppContext } from "../context/FoodAppContext";
import Features from "../components/layout/Features";

export default function Home() {

  const {recipes} = useContext(FoodAppContext);

  console.log(recipes)

  return (

    <div className="flex flex-col items-center justify-center overflow-hidden">
    <Header />
    <Features />
    </div>
  )
}