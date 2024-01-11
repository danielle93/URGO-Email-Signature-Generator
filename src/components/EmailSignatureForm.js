import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import GeneratedSignature from "./GeneratedSignature";
import CopyToClipboard from "react-copy-to-clipboard";
import ReactDOMServer from "react-dom/server";
import VideoComponent from "./VideoComponent";
import loadinganimation from "../video/Habitat-Logo-Animation-V2.mp4";

// Import all images from the "../img/culture" folder
const contextC = require.context("../img/culture", false, /\.(jpg|jpeg|png)$/);
const cultureImages = {};
contextC.keys().forEach((key) => {
  const fileName = key.replace("./", "");
  cultureImages[fileName] = contextC(key);
});
let usedImages = [];

// Function to get two unique random images from the array
const getRandomCultureImages = () => {
  let availableImages = Object.values(cultureImages);

  // Remove images that have already been used
  availableImages = availableImages.filter(
    (image) => !usedImages.includes(image)
  );

  // If all images have been used, reset the used images array
  if (availableImages.length < 2) {
    usedImages = [...Object.values(cultureImages)];
    availableImages = [...Object.values(cultureImages)];
  }

  // Select two random images from the available images
  const randomIndex1 = Math.floor(Math.random() * availableImages.length);
  const image1 = availableImages[randomIndex1];
  availableImages.splice(randomIndex1, 1);

  const randomIndex2 = Math.floor(Math.random() * availableImages.length);
  const image2 = availableImages[randomIndex2];

  // Mark the selected images as used
  usedImages.push(image1, image2);
  return [image1, image2];
};

// Import employee headshots
const employeeHeadshots = {};
const context = require.context(
  "../img/employee_headshots",
  false,
  /\.(jpg|jpeg|png)$/
);
context.keys().forEach((key) => {
  const fileName = key.replace("./", "");
  employeeHeadshots[fileName] = context(key);
});
function EmailSignatureForm() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    color: "#D4DFD7",
  });
  const [cultureImages, setCultureImages] = useState([]);

  useEffect(() => {
    // Call getRandomCultureImages once when the component mounts
    setCultureImages(getRandomCultureImages());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is the phone number field
    if (name === "phoneNumber") {
      // Remove non-numeric characters
      const numericPhoneNumber = value.replace(/\D/g, "");

      // Enforce the character limit of 10
      const truncatedPhoneNumber = numericPhoneNumber.slice(0, 10);

      // Format the truncated phone number as ###.###.###
      const formattedPhoneNumber = truncatedPhoneNumber.replace(
        /(\d{3})(\d{3})(\d{4})/,
        "$1.$2.$3"
      );

      setFormData({
        ...formData,
        [name]: formattedPhoneNumber,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleColorClick = (color) => {
    setFormData({
      ...formData,
      color,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Construct the filename using the first name and last name
    const fileName = `${formData.firstName
      .toLowerCase()
      .replace(/\s/g, "")}${formData.lastName
      .toLowerCase()
      .replace(/\s/g, "")}H.jpg`;
    // alert(fileName);
    // Check if the image exists in the employee_headshots folder
    if (fileName) {
      import(`../img/employee_headshots/${fileName}`)
        .then((employeeImage) => {
          setTimeout(() => {
            setResults(
              <GeneratedSignature
                fullName={`${formData.firstName} ${formData.lastName}`}
                jobTitle={formData.jobTitle}
                phoneNumber={formData.phoneNumber}
                emailAddress={formData.emailAddress}
                address={formData.address}
                color={formData.color} // Pass the color prop
                employeeImage={employeeImage.default} // Pass the background image
              />
            );
            setLoading(false);
          }, 4000);
        })
        .catch(() => {
          // Handle the case where the image doesn't exist
          setLoading(false);
          setResults(null);
          alert("Employee headshot not found for this name.");
        });
    }
  };

  const handleGoBack = () => {
    setLoading(true); // Set loading to true

    // Simulate a delay before resetting the form and stopping the loader
    setTimeout(() => {
      setResults(null);
      setCopied(false);
      setFormData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        phoneNumber: "",
        color: "#D4DFD7",
      });
      setLoading(false); // Set loading back to false after the delay
    }, 4000); // Adjust the timeout duration as needed
  };

  const handleCopyToClipboard = () => {
    const htmlContent = ReactDOMServer.renderToStaticMarkup(results);
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
  };

  return (
    <div className="container max-width-xl">
      <div className="grid gap-lg justify-center">
        {loading ? (
          <video className="loader" autoPlay loop muted>
            <source src={loadinganimation} type="video/mp4" />
          </video>
        ) : results ? (
          <>
            <Fade top cascade>
              <div className="grid gap-md justify-center margin-y-0">
                <div className="col-12 margin-bottom-sm margin-top-lg">
                  <h1 className="margin-0 text-lg font-secondary ">
                    Email Signature Generator
                  </h1>
                </div>
              </div>

              <div className="grid gap-md justify-center">
                <div className="col">
                  <Fade top cascade>
                    <div
                      className="tableContainer padding-lg radius-lg"
                      style={{
                        background: "white",
                      }}
                    >
                      <div
                        style={{
                          width: "fit-content",
                          margin: "0 auto",
                        }}
                      >
                        <p>{results}</p>
                      </div>
                    </div>

                    <div>
                      <div className="buttons-component sig-marquee">
                        <button className="btn button--habitat width-100%">
                          <span>Nice Headshot</span>
                          <div className="marquee" aria-hidden="true">
                            <div className="marquee__inner">
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                              <span>Nice Headshot</span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Fade>
                </div>

                <div className="col">
                  <div
                    className="padding-lg radius-lg"
                    style={{ background: "#E9E3DD", color: "#070F0B" }}
                  >
                    <h2 className="text-md font-secondary margin-bottom-xs">
                      Instructions:
                    </h2>
                    <ul className="font-primary instructions">
                      <li className="">Click Copy to Clipboard</li>
                      <li className="">
                        Outlook &gt; Settings &gt; Signatures &gt; Edit
                      </li>
                      <li className="">
                        Delete all the content and paste your email signature
                        &gt; Save
                      </li>
                      <li className="">
                        You can rename the “Standard” email signature to Habitat
                      </li>
                      <li className="">
                        Under “Choose Default Signature” Select your email
                        signature for “New Messages” and “Replies/Forward”
                      </li>
                      <li className="">You're done!</li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <CopyToClipboard
                      text={results}
                      onCopy={handleCopyToClipboard}
                    >
                      <button className="margin-top-md btn btn--primary padding-y-xs margin-right-sm">
                        {copied ? "HTML Copied!" : "Copy to Clipboard"}
                      </button>
                    </CopyToClipboard>
                    <Fade top cascade>
                      <button
                        className="margin-top-md btn btn--primary padding-y-xs"
                        onClick={handleGoBack}
                      >
                        Back
                      </button>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </>
        ) : (
          <>
            <div className="col margin-top-lg">
              <Fade left>
                <div className="grid gap-md margin-bottom-0">
                  <div
                    className="col radius-lg  aspect-ratio-5:4"
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <VideoComponent />
                  </div>
                </div>
              </Fade>

              <Fade left cascade>
                <div className="grid gap-md">
                  {cultureImages.map((image, index) => {
                    console.log(image); // Log the image path
                    return (
                      <div
                        key={index}
                        className="col radius-lg"
                        style={{
                          backgroundImage: `url(${image.default})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "250px",
                        }}
                      ></div>
                    );
                  })}
                </div>
              </Fade>
            </div>

            <div className="col margin-top-lg">
              <Fade bottom>
                <h1 className="font-secondary text-lg ">
                  Email Signature Generator
                </h1>
              </Fade>

              <div id="emailsigform" className="margin-top-md">
                <Fade bottom cascade>
                  <form onSubmit={handleSubmit} className="">
                    <div>
                      <label className="block " htmlFor="first-name">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block" htmlFor="last-name">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block" htmlFor="job-title">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="job-title"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block" htmlFor="phone-number">
                        Your Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone-number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block">
                        Select your background color:
                      </label>
                      <div className="grid gap-sm">
                        <Fade bottom cascade>
                          <div className="col">
                            <div
                              className={`radio-container bg-mint radius-md padding-left-lg padding-right-sm padding-y-xs margin-y-sm  ${
                                formData.color === "#D4DFD7" ? "selected" : ""
                              }`}
                              onClick={() => handleColorClick("#D4DFD7")}
                            >
                              <input
                                type="radio"
                                id="mint"
                                name="color"
                                value="Mint"
                                checked={formData.color === "#D4DFD7"}
                                onChange={handleChange}
                              />
                              <label htmlFor="mint">Mint</label>
                              <span className="agency-radio"></span>
                            </div>

                            <div
                              className={`radio-container bg-coral radius-md padding-left-lg padding-right-sm padding-y-xs margin-y-sm  ${
                                formData.color === "#F3B5AC" ? "selected" : ""
                              }`}
                              onClick={() => handleColorClick("#F3B5AC")}
                            >
                              <input
                                type="radio"
                                id="coral"
                                name="color"
                                value="Coral"
                                checked={formData.color === "#F3B5AC"}
                                onChange={handleChange}
                              />
                              <label htmlFor="coral">Coral</label>
                              <span className="agency-radio"></span>
                            </div>

                            <div
                              className={`radio-container bg-apricot radius-md padding-left-lg padding-right-sm padding-y-xs margin-y-sm  ${
                                formData.color === "#EFCEAC" ? "selected" : ""
                              }`}
                              onClick={() => handleColorClick("#EFCEAC")}
                            >
                              <input
                                type="radio"
                                id="apricot"
                                name="color"
                                value="Apricot"
                                checked={formData.color === "#EFCEAC"}
                                onChange={handleChange}
                              />
                              <label htmlFor="apricot">Apricot</label>
                              <span className="agency-radio"></span>
                            </div>
                          </div>
                          <div className="col">
                            <div
                              className={`radio-container bg-mist radius-md padding-left-lg padding-right-sm padding-y-xs margin-y-sm  ${
                                formData.color === "#D3DCE4" ? "selected" : ""
                              }`}
                              onClick={() => handleColorClick("#D3DCE4")}
                            >
                              <input
                                type="radio"
                                id="mist"
                                name="color"
                                value="Mist"
                                checked={formData.color === "#D3DCE4"}
                                onChange={handleChange}
                              />
                              <label htmlFor="mist">Mist</label>
                              <span className="agency-radio"></span>
                            </div>

                            <div
                              className={`radio-container bg-lavender radius-md padding-left-lg padding-right-sm padding-y-xs margin-y-sm  ${
                                formData.color === "#BCA1D3" ? "selected" : ""
                              }`}
                              onClick={() => handleColorClick("#BCA1D3")}
                            >
                              <input
                                type="radio"
                                id="lavender"
                                name="color"
                                value="Lavender"
                                checked={formData.color === "#BCA1D3"}
                                onChange={handleChange}
                              />
                              <label htmlFor="lavender">Lavender</label>
                              <span className="agency-radio"></span>
                            </div>

                            <div
                              className={`radio-container bg-accent radius-md padding-left-lg padding-right-sm padding-y-xs margin-y-sm  ${
                                formData.color === "#D0C4B7" ? "selected" : ""
                              }`}
                              onClick={() => handleColorClick("#D0C4B7")}
                            >
                              <input
                                type="radio"
                                id="tan"
                                name="color"
                                value="Tan"
                                checked={formData.color === "#D0C4B7"}
                                onChange={handleChange}
                              />
                              <label htmlFor="tan">Tan</label>
                              <span className="agency-radio"></span>
                            </div>
                          </div>
                        </Fade>
                      </div>
                      <button
                        className="btn btn--primary padding-y-xs"
                        type="submit"
                      >
                        Generate Signature
                      </button>
                    </div>
                  </form>
                </Fade>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EmailSignatureForm;
