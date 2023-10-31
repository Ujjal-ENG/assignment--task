/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactPlayer from 'react-player';

const YoutubeModal = ({ link }) => {
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  w-11/12 max-w-2xl h-96 p-10">
                    <ReactPlayer url={link} controls width="100%" height="100%" />
                    <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </label>
                </div>
            </div>
        </div>
    );
};

export default YoutubeModal;
