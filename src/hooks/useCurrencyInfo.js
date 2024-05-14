import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest`)
      .then((res)=>res.json())
      .then((res)=>setData(res.rates))
  }, [currency]);
  console.log("currency data=>",data);

  return data;
};

export default useCurrencyInfo;