import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Post from './Post'

function App() {
    let [posts, setPosts] = useState([]);
    let [textAreaValue, setTextAreaValue] = useState("");
    let [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("https://tpmkm4b3d6.execute-api.us-east-1.amazonaws.com/prod/profiles/0/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(data);
        })
        .catch(e => console.error(e));
    }, [])

    function handleCommentSend() {
        let fields = {
            "content": textAreaValue
        }
        fetch("https://tpmkm4b3d6.execute-api.us-east-1.amazonaws.com/prod/profiles/0/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(e => console.error(e));
    }

    function handleSearch() {
        fetch(`https://tpmkm4b3d6.execute-api.us-east-1.amazonaws.com/prod?search=${searchText}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(data)

        })
        .catch(e => console.error(e));
    }

    return (
        <div className="App">
            <Header />

            <form className='post-search-form' onSubmit={e => {
                e.preventDefault();
                handleSearch();
            }}>
                <h2>Search posts</h2>
                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} name="" id="" />
                <input type="submit" value="search" />
            </form>
            <main>
                <form className='create-comment-form' onSubmit={e => {
                    e.preventDefault();
                    handleCommentSend();
                }}>
                    <h1>Create post</h1>
                    <textarea value={textAreaValue} onChange={e => setTextAreaValue(e.target.value)} />
                    <input type="submit" value="submit" />
                </form>
                {posts.map(post => (<Post key={post.post_id} {...post} />))}
            </main>
        </div>
    )
}

export default App
