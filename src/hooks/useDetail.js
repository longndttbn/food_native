import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (id) => {
    
  const [result, setResult] = useState(null); // when only get a element object => using null
 
  const getResults = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.log('error= ', error);
    }
  };

  useEffect(() => {
    getResults(id);
  }, []);

  return [result];
};
