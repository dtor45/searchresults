import React from "react";
import { Col } from "reactstrap";
import styles from "./singleResult.module.css";

function SingleResult(props) {
  return (
    <Col md="3" className="mb-2 d-flex justify-content-center">
      <div>
        <img src={props.obj.imageUrl} alt={props.obj.title} height="250" />
        <div>
          <p>{props.obj.contentType}</p>
          <h4 className={styles.productTitle}>{props.obj.title}</h4>
        </div>
      </div>
    </Col>
  );
}

export default SingleResult;
