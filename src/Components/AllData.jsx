import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DetailCards from "./DetailCards";
import MainNavBar from "./MainNavbar";

const AllData = () => {
  const [jsonData, setJsonData] = useState([]);
  const [MainData, setMainData] = useState([]);
  const [newFetch, setNewFetch] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const getdata = async () => {
      setLoading(true);
      const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects");
      setMainData(response.data.objectIDs.sort((a, b) => a - b))     
      setLoading(false);
    };
    getdata()
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
        console.log(`Start loop ${arr}`);
        const jsonDat = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arr}`)
        setJsonData((prevData) => [...prevData, jsonDat.data]);
}

const setNewPageData = () =>{
  setSlicedData(newFetch - 10 , newFetch)
  setNewFetch(newFetch + 10)
}

  return (
    <div>
    <MainNavBar newPage={setNewPageData}/>
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
    </div>
  );
};

export default AllData;
