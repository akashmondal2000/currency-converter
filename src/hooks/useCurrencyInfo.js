import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/inr`)
      .then((res)=>res.json())
      .then((res)=>setData(res.rates))
      console.log(data);
  }, [currency]);

  return data;
};

export default useCurrencyInfo;