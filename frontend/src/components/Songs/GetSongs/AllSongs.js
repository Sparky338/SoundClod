import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../../store/songs";
import { Link } from "react-router-dom";

const AllSongs = () => {
    const dispatch = useDispatch();
    const songsObj = useSelector((state) => (state.songs));
    const songs = Object.values(songsObj)

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch])

    if (!songsObj) {
        return null
    }

    return (
        <div>
            {songs.map((song) => {
                return (
                    <li key={song.id}>
                        {/* Artist Id:{song.userId}, Song Title:{song.title}, Album Id: {song.albumId} */}
                        <Link to={`/songs/${song.id}`}>Artist Id:{song.userId}, Song Title:{song.title}, Album Id: {song.albumId}</Link>
                    </li>
                )
            })}
            <div><Link to={`/songs/current`}>Current User's songs</Link></div>
        </div>
    );

}

export default AllSongs;
