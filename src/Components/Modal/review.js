import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import { Rating } from "@mui/material";
import { opensnackbar } from "../../redux/slices/user";
import {
  deletereviews,
  givereviews,
  reviews,
  updatereviews,
} from "../../redux/slices/popularlisting";
import { DeleteTwoTone } from "@mui/icons-material";

const Reviewmodal = (props) => {
  const [data, setdata] = React.useState([]);

  const dispatch = useDispatch();
  const [rating, setrating] = React.useState(0);
  const [comment, setcomment] = React.useState("");
  const previews = useSelector((state) => state.popularlisting);
  const [ur, setur] = useState(false);
  useEffect(() => {
    setdata(previews.reviews);
  }, [previews]);

  const submitrating = () => {
    if (rating < 1 && comment === "") {
      dispatch(
        opensnackbar("error", "please Enter all details to give a feedback")
      );
    } else
      dispatch(
        givereviews(props.data.venue.uuid, { remarks: comment, rating: rating })
      );
    props.close();
  };

  const updaterat = (index, rat) => {
    const n = [...data];
    const ob = { ...n[index] };
    ob["rating"] = rat;

    n[index] = { ...ob };
    setdata([...n]);
  };

  const updaterem = (index, rem) => {
    const n = [...data];
    const ob = { ...n[index] };
    ob["remark"] = rem;

    n[index] = { ...ob };
    setdata([...n]);
  };

  React.useEffect(() => {
    if (props.show) {
      dispatch(reviews(props.data.venue.uuid));
    }
  }, [props.show]);

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => {
          props.close();
        }}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
            Add A Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="mt-3">Add New Review</h5>
          <div className="text-center">
            <div className="mt-3 mb-3">
              <Rating
                precision={0.5}
                value={rating}
                onChange={(event, newValue) => {
                  setrating(newValue);
                }}
              />
            </div>
            <div>
              <textarea
                className="h-500 form-control"
                defaultValue={""}
                onChange={(e) => {
                  setcomment(e.target.value);
                }}
              />
            </div>
            <Button onClick={submitrating}>Submit Review</Button>
          </div>
          {data?.length > 0 ? 
          <div className="d-flex justify-content-between mt-2">
           
           
              <Button
                onClick={() => {
                  setur(!ur);
                }}
                style={{
                  backgroundColor: ur ? "gray" : "lightgray",
                  border: "none",
                  maxWidth: "fit-content",
                }}
              >
                Update/Delete A Review
              </Button>
            
          </div>
          : null}
          <div className="d-flex flex-wrap ">
            {previews?.reviews?.length > 0 ? (
              data?.map((item, index) => {
                console.log(item);
                return (
                  <div className="text-center  col-md-6 p-2">
                    <div className="mt-3 mb-3">
                      <Rating
                        precision={0.5}
                        value={item.rating}
                        readOnly={!ur}
                        onChange={(event, newValue) => {
                          updaterat(index, newValue);
                        }}
                      />
                    </div>
                    <div>
                      <textarea
                        className="h-500 form-control"
                        value={item.remark}
                        readOnly={!ur}
                        onChange={(e) => {
                          updaterem(index, e.target.value);
                        }}
                      />
                    </div>
                    {ur ? (
                      <div className="d-flex">
                        <Button
                          style={{ backgroundColor: "#1effac", border: "none" }}
                          onClick={() => {
                            dispatch(
                              updatereviews(props.data.venue.uuid, item.uuid, {
                                rating: item.rating,
                                remarks: item.remark,
                              })
                            );
                            props.close();
                          }}
                        >
                          Update Review
                        </Button>
                        <div
                          className="d-flex align-items-center p-2"
                          style={{ backgroundColor: "pink", cursor: "pointer" }}
                          onClick={() => {
                            dispatch(
                              deletereviews(props.data.venue.uuid, item.uuid)
                            );
                            props.close();
                          }}
                        >
                          <DeleteTwoTone />
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })
            ) :null}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withRouter(Reviewmodal);
