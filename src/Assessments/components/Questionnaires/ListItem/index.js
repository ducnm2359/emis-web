import { Avatar, Checkbox, Col, Icon, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import randomColor from 'randomcolor';
import './styles.css';

/**
 *
 * @class
 * @name QuestionnairesListItem
 * @description Single questionnaire list item component. Render single
 * questionnaire details
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class QuestionnairesListItem extends Component {
  state = {
    isHovered: false,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    phase: PropTypes.string.isRequired,
    assess: PropTypes.string.isRequired,
    stage: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { title, phase, assess, stage, onEdit } = this.props;
    const avatarBackground = randomColor();
    const { isHovered } = this.state;
    return (
      <div
        className="QuestionnairesListItem"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Row>
          <Col span={1}>
            {isHovered ? (
              <Checkbox className="Checkbox" />
            ) : (
              <Avatar style={{ backgroundColor: avatarBackground }}>
                {phase.charAt(0)}
              </Avatar>
            )}
          </Col>
          <Col span={8}>{title}</Col>
          <Col span={3}>{phase}</Col>
          <Col span={4}>{assess}</Col>
          <Col span={3}>{stage}</Col>
          <Col span={3}>
            {isHovered && (
              <Fragment>
                <Icon
                  type="edit"
                  title="Update Questionnaire"
                  className="actionIcon"
                  onClick={onEdit}
                />
                <Icon
                  type="share-alt"
                  title="Share Questionnaire"
                  className="actionIcon"
                />
                <Icon
                  type="database"
                  title="Archive Questionnaire"
                  className="actionIcon"
                />
              </Fragment>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default QuestionnairesListItem;
