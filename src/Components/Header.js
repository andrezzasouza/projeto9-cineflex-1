import styled from "styled-components";
export default function Header(){
    return (
        <Container>
            <p>CINEFLEX</p>
        </Container>
    );
}
const Container = styled.div`
width: 375px;
height: 67px;
background-color: #C3CFD9;
display: flex;
justify-content: center;
align-items: center;

p{
    font-size:34px;
    color:#E8833A;
};
`