import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DetailsWrapped = ({ record }) => (
  <div className="uk-card uk-card-default uk-width-xlarge">
    <div className="uk-card-header">
      {record.title}
    </div>
    <div className="uk-card-body">
      <p>{record.description}</p>
      <p>
        Tags:&nbsp;
        {record.tags.join(', ')}
      </p>
    </div>
    <div className="uk-card-footer">
      <p href="#" className="uk-button uk-button-text">
        {record.isDone ? 'COMPLETED' : 'INCOMPLETE'}
      </p>
    </div>
  </div>
);
DetailsWrapped.propTypes = {
  record: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  record: state.todos[state.detail]
});

const Details = connect(
  mapStateToProps
)(DetailsWrapped);

export default Details;
