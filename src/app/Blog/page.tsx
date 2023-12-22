import { Metadata } from "next";
import FirstBlog from "./FirstBlog/page";

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    }
}

export default function Blog(){
    return(
        <div>
            <FirstBlog name="Abbas's Blog" message="Welcome to blog. You will enjoy" />
        </div>    
    )
}
