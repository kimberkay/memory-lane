import React from 'react';
import PropTypes from 'prop-types';

function EntryDetail(props) {
  const { entry, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Entry Detail</h1>
      <h3>{entry.title} - {entry.date}</h3>
      <p>{entry.description}</p>
      <button onClick={ props.onClickingEdit }>Update Entry</button>
      <button onClick={() => onClickingDelete(entry.id) }>Delete Entry</button>
      <hr />
    </React.Fragment>
  );
}

EntryDetail.propTypes = {
  entry: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default EntryDetail;