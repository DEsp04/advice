import {useState, useEffect} from "react"
import axios from "axios";
import {SEARCH_ADVICE_URL} from '../Constant'
import Advice from './Advice'




 function SearchButton() {
    const [searchData, setSearchData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }
    const fetchData = async () => {
        try {
            const response = await axios.get(`${SEARCH_ADVICE_URL}${searchInput}`);
            const { slips } = response.data;
            setSearchData(slips)
        }
        catch (err) {
            console.log('Error', err)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <h2>Search For Advice</h2>
            <input onChange={handleChange} />
            <button onClick={fetchData}>Search</button>
            <ul style={{ marginTop: 25 }}>
                {searchData ? searchData.map((item, index) => {
                    const { advice } = item;
                    return  <Advice advice={advice} key={index} />;
                }) : ""}
            </ul>
        </div>
    );
 }

 

export default SearchButton;