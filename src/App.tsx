import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Manual from "./components/Manual";
import Copy from "./components/Copy";
type ResultsState = {
  zipcode: string;
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
};
const App = () => {
  const [zipcode, setZipcode] = useState<string>("");
  const [results, setResults] = useState<ResultsState>({
    zipcode: "",
    address1: "",
    address2: "",
    address3: "",
    kana1: "",
    kana2: "",
    kana3: "",
  });
  const getZipcode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.results) {
          alert("該当する住所が見つかりませんでした。");
          return;
        }
        setResults({
          zipcode: data.results[0].zipcode,
          address1: data.results[0].address1,
          address2: data.results[0].address2,
          address3: data.results[0].address3,
          kana1: data.results[0].kana1,
          kana2: data.results[0].kana2,
          kana3: data.results[0].kana3,
        });
      });
  };

  return (
    <>
      <Title />
      <Form setZipcode={setZipcode} getZipcode={getZipcode} />
      <Results results={results} />
      <Manual />
      <Copy />
    </>
  );
};

export default App;
