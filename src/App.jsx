import { useState } from 'react'
import './App.css'
import Post from './Post'

function App() {
    let posts = [
        {
            "title": "hello",
            "content": "hello, hello. Nothing important",
            "comments": [
                {
                    "text": "fdafasd"
                },
                {
                    "text": "fdffasdf"
                }
            ],
            "user": 0,
            "media": "/images/image1.jpg"
        },
        {
            "title": "bye",
            "content": "what is this",
            "comments": [
                {
                    "text": "e2312"
                }
            ],
            "user": 1,
            "media": "/images/image2.jpg"
        },
        {
            "title": "you",
            "content": "whafdas",
            "comments": [],
            "user": 1,
            "media": ""
        },
    ]
    return (
        <div className="App">
            <header>
                <div><a href="/">Some</a></div>
                <form>
                    <input type="text" name="" id="" />
                    <input type="password" name="" id="" />
                    <input type="submit" value="login" />
                </form>
            </header>

            <main>
                {posts.map(post => (<Post {...post} />))}
            </main>
        </div>
    )
}

export default App
