import BestSellers from "../components/BestSellers";
import Features from "../components/features";
import Header from "../components/Header";
import LatestColl from "../components/LatestColl";


export default function Home() {
  return (
    <>
    <Header />
    <LatestColl />
    <BestSellers />
    <Features />
    </>
  )
}
