import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSongComments } from "../../../store/comments";


const CommentsBySongId = () => {
    const dispatch = useDispatch();
    const { songId } = useParams();
    const commentsSession = useSelector((state) => (state.comments));
    const comments = Object.values(commentsSession)

    useEffect(() => {
        dispatch(getSongComments(songId));
        console.log('New comment render!')
    }, [dispatch])

    if (!commentsSession) return null

    const filteredComments = comments.filter(comment => comment.songId === +songId);

    return (
        <div>
            {filteredComments.map((comment) => {
                return (
                    <div className='comments' key={comment.id}>
                        <div className="comments username">{comment.User.username}</div>
                        <p className="comments commentBody">{comment.body}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default CommentsBySongId
