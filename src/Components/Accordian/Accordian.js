import React from "react";
import { Accordion, Card, useAccordionButton, Form } from "react-bootstrap";
import "./Accordian.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{
        backgroundColor: "white",
        border: "none",
        width: "100%",
        textAlign: "start",
        fontSize: "1.2rem",
        padding: "1rem",
        color: "#334E6F",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Accordian = () => {
  const AccordianData = [
    {
      title: "Paypal",
      image: "https://webdesign.riolabz.com/yardcan/html/assets/img/paypal.png",
      form: [
        {
          title: "PayPal Name",
          type: "text",
        },
        {
          title: "PayPal Email",
          type: "email",
        },
        {
          title: "Phone no.",
          type: "number",
        },
      ],
    },
    {
      title: "Credit / Debit Card",
      image: "https://webdesign.riolabz.com/yardcan/html/assets/img/credit.png",
      form: [
        {
          title: "Card Holder Name",
          type: "text",
        },
        {
          title: "Card no.",
          type: "phone",
        },
        {
          title: "Expiry Month",
          type: "number",
        },
        {
          title: "Expiry Year",
          type: "year",
        },
        {
          title: "Cvv",
          type: "cvv",
        },
      ],
    },
  ];
  return (
    <Accordion defaultActiveKey="0">
      {AccordianData.map((item, index) => {
        return (
          <Card className="mb-3" key={index}>
            <Card.Header
              className="d-flex justify-content-between"
              style={{
                border: "none",
                padding: 0,
                boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)",
              }}
            >
              <CustomToggle eventKey={index}>
                <div className="d-flex justify-content-between">
                  <div>{item.title}</div>
                  <div>
                    <img src={item.image} alt="" width="100" />
                  </div>
                </div>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <Form className="d-flex justify-content-start align-items-center flex-md-row flex-column flex-wrap w-100">
                  {item?.form.map((item, index) => {
                    return (
                      <div
                        id="paypal-input"
                        className=" mb-3 mx-2 "
                        key={index}
                      >
                        <Form.Label
                          style={{ fontWeight: 500, color: "#798092" }}
                        >
                          {item.title}
                        </Form.Label>
                        <Form.Control
                          size="lg"
                          type={item.type}
                          placeholder={item.title}
                          className="w-100 p-3 form-input"
                          id="form-input"
                        />
                      </div>
                    );
                  })}
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};

export default Accordian;
