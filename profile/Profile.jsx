import { useEffect, useState } from "react"
import Header from "../src/Header"
import "../src/App.css";

export default function Profile(props) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        let url = window.location.href;
        let profile_id = url.slice(url.indexOf("profile/")+8).replace("/", "");
        fetch(`https://tpmkm4b3d6.execute-api.us-east-1.amazonaws.com/prod/profiles/${profile_id}/posts`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(data);
        })
        .catch(e => console.error(e));
    }, [])

    return <div>
        <Header />
        <main>
            <h1>Profile</h1>
            {posts.map(post => (
                <div key={post.post_id} className="post">
                    <div>{post.content}</div>
                </div>
            ))}
        </main>
    </div>
}