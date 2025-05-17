import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #ffffff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant})=> variant !== "primary" && css`
        min-width: 16px;
        height: 32px;

        background: #E4105D;ge

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #e4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`

/*
${({variant})=> variant !== "primary" && css

este trecho 
${({variant})
serve para eu receber por parametro do button o valor da variant e poder utilizalá na comparação:
 variant !== "primary"
e então se a condição for true,
&& css
este codigo é executado, executando assim o css dentro dele
*/