import React from "react";
import { Modal } from "react-bootstrap";

import { Grid, Box } from "@mui/material";
import { BookCard } from "..";
import BookCard2 from "../BookCard/bookcard2";
const LBModal = (props) => {
  const CardData = [
    {
      title: "Yardcan",
      imageSrc:
        "https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
  ];
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => {
          props.close();
        }}
        dialogClassName="modal-150w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
            View Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid
            container
            justifyContent="center"
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Grid container justifyContent="center">
              <Grid item xs={11} container justifyContent="center">
                <Box style={{ width: "100%" }}>
                  {CardData.map((item, index) => {
                    return (
                      <>
                        {!props.reservations ? (
                          <BookCard
                            title={item.title}
                            subTitle={item.location}
                            amount={item.amount}
                            imageSrc={item.imageSrc}
                            data={props.data}
                          />
                        ) : (
                          <BookCard2 data={props.data} />
                        )}
                      </>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
