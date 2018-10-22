import React from 'react';

// Local modules.
import MemberUpdates from './../member-updates/member-updates';
import MemberTools from './../member-tools/member-tools';
import MemberTrainingResources from './../member-training-resources/member-training-resources';

// styles
import './opportunities-member.scss';

export default (props) => {

  return (
    <div className="opportunities-member">

      <h1 className="title title--small opportunities-member__title">
        Opportunities
      </h1>

      <div className="opportunities-member__info">
        <p  className="opportunities-member__text highlighted-text">
          We bring you the best opportunities to contribute code. Practice your skills by taking part in compelling Open Source projects that match your interests!
        </p>
        <div className="promoted-box">
            <h3 className="promoted-box__title"> Next steps after signing up </h3>
          <ol className="promoted-box__content">
            <li className="promoted-box__item"> Explore contribution opportunities </li>
            <li className="promoted-box__item"> Reach out to  us </li>
            <li className="promoted-box__item"> Explore available interships/jobs </li>
            <li className="promoted-box__item"> Check the latest announcements </li>
          </ol>
        </div>
      </div>

      <MemberUpdates announcements={props.announcements} jobs={props.jobs} />
      <MemberTools channels={props.channels} tools={props.tools} />
      <MemberTrainingResources resources={props.resources}/>
    </div>
  );
}
