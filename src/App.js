import { useEffect, useState } from "react";
import Blob from "./component/Blob";
import GetStart from "./component/GetStart";
import Header from "./component/Header";
import Headline from "./component/Headline";

function App() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, [4000]);
  }, []);
  return (
    <>
      <section className=" relative  ">
        <Header start={start} />
        {start ? <GetStart /> : <Headline />}
        <Blob />
      </section>
    </>
  );
}

export default App;
