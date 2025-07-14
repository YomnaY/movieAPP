import React, { useContext } from 'react';
import DeveloperCard from "./DeveloperCard";
import { moviesContext } from "../contexts/moviesContextProvider";
const Developers = () => {

    const { filterdDevelopersArr } = useContext(moviesContext)

    if (!filterdDevelopersArr) return <SimpleBackdrop></SimpleBackdrop>
    return (
        <div className="card-deck">

            {filterdDevelopersArr.map((u) => <DeveloperCard key={u.id} id={u.id} name={u.name} overview={u.overview} email={u.email} img={u.img}  ></DeveloperCard>

            )}

        </div>
    );
}

export default Developers;