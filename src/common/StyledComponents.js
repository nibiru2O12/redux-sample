import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const Form = styled.form`
    display: inline-block;
    border: 1px solid gray;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
`;

export const Input = styled.input`
    display: block;
    padding: 5px 10px;
    margin: 10px;
    outline: none;
    border: 1px solid gray;
    border-radius: 3px;
    box
`;

export const Button = styled.a`
    display: inline-block;
    padding: 5px 10px;
    margin: 10px;
    outline: none;
    border: 1px solid gray;
    cursor: pointer;
    box-sizing: border-box;

    &:hover{
        color:blue;
        font-weight: bold;
    }
`;

export const Nav = styled.ul`

    display: flex;
    justify-content: flex-end;
    list-style: none;
    background: rgba(0,0,0,.2);
    
    & li {
        display: inline-block;

        & a {
            color: black;
           display: inline-block;
            padding: 20px;
            cursor: pointer;
            text-style: none;
            text-decoration: none;

            &:hover, &:active{
                background: rgba(0,0,0,.7);
                color: white;
            }
        }
    }

`;