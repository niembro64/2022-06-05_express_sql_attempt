import axios from "axios";
import React, { useEffect, useState, createElement } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Home = (props) => {
    const [dbtest, setDbtest] = useState({ assignment: "none", port: 0 });
    const [form, setForm] = useState({
        pirateName: "",
        imageUrl: "",
        numChests: 0,
        catchPhrase: "",
        crewPosition: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
    });
    const [fromDb, setFromDb] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState({ name: {} });
    const history = useHistory();
    // history.push(`/${category}/${detail}`);

    useEffect(() => {
        console.log("Running useEffect");

        axios
            .get("http://localhost:3000/users")
            // .get("localhost:3000/users")
            .then((res) => {
                console.log(res.data);
                setFromDb(res.data);
            })
            .catch((err) => console.log(err));
        // .catch((err) => console.log(err.response.data.err.errors));

        setLoaded(false);
    }, []);

    return (
        <>
            <h1>TEST HOME</h1>
            {fromDb.map((item, i) => {
                return <p key={i}>{item.username} {item.password}</p>;
            })}
        </>
    );
};

export default Home;
