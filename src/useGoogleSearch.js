import {useState, useEffect} from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = "fa612e053742e9558"; // Get this from: https://programmablesearchengine.google.com/cse/create/new

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}` // Get this link from : https://developers.google.com/custom-search/v1/using_rest
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                });
        }

        fetchData();
    }, [term]);

    return {data}
};

export default useGoogleSearch;