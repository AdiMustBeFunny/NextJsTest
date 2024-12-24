'use client';
import { useParams } from "next/navigation";

export default function PostDetails(){
    const params = useParams()

    const { id } = params 

    return (
        <div>
            Post details, id: {id}
        </div>
    )
}