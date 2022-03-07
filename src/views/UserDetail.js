import { useParams } from "react-router-dom"


export default function UserDetail() {
    let params = useParams();

    return <h1>UserDetail: { params.id }</h1>
}