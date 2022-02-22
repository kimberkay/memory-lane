import React from 'react';
import PropTypes from 'prop-types';
import EntryList from './EntryList';
import EntryDetail from './EntryDetail';
import EditEntryForm from './EditEntryForm';
import NewEntryForm from './NewEntryForm';
import { connect } from 'react-redux';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { getAuth } from 'firebase/auth';

class EntryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEntry: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedEntry != null) {
      this.setState({
        selectedEntry: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewEntryToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedEntry = (id) => {
    this.props.firestore.get({ collection: 'entries', doc: id }).then((entry) => {
      const firestoreEntry = {
        title: entry.get("title"),
        date: entry.get("date"),
        description: entry.get("description"),
        id: entry.id
      }
      this.setState({ selectedEntry: firestoreEntry });
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingEntryInList = () => {
    this.setState({
      editing: false,
      selectedEntry: null
    });
  }

  handleDeletingEntry = (id) => {
    this.props.firestore.delete({ collection: 'entries', doc: id });
    this.setState({ selectedEntry: null });
  }

  render(){
    const auth = getAuth();

    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }

    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = <EditEntryForm entry = {this.state.selectedEntry} onEntry = {this.handleEditingEntryInList} />
        buttonText = "Return to Entry List";
      } else if (this.state.selectedEntry != null) {
        currentlyVisibleState = 
        <EntryDetail 
          entry = {this.state.selectedEntry} 
          onClickingDelete = {this.handleDeletingEntry} 
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Entry List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewEntryForm onNewEntryCreation={this.handleAddingNewEntryToList}  />;
        buttonText = "Return to Entry List";
      } else {
        currentlyVisibleState = <EntryList entryList={this.props.mainEntryList} onEntrySelection={this.handleChangingSelectedEntry} />;
        buttonText = "Add Entry";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

EntryControl.propTypes = {
  mainEntryList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainEntryList: state.mainEntryList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

EntryControl = connect(mapStateToProps)(EntryControl);

export default withFirestore(EntryControl);
