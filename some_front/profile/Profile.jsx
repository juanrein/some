export default function App(props) {
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
            "user": 0
        },
        {
            "title": "bye",
            "content": "what is this",
            "comments": [
                {
                    "text": "e2312"
                }
            ],
            "user": 0
        },
        {
            "title": "you",
            "content": "whafdas",
            "comments": [],
            "user": 0
        },
    ]
    return <div>
        <header>
            <div><a href="/">Some</a></div>
            <form>
                <input type="text" name="" id="" />
                <input type="password" name="" id="" />
                <input type="submit" value="login" />
            </form>
        </header>
        <main>
            {posts.map(post => (
                <div>
                    <h1>{post.title}</h1>
                    <div>{post.content}</div>
                </div>
            ))}
        </main>
    </div>
}