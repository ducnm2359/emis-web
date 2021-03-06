import { Col, Row } from 'antd';
import React from 'react';
import './styles.css';

const headerLayout = [
  { span: 5, header: 'Name', offset: 1 },
  { span: 6, header: 'Type', offset: 4 },
];

/**
 * @function
 * @name EvacuationCenterListHeader
 * @description Render list headers
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const EvacuationCenterListHeader = () => (
  <Row className="EvacuationCenterListHeader">
    {headerLayout.map(item => (
      <Col key={item.header} {...item}>
        <h4 className="title">{item.header}</h4>
      </Col>
    ))}
  </Row>
);

export default EvacuationCenterListHeader;
