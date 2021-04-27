import React from 'react';
import PropTypes from 'prop-types';

ListAlbum.propTypes = {
    listAlbum: PropTypes.array
};
ListAlbum.defaultProps = {
    listAlbum: []
}

function ListAlbum(props) {
    const {listAlbum} = props
    return (
        <div className="list-album">
            <ul>
                {listAlbum.map(album => (
                    <li>{<Album album={album}/>}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListAlbum;