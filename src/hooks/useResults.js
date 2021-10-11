import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (searchTerm) => {
    console.log('searchTerm= ', searchTerm);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });

      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Some error!" + error);
      console.log(error);
    }
  };

  useEffect(() => {
    searchAPI();
  }, []);

  return [searchAPI, results, errorMessage]
};
