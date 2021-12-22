import { Button } from '@mui/material';
import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import { baseurl } from '../../config';
const Addgallery = (props)=>{
   const [deltedimages,setdeletedimages]=useState([...props.del])
    const fileTypes = ["JPG", "PNG", "GIF","JPEG"];
    const [localimage,setlocalimage]=React.useState([])
    const addimage=async (file)=>{
        props.setgimages([...props.gImages,file])
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
 await toBase64(file).then((result)=>{
     console.log(result)
     setlocalimage([...localimage,result]);
 })
       
    }
return(
    <div className="add-listing-box full-detail mrg-bot-25 padd-bot-30 padd-top-25">
    <div className="listing-box-header">
      <i className="ti-gallery theme-cl" />
      <h3>Add Gallery</h3>
      <p>Write full detail information about listing Owner</p>
    </div>

    <div style={{display: 'flex',alignItems:'center',justifyContent: 'center',flexWrap:'wrap'}}>


{
   props.oldimages?.map((item,index)=>{
       
      return <div style={{display: 'flex', flexDirection: 'column'}}>
      <img src={`${baseurl}${item}`} style={{width:'70px',height:'70px',margin:'10px',opacity:deltedimages.includes(item)?0.5:1}} alt={"uploaded images"}/>
      {deltedimages.includes(item)?
       <Button style={{fontSize:'14px'}} onClick={()=>{props.removedeletedimages(item)}}>undo</Button>:
      <Button style={{fontSize:'14px'}} onClick={()=>{props.adddeletedimages(item)}}>Remove</Button>
      }
       </div>

      
    })
}
</div>

    <div style={{display: 'flex',alignItems:'center',justifyContent: 'center',flexWrap:'wrap'}}>

        {console.log(localimage)}
        {
           localimage.map((item,index)=>{
               
              return <div style={{display: 'flex', flexDirection: 'column'}}>
              <img src={item} style={{width:'70px',height:'70px',margin:'10px'}} alt={"uploaded images"}/>
              <Button style={{fontSize:'14px'}} onClick={()=>{
                  let newimage=localimage
                  newimage.splice(index,1)
                  
                    setlocalimage([...newimage])
                    props.deleteimage(index)
              }}>Remove</Button>
               </div>
  
              
            })
        }
    </div>
    <form action="https://codeminifier.com/upload-target" className="dropzone dz-clickable primary-dropzone">
      <div className="dz-default dz-message d-flex justify-content-center ">
        
        <FileUploader name="file" types={fileTypes} handleChange={addimage} />
      </div>
    </form>
  </div> 
)
}
export default Addgallery