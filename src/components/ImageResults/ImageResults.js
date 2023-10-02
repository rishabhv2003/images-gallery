import React, { Component } from "react";
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@mui/material/IconButton';
import ZoomIn from '@mui/icons-material/ZoomIn';

class ImageResults extends Component {
    render() {
        let imageList;
        const { images } = this.props;
        if (images) {
            imageList = (
                <GridList cols={4}>
                    {
                        images.map(img => (
                            <GridListTile
                                title={img.tags}
                                key={img.id}
                                actionIcon={
                                    <IconButton>
                                        <ZoomIn color='white' />
                                    </IconButton>
                                }
                            >
                                <img src={img.largeImageURL} alt={img.tags} />
                            </GridListTile>
                        ))
                    }
                </GridList>
            )
        } else {
            imageList = null;
        }
        return (
            <div>
                {imageList}
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;
