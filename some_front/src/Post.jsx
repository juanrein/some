export default function Post(props) {
    return <div>
        <h1>{props.title}</h1>
        <div>{props.content}</div>
        <a href="/profile/">profile</a>
        <img src={props.media}/>
    </div>
}