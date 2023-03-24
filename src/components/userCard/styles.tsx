import styled from "styled-components";


export const StyledCardList = styled.li`
    display: flex;
    flex-direction: column;
    width: 85%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    text-align: initial;
    background-color: #e1e6d3;
    border-radius: 15px 0px 0px 15px;
    margin-top: 15px;
    padding-right: 10px;

        .user_section{
            height: 85px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
            height: 85px;
            width: 100%;
        }
    
        .user_card_div{
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%
        }

        .user_card_options_div{
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            cursor:pointer;
        }

        .card_edit_btn{
            height: 50%;
            background-color: #f6d169;
            border-radius: 15px 0px 0px 0px;
        }

        .card_delete_btn{
            height: 50%;
            background-color: #e6324b;
            border-radius: 0px 0px 0px 15px;
        }

        .user_card_detail_div{
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

        .user_contacts_options_div{
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-around;
            cursor:pointer;
        }

        .cusor_return_contacts{
            transform: scaleY(-1);
        }

        ul{
            padding: 5px;
            width: 100%;
            background-color: bisque;
            max-height: 300px;
            overflow-y: auto;
        }


`