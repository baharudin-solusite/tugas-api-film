import axios from "axios";
import React, { useState, useEffect } from "react";


const Film = () => {
    const [films, setFilm] = useState([])
    useEffect(() => {
        const getDataFilm = async () => {

            const result = await axios.get(
                "https://api.themoviedb.org/3/movie/now_playing?api_key=245cc97c7d89f31cd2e0a19c6e896d8b&language=en-US&page=1"
            )
            console.log(result.data.results)
            setFilm(result.data.results);
        };
        console.log("useEffect");
        getDataFilm();
    }, [])

    return (
        <div>
            {console.log("return")}
            <h1>Api Film</h1>

            {films.length == 0 ? (
                <h1>Loading...</h1>
            ) : (
                films.map((item, index) => (
                    <div key={index}>
                        {/* <img src={item.img} alt="" width={200} /> */}
                        <span>{item.title}</span>
                    </div>
                ))
            )}
        </div>
    )
}

export default Film