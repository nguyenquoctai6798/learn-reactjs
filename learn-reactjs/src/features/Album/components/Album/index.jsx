import React from 'react';
import PropTypes from 'prop-types';

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
            <div className="album-thumbnail">
                <img src={album.thumbnailUrl} alt={album.name}/>
            </div>
            <div className="album-title"></div>
        </div>
    );
}

export default Album;