export default function Post(props) {
    return <div className="post">
        <a href={`/profile/${props.profile_id}`}>profile</a>
        <div>{props.content}</div>
    </div>
}