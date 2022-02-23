import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const useSelect = (initialState, options, label, icon) => {
  const [state, setState] = useState(initialState);
  const select = () => (
    <Row className="my-3">
      <Col xs={1} className="my-auto text-end">
        {icon}
      </Col>
      <Col>
        <Form.Label>{label}</Form.Label>
        <Form.Select value={state} onChange={(e) => setState(e.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  );
  return [state, select];
};

export default useSelect;
