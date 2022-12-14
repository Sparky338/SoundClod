import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SongForm from '../SongForm';

const CreateSongForm = () => {
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user)

    const song = {
        title: '',
        description: '',
        url: '',
        imageUrl: '',
        albumId: null
    };

    if (currentUser){
        return (
            <SongForm song={song} formType="Upload a song" />
        );
    } else return (
        <div>
            {history.push(`/`)}
            {/* {window.alert("You must be signed in to upload a song!")} */}
        </div>
    )
}

export default CreateSongForm;
