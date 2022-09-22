import { Link } from "react-router-dom";
import './SongCard.css';

const SongCard = ({ id, userId, albumId, title, description, url, imageUrl }) => {

    return (
        <div className="song-cards">
            <li className="song-card">
                <img className="image card-image" src={`${imageUrl}`} alt={`Song artwork`}  />
                <Link to={`/songs/${id}`} className="title link card-title">{title}</Link> {/*font-size 14px, line-height: 1.4, text-decoration: none; font-weight 100,
            font-family:Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;*/}
                {/*<p className="userId link card-userId">{userId}</p>{/*12px/1.4, text-decoration: none; Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif*/}
            </li>
        </div>
    );
};

export default SongCard;
