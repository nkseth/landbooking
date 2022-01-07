
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
     dispatch(opensnackbar("success","Files succesfully submitted"))
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
      styles={{
        previewImage:{height:'100px'}
      }}
      accept="image/*"
    />
          
        </div>
     
    </div>
  );
};
export default Addgallery;
