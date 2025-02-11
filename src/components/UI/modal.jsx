import Button from "./button";
import styled from "styled-components";
import { Fragment } from "react";
import { createPortal } from "react-dom";

export const Modal = ({onClose, open, children}) => {
    return (
        open && createPortal(
            <Fragment>
            < StyledBlackDrop onClose={onClose}/>
            <StyledWrapper>
        <StyledContend>{children}</StyledContend>
    </StyledWrapper>
        </Fragment>,
        document.getElementById("modal")
        )
    );
};
// modal for asking to delete
// react component fragment use like <></>
// portal for open this code on anather madal div
// function open modal question


const StyledWrapper = styled.div`
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
    background-color: rgb(0, 0, 0);
`

const StyledContend = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyledBlackDrop = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
`