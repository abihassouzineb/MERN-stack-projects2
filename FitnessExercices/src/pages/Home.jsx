import BodyPartsPag from "../components/BodyPartsPag";
import Header from "../components/Header";
import Input from "../components/Input";
import ShowingResults from "../components/ShowingResults";

export default function Home() {
  return (
    <div>
      <Header />
      <Input />
      <BodyPartsPag />
      <ShowingResults />
    </div>
  )
}
