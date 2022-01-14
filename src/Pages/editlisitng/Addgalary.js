import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { baseurl } from "../../config";
import { opensnackbar } from "../../redux/slices/user";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { DeleteTwoTone, UndoOutlined } from "@mui/icons-material";
const Addgallery = (props) => {
  const [del, setdel] = React.useState([]);
  React.useEffect(() => {
 
  }, [del]);

  const adddeletedimages = (item) => {
    const newset = del;
    newset.push(item);
    setdel(newset);
  };

  const removedeletedimages = (item) => {
    const newset = del;
    newset.splice(newset.indexOf(item), 1);
    setdel(newset);
  };

  
  const dispatch = useDispatch();

  const handleSubmit = (files, allFiles) => {
    const fil= allFiles.map((item)=>item.file)
    props.setgimages(fil);
   dispatch(opensnackbar("success","Files succesfully submitted"))
  }
  return (
    <div className="add-listing-box full-detail mrg-bot-25 padd-bot-30 padd-top-25">
      <div className="listing-box-header">
        <i className="ti-gallery theme-cl" />
        <h3>Add Gallery</h3>
        <p>Write full detail information about listing Owner</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
   
        {props.oldimages?.map((item, index) => {
          return (
            <div style={{ display: "flex", flexDirection: "column",marginBottom: "10px"}}>
              <img
                src={`${baseurl}${item}`}
                style={{
                
                  height: "100px",
                  margin: "10px",
                  opacity: del.includes(item) ? 0.5 : 1,
                }}
                alt={"uploaded images"}
              />
              {del.includes(item) ? (
                <Button
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    props.removedeletedimages(item);
                    removedeletedimages(item);
                  }}
                >
                  <UndoOutlined/> <p style={{marginBottom:0}}>Undo</p>
                </Button>
              ) : (
                <Button
                  style={{ fontSize: "14px" }}
                  onClick={() => {
                    props.adddeletedimages(item);
                    adddeletedimages(item);
                  }}
                >
                  <DeleteTwoTone/> <p style={{marginBottom:0}}>Delete</p>
                </Button>
              )}
            </div>
          );
        })}
      </div>

    
        <div className="dz-default dz-message d-flex justify-content-center ">
        <Dropzone
      onSubmit={handleSubmit}
      submitButtonContent	='Save My Collection'
      styles={{
        dropzone:{flexDirection:'row',flexWrap:'wrap',justifyContent: "center"
      ,alignItems: 'center',overflow:'hidden',margin:'10px'
      },
        previewImage:{minWidth:'auto',height:'auto'},
        preview:{maxWidth:'fit-content'},
        inputLabelWithFiles:{alignSelf:"center",width:'100%',
        padding:'10px 10px',margin:'3%'},
        submitButtonContainer:{width:'100%',
        display: 'flex',alignItems: 'center',
        justifyContent: "center"}
      }}
      accept="image/*"
    />
        </div>
     
    </div>
  );
};
export default Addgallery;
