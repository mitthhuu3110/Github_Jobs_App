import React, { useEffect } from "react";
import Jobs from "../components/Jobs/Jobs";
import Nav from "../components/nav/Nav";

const SearchPage = () => {
    useEffect(() => {
        document.title = 'WUZZUF'; 
      }, []);
    return (
        <div>
            <Nav />
            <div style={{ paddingTop: "60px" }}>

            </div>
            <Jobs />
        </div>
    )
}

export default SearchPage