import axios from "axios";
import  { useEffect, useState } from "react";
import DetailCards from "./DetailCards";
import MainNavBar from "./MainNavbar";
import LoginAndLogout from "./LoginAndLogout";

const AllData = () => {
  const [jsonData, setJsonData] = useState([]);
  const [MainData, setMainData] = useState([]);
  const [newFetch, setNewFetch] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isUser, setIsUser] = useState(false);
 
  const getdata = async () => {
    setLoading(true);
    const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects");
    setMainData(response.data.objectIDs.sort((a, b) => a - b))     
    setLoading(false);
  };

  const setSlicedData = async (start, end) =>{
    setLoading(true);
    setJsonData([])
    const slicedData = await MainData?.slice(start, end)
    for (let index = 0; index < slicedData.length; index++) {
      await getAllSingleJson(slicedData[index])
    }
    setLoading(false);
}


  const getAllSingleJson = async (arr) =>{
        const jsonDat = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arr}`)
        setJsonData((prevData) => [...prevData, jsonDat.data]);
}
console.log(jsonData);
const setNewPageData = () =>{
  setSlicedData(newFetch - 10 , newFetch)
  setNewFetch(newFetch + 10)
}

useEffect(()=>{
  const getFirstData = async () =>{
    if(localStorage.getItem('email')){
     await getdata()
      setIsUser(true)
    }
  }
  getFirstData();
},[])
  return (
    <div>
    {isUser ? 
      <div>
    <MainNavBar newPage={setNewPageData} setIsUser={setIsUser} isLoading={loading}/>
    {loading ? <h1>Loading...</h1> : 
    <div className="row">
      {jsonData.map((item)=>{return (
      <div className="col-4" key={Math.random()}>
      <DetailCards props={item}/>
      </div>
      )
      })}
    </div>
    }
    </div> : <LoginAndLogout setIsUser={setIsUser}/> 
}
    </div>
  );
};

export default AllData;
