import React, { useCallback } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import { confirmreservation } from "../../redux/slices/reservations";
import StripeCheckout from "react-stripe-checkout";
import { baseurl } from "../../config";
import { EventSourcePolyfill } from "event-source-polyfill";
import logo from "../../assets/yardcanlogo.png";
const LBModal = (props) => {
  const [data, setdata] = React.useState(null);
  const venue = useSelector((state) => state.popularlisting.listingdetails);
  const reservation = useSelector(
    (state) => state.reservartions.reservationdetails
  );
  const dispatch = useDispatch();
  const [eventtype, seteventtype] = React.useState(null);
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    if (user.user) {
      let eventSource = new EventSourcePolyfill(
        `${baseurl}api/v1/event/restricted/subscribe/payment_required`,
        {
          headers: { Authorization: "Bearer " + user.user.tokens.access.value },
          heartbeatTimeout: 300000,
        }
      );

      eventSource.onmessage = (e) => {
        setdata(JSON.parse(e.data));
        seteventtype("payment");
        eventSource.close();
      };
      eventSource.onerror = (e) => {
        eventSource.close();
        console.log("An error occurred while attempting to connect.");
      };

      let eventSource2 = new EventSourcePolyfill(
        `${baseurl}api/v1/event/restricted/subscribe/reservation_failed`,
        {
          headers: { Authorization: "Bearer " + user.user.tokens.access.value },
          heartbeatTimeout: 300000,
        }
      );

      eventSource2.onmessage = (e) => {
        setdata(JSON.parse(e.data));
        seteventtype("failed");
        eventSource2.close();
      };
      eventSource2.onerror = (e) => {
        eventSource2.close();
        console.log("An error occurred while attempting to connect.");
      };
      return () => {
        eventSource2.close();
        eventSource.close();
      };
    }
  }, [user.user]);

  const processcheckout = (token) => {
    dispatch(confirmreservation(token, data.reservationId, props.id));

    setdata(null);
    seteventtype(null);

    props.close();
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => {
          setdata(null);
          seteventtype(null);
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
            {props.noti?.notification?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{props.noti?.notification?.body}</div>
          <h6
            style={{
              backgroundColor: "red",
              textAlign: "center",
              padding: "10px 15px",
              color: "white",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            {eventtype === "payment"
              ? "Please Proceed with the payment"
              : eventtype === "failed"
              ? "Your request could not be processed please try again"
              : "Please Wait we are processing your request...."}
          </h6>
          {eventtype === "payment" && (
            <>
              <div>
                <h5 style={{ textAlign: "center" }}>Venue Details</h5>
                {venue?.images[0] ? (
                  <img
                    alt="venue"
                    src={baseurl + venue?.images[0]}
                    style={{ maxWidth: `100%`, width: "100%" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      border: "1px solid red",
                    }}
                  ></div>
                )}

                <h6 style={{ marginTop: "20px" }}>{venue?.title}</h6>
                <p style={{ fontSize: "12px" }}>{venue?.address}</p>
                <h5 className="mt-3 text-center"> Details</h5>
                <h6> Guest List </h6>
                <div className="d-flex justify-content-between">
                  <p style={{ fontSize: "12px" }}>
                    Adults:{reservation?.guestList?.adults}
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    Children:{reservation?.guestList?.children}
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    Infants:{reservation?.guestList?.infants}
                  </p>
                </div>
              </div>
              <h6 className="mt-2 ">Schedules</h6>

              <div>
                {reservation?.schedules.map((item) => {
                  return (
                    <div className="d-flex">
                      <p style={{ fontSize: "12px" }}>{item.date} -</p>
                      <div className="d-flex justify-content-start">
                        {item.intervals.map((item2) => {
                          return (
                            <p className="mx-2 " style={{ fontSize: "12px" }}>
                              {item2}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <div>
                  {reservation?.slots ? <h6> Slots </h6> : null}
                  {reservation?.slots
                    ? reservation.slots.map((item) => {
                        return (
                          <p className="mx-2" style={{ fontSize: "12px" }}>
                            {item}
                          </p>
                        );
                      })
                    : null}
                </div>
              </div>

              <h6 style={{ textAlign: "center" }}>
                {eventtype === "payment" ? `Total Amount:${data?.amount}` : ""}
              </h6>
            </>
          )}
          {eventtype === "payment" && (
            <StripeCheckout
              stripeKey="pk_test_51JxTaBHneeV50Qz279YeijjaIAMx5QaKg1vPxdFtVqZuY6lfr9HJXLrGWvkkA8xDrP6IXVO0ZkeJC2fdxXsEOPsh00rBgZxSZm"
              token={processcheckout}
              name={"Yardcan"}
              image={logo}
              amount={data?.amount * 100}
              alipay
              bitcoin
            >
              <Button style={{ marginTop: 50 }}>Proceeed With Payment</Button>
            </StripeCheckout>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withRouter(LBModal);
