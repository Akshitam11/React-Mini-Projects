import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let res = await fetch(url);

            let result = await res.json();

            setData(result);
        }
        fetchData();

    }, [url])
    return [data];
}

export default useFetch;