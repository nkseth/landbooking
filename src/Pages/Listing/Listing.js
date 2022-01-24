/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Cards as Card } from "../../Components";
import { Form, Button } from "react-bootstrap";
import Bannerbg from "../../assets/title-bg.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Listing.css";
import {
  getlistingpublic,
  getlistingprivate,
  viewFavourites,
} from "../../redux/slices/popularlisting";
import { useSelector, useDispatch } from "react-redux";
import { baseurl } from "../../config";
import { withRouter } from "react-router-dom";
import Locationstring from "../../Components/locationstring/location";
import { getcategory, getcategorypublic } from "../../redux/slices/categories";
import { useLocation } from "react-router-dom";
const Listing = ({ history }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.popularlisting);

  const user = useSelector((state) => state.user);
  const location = useSelector((state) => state.location);
  const [localaddress, setlocalddress] = React.useState("");

  React.useEffect(() => {
    setqueryperams({
      ...queryperams,
      coordinateRange: {
        radius: queryperams.radius,
        longitude: location.longitude,
        latitude: location.latitude,
      },
      zipcode: location.zipcode,
    });
  }, [location]);

  const categories = useSelector((state) => state.categories);
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const pcategoryId = query.get("categoryId");
  const plocation = query.get("address");
  const pr = query.get("r");

  const [queryperams, setqueryperams] = React.useState({
    search: null,
    limit: 6,
    page: 1,
    categoryId: pcategoryId !== "undefined" && pcategoryId ? pcategoryId : null,
    coordinateRange:
      plocation !== "" && plocation
        ? {
            radius: pr && pr ,
            longitude: location.longitude,
            latitude: location.latitude,
          }
        : null,
    zipcode: null,
    address: plocation !== "" && plocation ? plocation : localaddress,
    radius: (pr !== undefined && pr!==null) && pr,
    latitude: plocation ? location.latitude : null,
    longitude: plocation ? location.longitude : null,
  });

  const [selectedcategory, setselectedcategory] = React.useState({});


  const [settonull,setsettonull]=React.useState(false)
  const updateaddress = (string) => {
    setlocalddress(string);
  };

  React.useEffect(() => {
    if (selectedcategory?.uuid) {
      setqueryperams({ ...queryperams, categoryId: selectedcategory.uuid });
    }
  }, [selectedcategory]);

  React.useEffect(() => {
    if (user.user) {
      if (!user.user.user.emailVerified || !user.user.user.phoneVerified)
        history.push("/editprofile");
    }
  }, [user.user]);

  const handleChange = (event, value) => {
  
    setqueryperams({ ...queryperams, page: value });
    if (user.user) {
      if (user.user.user.emailVerified && user.user.user.phoneVerified) {
        dispatch(getlistingprivate({ ...queryperams, page: value }));
        dispatch(getcategory());
      }
    } else {
      dispatch(getlistingpublic({ ...queryperams, page: value }));
      dispatch(getcategorypublic());
    }
  };

  const undofilter = () => {
    setsettonull(true)
   
    setqueryperams({
      search: null,
      limit: 6,
      page: 1,
      categoryId: null,
      coordinateRange: null,
      zipcode: null,
      address: null,
      radius: 10,
      latitude: null,
      longitude: null,
    });

    searchclicked({
      search: null,
      limit: 6,
      page: 1,
      categoryId: null,
      coordinateRange: null,
      zipcode: null,
      address: null,
      radius: 10,
      latitude: null,
      longitude: null,
    });

    if (plocation || pcategoryId) history.push("/listing");
  };


  React.useEffect(() => {
    if (user.user) {
      if (user.user.user.emailVerified && user.user.user.phoneVerified) {
        dispatch(getlistingprivate(queryperams));
        dispatch(getcategory());
        dispatch(viewFavourites());
      }
    } else {
      dispatch(getlistingpublic(queryperams));
      dispatch(getcategorypublic());
    }
  }, [user.user]);

  const searchclicked = (data) => {
  
    
    if (
      user.user &&
      user.user.user.emailVerified &&
      user.user.user.phoneVerified
    )
      dispatch(getlistingprivate(data));
    else dispatch(getlistingpublic(data));
  };



  return (
    <div
      id="listing"
      className="listing my-md-5 my-3  d-flex justify-content-center align-items-center flex-column"
    >
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${Bannerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "40vh",
          width: "100vw",
          position: "relative",
          marginBottom: "12rem",
        }}
      >
        <div
          className="content-container d-flex justify-content-center align-items-md-center align-items-top p-5"
          style={{
            backgroundColor: "rgba(58, 87, 135, 0.45)",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="text-container text-white text-center ">
            <h1 style={{ fontSize: "3rem", color: "#FFFFFF" }}>LISTING</h1>
            <p style={{ color: "white" }}>
              <span style={{ color: "#1EFFAC" }}>HOME</span>{" "}
              <ArrowForwardIosIcon
                sx={{ fontSize: "15px", color: "#FFFFFF" }}
              />
              LISTING
            </p>
          </div>
          <div className="formInput-container ">
            <div className="text-center mb-2" style={{ color: "#334E6F" }}>
              <h3>Search For Listing</h3>
            </div>
            <Form.Control
              size="lg"
              type="dropdown"
              placeholder="Search By Name"
              className="w-90 p-3 form-control"
              id="form-input"
              style={{ marginBottom: "10px" }}
              onChange={(e) => {
                setqueryperams({ ...queryperams, search: e.target.value });
              }}
            />
            <Form className="d-flex justify-content-center align-items-center flex-md-row flex-column">
              <Locationstring
                label="none"
                size="col-12 col-md-5"
                onaddresschanging={updateaddress}
                getaddress={false}
                settonull={settonull}
               setsettonull={setsettonull}
              />
              <Form.Control
                size="lg"
                type="number"
                placeholder="Radius"
                className=" form-control w-100"
                id="form-input"
                value={queryperams.radius}
                style={{ marginBottom: "10px", width: 100 }}
                onChange={(e) => {
                  setqueryperams({ ...queryperams, radius: e.target.value });
                }}
              />

              <div className="col-12 col-md-3">
                <select
                  data-placeholder="Choose Category"
                  value={queryperams.categoryId}
                  onChange={(e) => {
                    setselectedcategory(
                      categories?.categories?.find((item, index) => {
                        if (e.target.value === item.uuid) return true;
                      })
                    );
                  }}
                  className="form-control chosen-select"
                  tabIndex={2}
                >
                  {" "}
                  <option value={0}>Select Category</option>
                  {categories?.categories?.map((item) => {
                    return <option value={item.uuid}> {item.name}</option>;
                  })}
                </select>
              </div>
              <Button onClick={undofilter} style={{ 
                marginTop: "-10px",minWidth:'fit-content' }}>
                Undo Filter
              </Button>
            </Form>
            <Button
              variant="btn "
              className=" button"
              style={{
                padding: "14px 50px",
                backgroundColor: "#1EFFAC",
                color: "white",
                width: "100%",
                borderRadius: "0",
                boxShadow: "none",
                marginBottom: "10px",
              }}
              onClick={() => {
                searchclicked(queryperams);
              }}
            >
              Search
            </Button>
            <p style={{color:'red'}}>{data?.noresultfound}</p>
          </div>
         
        </div>
      </div>

      <div
        className="row d-flex justify-content-center flex-row  maxwidth"
        style={{ marginTop: "130px" }}
      >
        {data?.listing?.map((item, index) => {
          if (user.user) {
            if (item?.host?.userId !== user.user?.user?.uuid) {
              return (
                <Card
                  title={item.title}
                  subTitle={item.address}
                  imageSrc={`${baseurl}${item.images[0]}`}
                  amount={item.rent}
                  rating={item.rating}
                  id={item.uuid}
                  favour={data?.favourite?.find((i)=>i.uuid===item.uuid)}
                />
              );
            }
          } else {
            return (
              <Card
                title={item.title}
                subTitle={item.address}
                imageSrc={`${baseurl}${item.images[0]}`}
                amount={item.rent}
                rating={item.rating}
                id={item.uuid}
                favour={null}
              />
            );
          }
        })}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          count={Math.ceil(data?.listingcount / queryperams.limit)}
          variant="outlined"
          color="primary"
          page={queryperams.page}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
};

export default withRouter(Listing);
