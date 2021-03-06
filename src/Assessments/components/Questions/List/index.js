import { List } from 'antd';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import QuestionsListHeader from '../ListHeader';
import QuestionsListItem from '../ListItem';

// eslint-disable-next-line jsdoc/require-returns
/**
 *
 * @function
 * @name QuestionsList
 * @description question list item component. Render question details
 *
 * @param {Object} props props object
 * @param {boolean} props.loading preload list of questions
 * @param {Array} props.questions array list of questions
 * @param {Function} props.onEdit function for editing single question
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const QuestionsList = ({ questions, loading, onEdit }) => (
  <Fragment>
    <QuestionsListHeader />
    <List
      loading={loading}
      dataSource={questions}
      renderItem={question => (
        <QuestionsListItem
          key={question.name}
          label={question.label}
          phase={question.phase}
          assess={question.assess}
          stage={question.stage}
          color={question.indicator.color}
          onEdit={() => onEdit(question)}
        />
      )}
    />
  </Fragment>
);

QuestionsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default QuestionsList;
