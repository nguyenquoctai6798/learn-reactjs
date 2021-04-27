import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
Album.propTypes = {
    album: PropTypes.object
};
Album.defaultProps = {
    album: {
        id: 1,
        title: '',
        thumbnailUrl: ''
    }
}

function Album(props) {
    const {album} = props
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.thumbnailUrl} alt={album.name}/>
            </div>
            <div className="album__title">{album.title}</div>
        </div>
    );
}

export default Album;