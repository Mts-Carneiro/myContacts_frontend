import styled from "styled-components";


export const StyledCardContact = styled.li`
    padding-left: 20px;
    width: 95%;
    background-color: aqua;
    padding-left: 20px;
    background-color: #ffffff75;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    height: 80px;
    border-radius: 0px 15px 15px 0px ;

    .contact_option_div{
        height: 100%;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: center;
        align-items: center;
        cursor:pointer;
    }

    .contact_card_edit_btn{
        height: 50%;
        background-color: #ffe089;;
        border-radius: 0px 15px 0px 0px;
    }

    .contact_card_delete_btn{
        height: 50%;
        background-color: #f7334e;
        border-radius: 0px 0px 15px 0px;
    }

    .contact_card_detail_div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        padding-left: 5px;
        h3{
            margin: 0;
            font-size: x-large;
        }

        span{
            font-size: small;
        }
    }
`