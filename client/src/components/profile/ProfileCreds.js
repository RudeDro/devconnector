import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import isEmpty from "../../validation/is-empty";

class ProfileCreds extends Component {
  render() {
    const { profile } = this.props;

    const experience = profile.experience.map((experience, index) => (
      <li key={index} className="list-group-item">
        <h4>{experience.company}</h4>
        <p>
          <Moment format="DD.MM.YYYY">{experience.from}</Moment> -{" "}
          {experience.to === null ? (
            "Now"
          ) : (
            <Moment format="DD.MM.YYYY">{experience.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {experience.title}
        </p>
        {isEmpty(experience.location) ? null : (
          <p>
            <strong>Location:</strong> {experience.location}
          </p>
        )}
        {isEmpty(experience.description) ? null : (
          <p>
            <strong>Description:</strong> {experience.description}
          </p>
        )}
      </li>
    ));

    const education = profile.education.map((education, index) => (
      <li key={index} className="list-group-item">
        <h4>{education.school}</h4>
        <p>
          <Moment format="DD.MM.YYYY">{education.from}</Moment> -{" "}
          {education.to === null ? (
            "Now"
          ) : (
            <Moment format="DD.MM.YYYY">{education.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree: </strong>
          {education.degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>
          {education.fieldofstudy}
        </p>
        {isEmpty(experience.description) ? null : (
          <p>
            <strong>Description:</strong> {experience.description}
          </p>
        )}
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {experience.length > 0 ? (
            <ul className="list-group">{experience}</ul>
          ) : (
            <p className="text-center">No Experience listed</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {education.length > 0 ? (
            <ul className="list-group">{education}</ul>
          ) : (
            <p className="text-center">No Education listed</p>
          )}
        </div>
      </div>
    );
  }
}

ProfileCreds.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileCreds;
