import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteSong } from '../../../store/songs';

const DeleteSongButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { songId } = useParams();
    const songsState = useSelector(state => state.songs)
    const sessionState = useSelector(state => state.session)
    const currentUser = sessionState.user.id
    const artist = songsState[songId].userId;
    const song = songsState[songId].id;

    if (currentUser === artist) {
        const handleClick = async (e) => {
            e.preventDefault();
            const deleted = await dispatch(deleteSong(song))
            /*if (deleted /*&& !song)*/ history.push('/songs');
        }
        return (
            <button onClick={handleClick}>Delete</button>
        )
    } else {
        return null;
    }

}

export default DeleteSongButton;
