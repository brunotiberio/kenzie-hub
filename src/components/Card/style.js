import styled from "styled-components";
import { HeadLine, HeadlineBold } from "../../styles/global";

export const StyledCardContainer = styled.button`
    height: 48.73px;
    width: 95%;

    margin-top: 15px;
    margin-bottom: 15px;
    
    background-color: var(--gray4);
    border-radius: 4.06066px;
    border: 1px solid transparent;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &&:hover{
        cursor: pointer;
        background: var(--gray2)
    }
    
`

export const StyledTecnologyName = styled(HeadlineBold)`
    margin-left: 10px;

    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
`

export const StyledTecnologyLevel = styled(HeadLine)`
    margin-right: 10px;

    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
`