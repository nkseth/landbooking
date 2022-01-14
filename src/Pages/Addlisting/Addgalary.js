
import React from "react";

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { opensnackbar } from "../../redux/slices/user";
import { useDispatch } from "react-redux";

const Addgallery = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = (files, allFiles) => {
      const fil= allFiles.map((item)=>item.file)
      props.setgimages(fil);
     dispatch(opensnackbar("success","Files saved "))
    }
  
  return (
    <div className="add-listing-box full-detail mrg-bot-25 padd-bot-30 padd-top-25">
      <div className="listing-box-header">
        <i className="ti-gallery theme-cl" />
        <h3>Add Gallery</h3>
        <p>Write full detail information about listing Owner</p>
      </div>
     
     
        <div className="dz-default dz-message d-flex justify-content-center ">
        <Dropzone
          onSubmit={handleSubmit}
          submitButtonContent	='Save My Collection'
      styles={{
        dropzone:{flexDirection:'row',flexWrap:'wrap',justifyContent: "center"
      ,alignItems: 'center',overflow:'hidden',margin:'10px'
      },
        previewImage:{minWidth:'auto',height:'auto',},
        preview:{maxWidth:'fit-content',border:'none',
        
      },
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
