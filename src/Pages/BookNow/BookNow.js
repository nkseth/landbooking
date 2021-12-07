import React from "react";
import { Grid } from "@mui/material";
import { BookCard, PaymentForm } from "../../Components";

const BookNow = () => {
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
    <div style={{ marginTop: "3.5rem" }}>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={11} md={6}>
          <PaymentForm />
        </Grid>
        <Grid item xs={11} md={3}>
          {CardData.map((item, index) => {
            return (
              <BookCard
                title={item.title}
                subTitle={item.location}
                amount={item.amount}
                imageSrc={item.imageSrc}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default BookNow;
