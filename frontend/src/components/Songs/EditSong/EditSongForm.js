import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SongForm from '../SongForm'

const EditSongForm = () => {
    const { songId } = useParams();
    const song = useSelector(state => state.songs[songId])
    const currentUser = useSelector(state => state.session.user.id);
    const artist = useSelector(state => state.songs[songId].userId)

    if (!song) return null;

    if (currentUser === artist) {
        return (
            <SongForm song={song} formType="Update song" />
        );
    } else return null
}

export default EditSongForm;