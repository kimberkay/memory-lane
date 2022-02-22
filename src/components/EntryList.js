import React from 'react';
import PropTypes from 'prop-types';
import Entry from "./Entry";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function EntryList(props) {
  useFirestoreConnect([
    { collection: 'entries' }
  ]);

  const entries = useSelector(state => state.firestore.ordered.entries);

  if(isLoaded(entries)) {
    return (
      <React.Fragment>
        <hr />
        {entries.map((entry) => {
          return <Entry
            whenEntryClicked={ props.onEntrySelection }
            title={ entry.title }
            date={ entry.date }
            description={ entry.description }
            id={ entry.id }
            key={ entry.key }
          />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

EntryList.propTypes = {
  onEntrySelection: PropTypes.func
};

export default EntryList;

