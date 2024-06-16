import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/UsersSlice";
import { Link } from "react-router-dom";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => Number(user.id) === userId);
    
    return <span>by {author
        ? <Link to={`/user/${userId}`}>{author.name}</Link>
        : 'Unknown author'}</span>
}
export default PostAuthor