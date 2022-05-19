import styled from "styled-components";
export default function Movies(props){
    return(
        <Movie>
            <img src={props.poster} alt={`Poster de ${props.title}`} />
        </Movie>
    );
}
const Movie = styled.li`
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background: #FFFFFF;
    display: flex;
    align-items: center;

    img{
    height: 193px;
    width: 129px;
}
`;