import { useEffect } from "react";
import "./App.css";
import { useAxiosRequest } from "./common/hooks/useAxiosRequest";

function App() {
  const postsApi = useAxiosRequest([]);
  // Functions
  const SalesData = () => {
    postsApi.apiAction({
      urlObjKey: "postsApi",
    });
  };

  useEffect(() => {
    SalesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(postsApi?.resData);

  return (
    <>
      <div className="App">
        <p>Learn React</p>
        {postsApi?.resData.map((item, index) => {
          return (
            <div key={index}>
              <li>{item?.title}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
