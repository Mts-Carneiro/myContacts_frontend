import styled from "styled-components";


const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color:#b1ccc4;
    border-radius: 18px 18px 0px 0px;
    width: 80vw;
    max-width: 850px;
    height: 18vh;
    max-height: 190px;
    min-height: 150px;
    padding-bottom: 5px;

    .interacts_bar{
        display: flex;
        width: 85%;
        align-items: center;
        justify-content: space-between;
        
    }

    .search_div{
        display: flex;
        align-items: center;
    }

    .create_client_btn{
        background-color:#76c1ab;
        color: #fff;
        padding: 2px 5px;
        border: 0px;
        border-radius: 5px;
        cursor: pointer;
    }

    .create_client_btn:hover{
        background-color:#4e5861;
        color: #ffffffcc;
    }

    .search_bar{
        border: 0px;
        border-radius: 5px 0px 0px 5px;
        padding: 2px 5px;
    }

    .search_icon{
        cursor: pointer;
        padding: 2px;
        background-color:#b1ccc4;
        border-radius: 0px 5px 5px 0px;
        color: #4e5861;
    }

    .search_icon:hover{
        background-color:#76c1ab;
        color: #fff;
    }
`

export default StyledHeader