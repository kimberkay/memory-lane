import React from 'react';
import PropTypes from 'prop-types'

function Entry(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenEntryClicked(props.id)}>
        <h3>{props.title} - {props.date}</h3>
        <p>{props.description}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}

Entry.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenEntryClicked: PropTypes.func
};

export default Entry;