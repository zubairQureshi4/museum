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

  useEffect(()=>{
    const getUser = () =>{
      if(localStorage.getItem('email')){
        setIsUser(true)
      }
    }
    const getdata = async () => {
      setLoading(true);
      const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects");
      setMainData(response.data.objectIDs.sort((a, b) => a - b))     
      setLoading(false);
    };
    getdata()
    getUser()
    setNewPageData()
  },[])

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

const setNewPageData = () =>{
  setSlicedData(newFetch - 10 , newFetch)
  setNewFetch(newFetch + 10)
}

  return (
    <div>
    {isUser ? 
      <div>
    <MainNavBar newPage={setNewPageData} setIsUser={setIsUser}/>
    {loading ? <h1>Loading...</h1> : 
    <div className="row">
      {jsonData.map((item)=>{return (
      <div className="col-6" key={item.objectId}>
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
