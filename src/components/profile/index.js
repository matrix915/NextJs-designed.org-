import axios from "axios";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "react-toastify";

export const onChangeImage = async ({ file, name }, setValue, keyValue, setFileId, getLatestUserdetails, onSubmitImageUpload) => {
  try {
    const id = toast.loading("Profile picture is uploading");
    var bodyFormData = new FormData();
    bodyFormData.append("file", file, file.name);
    const old_image_array = name.split("/")
    const old_image_id = old_image_array[old_image_array.length - 2];

    bodyFormData.append("old_image_id", old_image_id);
    axios.post(`https://profile-upload.designedplatform.workers.dev/`, bodyFormData).then(async (response) => {
      if (response.data && response.data.result.id) {
        const imageUrl = `https://imagedelivery.net/Biz-7_vJO6O8Q9HnNqYfHg/${response.data.result.id}/user`;
        setValue(keyValue, imageUrl);
        setFileId(imageUrl);
        toast.update(id, { closeOnClick: true, autoClose: true, render: "Profile picture successfully uploaded!", type: "success", isLoading: false });
        if (typeof onSubmitImageUpload === "function") {
          await onSubmitImageUpload({ imageUrl });
        }
        if (typeof getLatestUserdetails === "function") {
          await getLatestUserdetails();
        }
      }
    }).catch((error) => {
      toast.update(id, { closeOnClick: true, autoClose: true, render: "Uh oh, something went wrong. Try again", type: "error", isLoading: false });
    });
  }
  catch (error) {
    console.log("error", error);
  }
}

const Profile = ({ imageLoader, onChangeImage, fileId }) => {

  const hiddenFileInput = useRef();

  return (
    <div className="row">
      <div className="col-md-12 avatar-control">
        <div className="form-input">
          <label>Profile Picture</label>
        </div>
        <div className="avatar large">
          <Image loader={imageLoader} layout="fill" className="avatar large" objectFit="cover" src={fileId} />
        </div>
        <input hidden ref={hiddenFileInput} type={"file"} accept="image/*" name={"avatar"} onChange={({ target }) => onChangeImage({ name: fileId, file: target.files[0] })} />
        <div onClick={() => hiddenFileInput.current.click()} className="avatar-control-box">
          <a data-name="next-step" className="button primary svg left">
            <svg viewBox="0 0 452 533" className="left" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M117.36 221.64L180.079 207.081V363.321C180.079 371.719 186.798 378.442 195.2 378.442H257.36C265.758 378.442 272.481 371.723 272.481 363.321V207.081L335.2 221.64C353.68 226.12 367.68 205.96 357.598 189.718L244.478 10.518C242.24 6.59611 238.876 3.79921 234.958 2.11961C224.88 -1.80229 214.239 1.56102 209.196 9.95941L95.5164 189.159C84.8794 205.96 98.8797 226.12 117.36 221.639L117.36 221.64Z" fill="white" />
              <path d="M436 440.6H15.9999C7.60151 440.6 0.878906 447.319 0.878906 455.721V517.323C0.878906 525.721 7.59771 532.444 15.9999 532.444H436C444.398 532.444 451.121 525.725 451.121 517.323V455.721C451.121 447.319 444.398 440.6 436 440.6Z" fill="white" />
            </svg>
            <span>Upload Image</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile;