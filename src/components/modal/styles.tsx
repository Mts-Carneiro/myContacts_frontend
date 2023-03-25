import styled  from "styled-components";

export const DivCreateModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5e3ae;
    border-radius: 10px;
    padding: 5px;
    height: 96%;

    .header_div_modal{
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        h3{
            margin-top: 10px;
            margin-bottom: 10px;
        }

        svg{
            cursor: pointer;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: stretch;
        justify-content: space-around;
        height: 100%;
    }

    input{
        padding: 3px;
        border-radius: 10px;
        border-color: #00000070;
    }

    label{
        font-weight: 500;
    }

    span{
        font-size: 0.6rem;
        margin-left: 5px;
        margin-bottom: 5px;
        background-color: #ff91919e;
    }

    button{
        width: 40%;
        margin-left: 30%;
        margin-top: 10px;
        border: none;
        border-radius: 11px;
        background-color:#80c169 ;
        padding: 5px;
        color: #ffffffe6;
        cursor: pointer;
    }

    button:hover{
        background-color:#76c1ab;
        color: #ffffffcc;
    }

`

export const DivDeleteModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5e3ae;
    border-radius: 10px;
    padding: 5px;
    height: 96%;

    .div_delete_choice{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        button{
            width: 35%;
            margin-top: 10px;
            margin-bottom: 10px;
            border: none;
            border-radius: 11px;
            padding: 5px;
            color: #ffffffe6;
            cursor: pointer;
        }

        .delete_yes{
            background-color:#80c169 ;
        }

        .delete_yes:hover{
            background-color:#76c1ab;
            color: #ffffffcc;
        }

        .delete_not{
            background-color: #e94b4b ;
        }

        .delete_not:hover{
            background-color:#f7334ec7;
            color: #ffffffcc;
        }
    }
`