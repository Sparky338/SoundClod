import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/songs";

const AllSongs = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => Object.values(state.songs));

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch])

    if (!songs) {
        return null
    }

    return (
        <div>
            {songs.map((song) => {
                return (
                    <li key={song.id}>
                        Artist Id:{song.userId}, Song Title:{song.title}, Album Id: {song.albumId}
                    </li>
                )
            })}
        </div>
    );

}

export default AllSongs;
