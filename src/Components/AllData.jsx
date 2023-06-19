import axios from "axios";
import { useEffect, useState } from "react";
import DetailCards from "./DetailCards";
import MainNavBar from "./MainNavbar";
import LoginAndLogout from "./LoginAndLogout";
import DetailModal from './DetailModal'

const AllData = () => {
  const [jsonData, setJsonData] = useState([]);
  const [MainData, setMainData] = useState([]);
  const [newFetch, setNewFetch] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [itemDetail, setItemDetail] = useState(true);
  const [singleData, setSingleData] = useState();

  const getdata = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects"
    );
    setMainData(response.data.objectIDs.sort((a, b) => a - b));
    setLoading(false);
  };

  const setSlicedData = async (start, end) => {
    setLoading(true);
    setJsonData([]);
    const slicedData = await MainData?.slice(start, end);
    for (let index = 0; index < slicedData.length; index++) {
      await getAllSingleJson(slicedData[index]);
    }
    setLoading(false);
  };

  const getAllSingleJson = async (arr) => {
    const jsonDat = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arr}`
    );
    setJsonData((prevData) => [...prevData, jsonDat.data]);
  };
  console.log(jsonData);
  const setNewPageData = () => {
    setSlicedData(newFetch - 10, newFetch);
    setNewFetch(newFetch + 10);
  };

  useEffect(() => {
    const getFirstData = async () => {
      if (localStorage.getItem("email")) {
        await getdata();
        setIsUser(true);
      }
    };
    getFirstData();
  }, []);
  return (
    <div>
      {isUser ? (
        <div>
          <MainNavBar
            newPage={setNewPageData}
            setIsUser={setIsUser}
            isLoading={loading}
          />
          {itemDetail ? 
          <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="row">
            <h1 className="text-center mt-2">Welcome To The Online Museum</h1>
              {jsonData.map((item) => {
                return (
                  <div className="col-4" key={Math.random()}>
                    <DetailCards props={item} setItemDetail={setItemDetail} setSingleData={setSingleData}/>
                  </div>
                );
              })}
            </div>
          )}
          </div>
          : <div>
            <DetailModal setItemDetail={setItemDetail} singleData={singleData}/>
          </div>}
        </div>
      ) : (
        <LoginAndLogout setIsUser={setIsUser} />
      )}
    </div>
  );
};

export default AllData;
