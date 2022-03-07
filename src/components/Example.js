import styled from 'styled-components';

const FlexBox = styled.div`
    display : flex;
    flex-direction : ${props => props.direction || 'row'};
`
const Item = styled.div`
    width : 300px;
    height : 300px;
    background-color : ${props => props.color || 'red'};
`

export default function Example() {
    return (
        <FlexBox direction="column">
            <Item color="black"/>
            <Item/>
            <Item/>
        </FlexBox>
    )
}