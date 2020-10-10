import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';


const Search = ({hideButtons = false}) => {
    const [input, setInput]=useState("");
    const history = useHistory();

    const search =(e)=> {
        e.preventDefault();

        console.log("This is input value >>", input);

        history.push('/search');
    }
 
    return (
        <>
            <form className="search">
                <div className="search__input">
                    <SearchIcon className="search__inputIcon"/>
                    <input value={input} onChange={e =>setInput(e.target.value)} />
                    <MicIcon/>
                </div>

                {!hideButtons ? (
                    <div className="search__buttons">
                        <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                        <Button  variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                ): (
                    <div className="search__buttons">
                        <Button className="input__hideButtons" onClick={search} type="submit" variant="outlined">Google Search</Button>
                        <Button className="input__hideButtons" variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )}
            </form>
        </>
    );
};

export default Search;