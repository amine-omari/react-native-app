import { useState } from "react";

const useFetch = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    hostname: `jsearch.p.rapidapi.com/${endpoint}`,
    port: null,
    path: "/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all",
    headers: {
      "x-rapidapi-key": "121ee3519fmsha81dfa35b995e5dp12e546jsna66077285727",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };
};
