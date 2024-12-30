import {useState, useEffect} from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    
    return data;
}

export default useCurrencyInfo;