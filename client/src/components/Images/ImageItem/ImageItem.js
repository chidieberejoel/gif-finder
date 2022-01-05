import React from "react";
import { capitalizeText } from "../../../utilities/formatText";
import "./ImageItem.css";

const ImageItem = (props) => {
  return (
    <>
      <li className="image-item">
        <div className="image-item-content">
          <a
            href={props.url}
            title={capitalizeText(props.title)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img
                alt={capitalizeText(props.title)}
                width="330"
                height="247"
                src={props.imageUrl}
                data-animated-url={props.imageUrl}
                sizes="(max-width: 500px) 320px, (min-width: 501px) and (max-width: 615px) 600px, 400px"
                rel="preload"
                as="gif"
                data-originalsrc={props.imageUrl}
              />
            </figure>
            <div className="image-rating">
              <div className="image-rating-content">
                {props.rating?.toUpperCase()}
              </div>
            </div>
          </a>

          <div className="image-thumbnail-overlay">
            <div className="image-thumbnail-overlay-content">
              <div className="image-title">{capitalizeText(props.title)}</div>
              <div className="image-icon">
                <div className="image-icon-text">
                  {props.type?.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-details-container">
          {props.uploader && (
            <div className="image-uploader-information">
              <a
                className="image-uploader-link"
                href={props.uploader?.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={props.uploader?.display_name}
                  width="24"
                  height="24"
                  data-src={props.uploader?.avatar_url}
                  src={props.uploader?.avatar_url}
                />
                <span className="image-uploader-name">
                  {props.uploader?.display_name}
                </span>
              </a>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default ImageItem;
