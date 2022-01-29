import * as S from './styles'

const Text= ({children, as})=>{
    return(
        <S.Title as={as} >
            {children}
        </S.Title>
    )
}

export default Text