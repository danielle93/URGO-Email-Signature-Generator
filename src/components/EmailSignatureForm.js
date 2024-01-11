import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import GeneratedSignature from "./GeneratedSignature";
import CopyToClipboard from "react-copy-to-clipboard";
import ReactDOMServer from "react-dom/server";
import loadinganimation from "../video/Habitat-Logo-Animation-V2.mp4";
import logo from "../img/URGO-logo.jpg";

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
    emailAddress: "",
    color: "#D4DFD7",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is the phone number field
    if (name === "phoneNumber") {
      // Remove non-numeric characters
      const numericPhoneNumber = value.replace(/\D/g, "");

      // Enforce the character limit of 10
      const truncatedPhoneNumber = numericPhoneNumber.slice(0, 10);

      // Format the truncated phone number as (###) ###-####
      const formattedPhoneNumber = truncatedPhoneNumber.replace(
        /(\d{3})(\d{3})(\d{4})/,
        "($1) $2-$3"
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
                employeeImage={employeeImage.default} // Pass the background image
              />
            );
            setLoading(false);
          }, 1500);
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
        emailAddress: "",
        color: "#D4DFD7",
      });
      setLoading(false); // Set loading back to false after the delay
    }, 1500); // Adjust the timeout duration as needed
  };

  const handleCopyToClipboard = () => {
    const htmlContent = ReactDOMServer.renderToStaticMarkup(results);
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
  };

  return (
    <div className="container max-width-lg height-100vh">
      <div className="grid gap-lg flex items-center justify-center height-100%">
        {loading ? (
          <section class="height-100vh width-100% position-relative flex justify-center items-center">
            <div class="loader">
              <div class="circle item0"></div>
              <div class="circle item1"></div>
              <div class="circle item2"></div>
            </div>
          </section>
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
            <div className="col margin-top-lg ">
              <Fade left>
                <div className="grid margin-bottom-0 height-100% flex justify-center items-center">
                  <div className="col radius-lg  aspect-ratio-5:4 ">
                    <img
                      src={logo}
                      alt=""
                      style={{
                        objectFit: "contain",
                        maxWidth: "450px",
                      }}
                    ></img>
                  </div>
                </div>
              </Fade>
            </div>

            <div
              className="col margin-top-lg padding-md "
              style={{ backgroundColor: "#EFF9FB", borderRadius: "30px" }}
            >
              <Fade bottom>
                <h1 className="font-secondary text-lg text-center">
                  Email Signature Generator
                </h1>
                <p className="text-center margin-top-xxs">
                  Fill out the form below to create your signature
                </p>
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
                      <label className="block" htmlFor="email">
                        Your Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block" htmlFor="phone-number">
                        Your Phone Number
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
                      <button
                        className="btn btn--primary padding-y-xs margin-top-sm"
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
