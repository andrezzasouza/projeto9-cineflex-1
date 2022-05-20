import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "./Select";
import Session from "./Session";

export default function Sessions(){
    const {movieID} = useParams();
    const [sessionDays, setSessionDays] = useState([]);
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`)
        promise.then(response => setSessionDays(response.data.days));
    },[])
    return(
        <>
            <Select>
                <p>Selecione o horário</p>
            </Select>
            {sessionDays.map((day, index)=><Session day = {day} key = {index} />
            )}
        </>
    );
}