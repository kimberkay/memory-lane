import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditEntryForm (props) {
  const firestore = useFirestore();
  const { entry } = props;

  function handleEditEntryFormSubmission(event) {
    event.preventDefault();
    props.onEditEntry();
    const propertiesToUpdate = {
      title: event.target.title.value,
      date: event.target.date.value,
      description: event.target.description.value
    }
    return firestore.update({collection: 'entries', doc: entry.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditEntryFormSubmission}
        buttonText="Update Entry"
      />
    </React.Fragment>
  );
}

EditEntryForm.propTypes = {
  entry: PropTypes.object,
  onEditEntry: PropTypes.func
}

export default EditEntryForm;