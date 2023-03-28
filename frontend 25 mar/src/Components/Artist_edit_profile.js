import React from "react";
import { useState, useEffect } from "react";
import Artist_Navbar from "./Artist_Navbar";
import { Link } from "react-router-dom";
import "./css_new.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Artist_edit_profile() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pno, setPno] = useState("");
  const [emailid, setEmailid] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [language, setLanguage] = useState("");
  const [education, setEducation] = useState("");
  const [skils, setSkill] = useState("");
  const [category, setCategory] = useState("");
  const [experince, setExperience] = useState("");
  const [url, setUrl] = useState("");
  const [photo, setPhoto] = useState("");
  const [artistStoreData, setArtistStoreData] = useState("");
  const [levelOfPerformance, setlevelOfPerformance] = useState("");
  const [idProof, setIdProof] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [state, setState] = useState("");
  const [majorPerformance, setMajorPerformance] = useState("");
  const [completeData, setCompleteData] = useState("");
  const [artEducation, setArtEducation] = useState("");

  let navigate = useNavigate();

  var state_arr = new Array(
    "Andaman & Nicobar",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra & Nagar Haveli",
    "Daman & Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Pondicherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Uttar Pradesh",
    "Uttaranchal",
    "West Bengal"
  );

  let languageArray = [
    "Assamese",
    "Bengali",
    "Gujarati",
    "Kannada",
    "Kashmiri",

    "Maithili",
    "Malayalam",
    "Marathi",
    "Meitei",
    "Odia",
    "Punjabi",
    "Tamil",
    "Telugu",
    "Urdu",
  ];
  const notify = () =>
    toast("Edited succesfully", {
      position: toast.POSITION.TOP_CENTER,
    });

  const artistRegister = async (e) => {
    e.preventDefault();
    const artistData = {
      fname,
      lname,
      phoneno: pno,
      emailid,
      age,
      gender,
      caste,
      religion,
      height,
      weight,
      language,
      state,
      education,
      skills: skils,
      category,
      experince,
      url,
      photo,
      levelOfPerformance,
      idProof,
      youtubeLink,
      instagramLink,
      facebookLink,
      majorPerformance,
      artEducation,
    };

    const _id = localStorage.getItem("_id");
    let result = await fetch(
      `http://localhost:4000/api/users/register/${_id}`,
      {
        method: "PUT",
        body: JSON.stringify(artistData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    result = await result.json();
    const obj2 = {
      name: fname,
      lastname: lname,
      phoneno: pno,
    };
    let result2 = await fetch(`http://localhost:4000/api/user/${_id}`, {
      method: "PUT",
      body: JSON.stringify(obj2),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    result2 = await result2.json();
    console.log(result2);
    console.log(result);
    notify();
    setTimeout(() => {
      navigate("/Artist_Dashboard");
    }, 1000);
  };
  const _id = localStorage.getItem("_id");
  useEffect(() => {
    async function fetchData() {
      let artistRegisterData = await fetch(
        `http://localhost:4000/api/user/${_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      artistRegisterData = await artistRegisterData.json();
      setArtistStoreData(artistRegisterData.artist);
      setCompleteData(artistRegisterData);
      console.log(artistRegisterData.artist);
      console.log(artistRegisterData.name);
      console.log(artistRegisterData);
    }
    fetchData()
      .then((data) => {
        setFname(artistStoreData.fname);
        setLname(artistStoreData.lname);
        setPno(artistStoreData.phoneno);
        setEmailid(artistStoreData.emailid);
        setAge(artistStoreData.age);
        setGender(artistStoreData.gender);
        setCaste(artistStoreData.caste);
        setReligion(artistStoreData.religion);
        setHeight(artistStoreData.height);
        setWeight(artistStoreData.weight);
        setLanguage(artistStoreData.language);
        setEducation(artistStoreData.education);
        setSkill(artistStoreData.skils);
        setCategory(artistStoreData.category);
        setExperience(artistStoreData.experince);
        setUrl(artistStoreData.url);
        setYoutubeLink(artistStoreData.youtubeLink);
        setInstagramLink(artistStoreData.instagramLink);
        setFacebookLink(artistStoreData.facebookLink);
        setlevelOfPerformance(artistStoreData.levelOfPerformance);
        setState(artistStoreData.state);
        setMajorPerformance(artistStoreData.majorPerformance);
        setArtEducation(artistStoreData.artEducation);
      })
      .catch((err) => console.error(err));
  }, [emailid]);

  const popup_btn_open = () => {
    document.getElementById("open-popup-btn").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("active");
  };
  const popup_btn_dismiss = () => {
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
  };
  let uploadImage = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <nav
        className="navbar bg-light fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <div className="left-components">
            <Artist_Navbar className="nav_artist" />
            <a className="navbar-brand" href="/">
              <span className="text-danger text">
                {" "}
                <strong>ekala</strong>
              </span>
              kaar
            </a>
          </div>
          <div className="right-component">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search artist"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger btn-search "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* editUser */}
      <div
        className="mb-5"
        style={{ width: "60%", margin: "auto", marginTop: "75px" }}
      >
        <div className="col-md-12 ">
          <div className="section-header text-center pb-5 mt-5">
            <h2 className="shadow p-3 mb-5 bg-body rounded">
              <span className="text-danger">EDIT YOUR PROFILE</span>{" "}
            </h2>
          </div>
        </div>
        {/* photo */}
        <div className="mx-4">
          <img
            style={{ width: 145 }}
            className="rounded-circle"
            src="./assets/images/Linkb11.jpeg"
            alt
          />
          <div>
            <a href>
              <span style={{ fontWeight: "bolder" }} className="text-danger h4">
                Change profile photo
              </span>
            </a>
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile"
              onChange={uploadImage}
            />
            <label for="file">Choose a file</label>
          </div>
        </div>
        <form action="" onSubmit={artistRegister}>
          <div className="p-4 row">
            <div className="p-2 col-md-6">
              {/* first Name */}
              <div>
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  name="firstname"
                  id="validationCustom01"
                  required
                />
              </div>
              {/* Phonenumber */}
              <div>
                <label htmlFor="validationCustom01" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={pno}
                  onChange={(e) => setPno(e.target.value)}
                  name="firstname"
                  id="validationCustom01"
                  // required
                />
              </div>
              {/* Age */}
              <div>
                <label htmlFor="validationCustom02" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  name="age"
                  id="validationCustom02"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              {/* Caste */}
              <div>
                <label htmlFor="validationCustom04" className="form-label">
                  Caste
                </label>
                <select
                  className="form-select"
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                  id="validationCustom04"
                  name="caste"
                  // required
                >
                  <option selected value>
                    Choose...
                  </option>
                  <option value="OBC">OBC</option>
                  <option value="General">General</option>
                  <option value="ST/SC">ST/SC</option>
                </select>
                <div className="invalid-feedback">Please select your Caste</div>
              </div>
              <div>
                <label htmlFor="validationCustom04" className="form-label">
                  Id Proof
                </label>
                <select
                  className="form-select"
                  value={idProof}
                  onChange={(e) => setIdProof(e.target.value)}
                  id="validationCustom04"
                  name="Idproof"
                  // required
                >
                  <option value>Choose...</option>
                  <option value="pancard">Pan card</option>
                  <option value="voter card">Voter Card</option>
                  <option value="aadhar card">Aadhar Card</option>
                  <option value="Driving Licence">Driving Licence</option>
                </select>
                <div className="invalid-feedback">Please select your Caste</div>
              </div>
              {/* Height */}
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Height
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  name="height"
                  id="validationCustom05"
                  // required
                />
                <div className="invalid-feedback">
                  Please provide Your height
                </div>
              </div>
              {/* Language */}
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Language
                </label>
                {/* <input
                  type="text"
                  className="form-control"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  name="language"
                  id="validationCustom05"
                  required
                /> */}
                <select
                  className="form-control"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  name="language"
                  id="validationCustom05"
                  required
                >
                  {languageArray.map((el) => {
                    return <option>{el}</option>;
                  })}
                </select>
                <div className="invalid-feedback">
                  Please provide your Education
                </div>
              </div>

              {/* Education in art */}
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Education in art
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Educationart"
                  value={artEducation}
                  onChange={(e) => setArtEducation(e.target.value)}
                  id="validationCustom05"
                  required
                />
                <div className="invalid-feedback">
                  Please provide your Education in art
                </div>
              </div>
              {/* Skills */}
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Skills
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={skils}
                  onChange={(e) => setSkill(e.target.value)}
                  name="skils"
                  id="validationCustom05"
                  required
                />
                <div className="invalid-feedback">
                  Please provide your Skills
                </div>
              </div>
              <div>
                <label htmlFor="validationCustom04" className="form-label">
                  Level of Performance
                </label>
                <select
                  className="form-select"
                  value={levelOfPerformance}
                  onChange={(e) => setlevelOfPerformance(e.target.value)}
                  id="validationCustom04"
                  name="Idproof"
                  required
                >
                  <option value="">Choose...</option>
                  <option value="local">Local</option>
                  <option value="district">District</option>
                  <option value="state">State</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                </select>
                <div className="invalid-feedback">Please select your Caste</div>
              </div>
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Youtube Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                  name="youtube"
                  id="validationCustom05"
                  // required
                />
                <div>
                  <label htmlFor="validationCustom05" className="form-label">
                    Instagram Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={instagramLink}
                    onChange={(e) => setInstagramLink(e.target.value)}
                    name="instagram"
                    id="validationCustom05"
                    // required
                  />
                  <div className="invalid-feedback">
                    Please provide your Experience.
                  </div>
                </div>
                <div className="invalid-feedback">
                  Please provide your Experience.
                </div>
              </div>
            </div>
            <div className="p-2 col-md-6">
              {/* lastName */}
              <div>
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  name="lastname"
                  id="validationCustom02"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              {/* Email - id */}
              <div>
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  Email
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={localStorage.getItem("email")}
                    name="email"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    disabled
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your valid email id
                  </div>
                </div>
              </div>
              {/* Gender   */}
              <div>
                <label htmlFor="validationCustom04" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="validationCustom04"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option selected disabled value>
                    Choose...
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer Not TO Say">Prefer not to say</option>
                </select>
                <div className="invalid-feedback">Please select a Gender.</div>
              </div>

              {/* Religion */}
              <div>
                <label htmlFor="validationCustom03" className="form-label">
                  Religion
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                  name="religion"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              {/* Weight */}
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Weight
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  name="weight"
                  id="validationCustom05"
                  // required
                />
                <div className="invalid-feedback">
                  Please provide your Weight.
                </div>
              </div>
              {/* Education */}
              <div>
                <label htmlFor="validationCustom03" className="form-label">
                  Education
                </label>
                <select
                  className="form-select"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  id="validationCustom04"
                  name="Idproof"
                  required
                >
                  <option selected value>
                    Choose...
                  </option>
                  <option value="below 5">Below class V</option>
                  <option value="5 to 10">class V - X</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="graduate">Graduate</option>
                  <option value={"post graduate"}>Post Graduate</option>
                </select>

                <div className="invalid-feedback">
                  Please provide your Education
                </div>
              </div>

              <div>
                <label htmlFor="validationCustom03" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  id="validationCustom04"
                  name="Idproof"
                  required
                >
                  <option value="">Choose...</option>
                  {state_arr.map((el) => {
                    return <option>{el}</option>;
                  })}
                </select>

                <div className="invalid-feedback">
                  Please provide your Education
                </div>
              </div>
              {/** Category */}

              <div>
                <label htmlFor="validationCustom03" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  name="religion"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid category.
                </div>
              </div>
              {/* Experience */}
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Experience
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={experince}
                  onChange={(e) => setExperience(e.target.value)}
                  name="experience"
                  id="validationCustom05"
                  required
                />
                <div className="invalid-feedback">
                  Please provide your Experience.
                </div>
              </div>

              {/* Major/Distringusihed perfomrance */}
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Major/Distringusihed perfomrance
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="major"
                  id="validationCustom05"
                  value={majorPerformance}
                  onChange={(e) => setMajorPerformance(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Please provide your Major Performance
                </div>
              </div>

              {/* Perforance video/photograph */}
              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Perfomrance video/photograph Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="video/photo link"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  id="validationCustom05"
                  required
                />
                <div className="invalid-feedback">
                  Please provide your Performance Link
                </div>
              </div>

              <div>
                <label htmlFor="validationCustom05" className="form-label">
                  Facebook Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={facebookLink}
                  onChange={(e) => setFacebookLink(e.target.value)}
                  name="experience"
                  id="validationCustom05"
                  // required
                />
                <div className="invalid-feedback">
                  Please provide your Link.
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="px-4"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="mb-2">
                Url for any video link (Social Media Link such as Youtube /
                Insta / Facebook ){" "}
              </span>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ width: "50%" }}
              />
            </div> */}
          <div>
            <label className="mb-2 mt-4" htmlFor="exampleFormControlFile1">
              Upload Your Resume
            </label>
            <br />
            <input
              type="file"
              style={{ width: "50%" }}
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>

          <ToastContainer />
          <div className="center mt-2 ">
            <button
              className="btn btn-danger btn-new  me-md-2"
              id="open-popup-btn"
              style={{ marginTop: "1.5rem" }}
              //onClick={popup_btn_open}
            >
              Submit
            </button>
          </div>
          {/* <input type ='submit' id="open-popup-btn" onClick={popup_btn_open} /> */}
        </form>
      </div>
    </div>
  );
}
