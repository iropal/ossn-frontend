import React from 'react';

import clubCover from '../../../../images/ClubCover.png';
import groupSmallImage from '../../../../images/group-small.jpg';

/**
 * Displays a club's description and name along with the selected cover and profile images.
 *
 * @param {string} props.bannerImageUrl
 * @param {string} props.imageUrl
 * @param {string} props.subtitle
 * @param {string} props.title
 */
function ClubFullHeader({ bannerImageUrl, imageUrl, subtitle, title }) {
  return (
    <div className="club-full__header">
      <div className="club-full__cover-wrapper">
        <img
          alt=""
          className="club-full__cover-image"
          src={bannerImageUrl || clubCover}
        />
      </div>

      <div className="club-full__header-bottom">
        <div className="club-full__profile-picture-section">
          <div className="club-full__profile-picture-wrapper">
            <img
              alt="Club Profile"
              className="club-full__profile-picture"
              src={imageUrl || groupSmallImage}
            />
          </div>
        </div>

        <div className="club-full__title-wrapper">
          {title}
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default ClubFullHeader;
