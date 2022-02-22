import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewEntryForm(props){
  const firestore = useFirestore();

  function addEntryToFirestore(event) {
    event.preventDefault();
    props.onNewEntryCreation();

    return firestore.collection('entries').add(
      {
        title: event.target.title.value,
        date: event.target.date.value,
        description: event.target.description.value
      }
    )
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addEntryToFirestore}
        buttonText="Add Entry"
      />
    </React.Fragment>
  )
}

NewEntryForm.propTypes = {
  onNewEntryCreation: PropTypes.func
};

export default NewEntryForm