import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions/index';
import Button from '../button';

import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { isLoading, images, error, loadImages } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    {error && (
                        <div className="error">{JSON.stringify(error)}</div>
                    )}
                    <Button
                        onClick={() =>
                            // !isLoading &&
                            loadImages()
                        }
                        // loading={isLoading}
                    >
                        Load More
                    </Button>
                </section>
            </div>
        );
    }
}
const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error,
});
const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
