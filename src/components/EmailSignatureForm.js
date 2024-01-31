import React, { useState } from "react";
import { Fade } from "react-reveal";
import GeneratedSignature from "./GeneratedSignature";
import logo from "../img/URGO-logo.jpg";

// // Import employee headshots
// const employeeHeadshots = {};
// const context = require.context(
//   "../img/employee_headshots",
//   false,
//   /\.(jpg|jpeg|png)$/
// );
// context.keys().forEach((key) => {
//   const fileName = key.replace("./", "");
//   employeeHeadshots[fileName] = context(key);
// });
function EmailSignatureForm() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null); //Dani change this back to null
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

  const searchForEmployeeImage = async (offset, retryCount = 0) => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appY8CxyBarWLloUl/tblA3FWH04lI1Owc7?offset=${offset}`,
        {
          headers: {
            Authorization:
              "Bearer patklFpRFTCD4TQ3D.d05abdf3abc73f8fd708795a8226e85c10a5c67857a115385f29ee88449b626e",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from Airtable");
      }

      const data = await response.json();
      const fileName =
        `${formData.firstName}${formData.lastName}.png`.toLowerCase(); // Convert to lowercase

      // Log all unique entries
      const uniqueEntries = new Set(
        data.records.map((record) =>
          record.fields.Attachments[0].filename.toLowerCase()
        )
      ); // Convert to lowercase
      console.log("Unique Entries:", Array.from(uniqueEntries));

      // Find the record with the matching filename in the Airtable API response
      const matchingRecord = data.records.find((record) => {
        const attachments = record.fields.Attachments;
        return (
          attachments &&
          attachments.length > 0 &&
          attachments[0].filename.toLowerCase() === fileName
        );
      });

      if (matchingRecord) {
        return matchingRecord.fields.Attachments[0].thumbnails.full.url;
      } else if (data.offset && retryCount < 2) {
        // If there are no matching records and there's more data, retry with the new offset
        return searchForEmployeeImage(data.offset, retryCount + 1);
      } else {
        // If no matching record is found and no more data is available, return null
        return null;
      }
    } catch (error) {
      console.error("Error fetching data from Airtable:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const offset = ""; // Start with an empty offset
      const employeeImage = await searchForEmployeeImage(offset);

      if (employeeImage) {
        setResults((prevResults) => (
          <GeneratedSignature
            fullName={`${formData.firstName} ${formData.lastName}`}
            jobTitle={formData.jobTitle}
            phoneNumber={formData.phoneNumber}
            emailAddress={formData.emailAddress}
            address={formData.address}
            employeeImage={employeeImage} // Pass the background image URL directly
          />
        ));

        setLoading(false);
      } else {
        // Handle the case where the image doesn't exist in the Airtable response
        setResults((prevResults) => (
          <GeneratedSignature
            fullName={`${formData.firstName} ${formData.lastName}`}
            jobTitle={formData.jobTitle}
            phoneNumber={formData.phoneNumber}
            emailAddress={formData.emailAddress}
            address={formData.address}
            employeeImage={null} // Pass null for the employee image
          />
        ));

        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data from Airtable:", error);
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    setLoading(true); // Set loading to true

    // Simulate a delay before resetting the form and stopping the loader
    setTimeout(() => {
      setResults(null);
      setCopied(false);
      setFormData({
        firstName: `${formData.firstName}`,
        lastName: `${formData.lastName}`,
        jobTitle: `${formData.jobTitle}`,
        phoneNumber: `${formData.phoneNumber}`,
        emailAddress: `${formData.emailAddress}`,
        color: "#D4DFD7",
      });
      setLoading(false); // Set loading back to false after the delay
    }, 1500); // Adjust the timeout duration as needed
  };

  const handleCopyToClipboard = () => {
    const content = document.getElementById("content");
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(content);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      // Attempt to copy the selected content
      const success = document.execCommand("copy");

      if (success) {
        console.log("Content copied to clipboard");
        // You may want to set a state variable or perform other actions here
      } else {
        console.error("Unable to copy content to clipboard");
        // Handle the case where copying fails
      }
    } catch (err) {
      console.error("Error copying content to clipboard:", err);
      // Handle any errors that may occur during copying
    }
  };

  return (
    <div className="container height-100vh">
      {loading ? (
        <section className="height-100vh width-100% position-relative flex justify-center items-center">
          <div className="loader">
            <div className="circle item0"></div>
            <div className="circle item1"></div>
            <div className="circle item2"></div>
          </div>
        </section>
      ) : results ? (
        <>
          <div className="grid gap-lg flex">
            <Fade top cascade>
              <div className="grid gap-md justify-center margin-y-0">
                <div className="col-12 margin-bottom-sm">
                  <div className="flex justify-between items-center padding-y-sm">
                    <img
                      src={logo}
                      alt=""
                      style={{
                        objectFit: "contain",
                        maxWidth: "168px",
                      }}
                      className="width-xxxl width-100%@md"
                    ></img>
                    <h1 className="margin-0 text-sm text-lg@md font-secondary ">
                      Email Signature Generator
                    </h1>
                  </div>
                </div>
              </div>

              <div className="grid gap-md flex margin-top-xl@md">
                <div className="col-12 col@md">
                  <Fade top cascade>
                    <div
                      className="tableContainer padding-lg padding-xl@md height-100%"
                      style={{
                        background: "#EFF9FB",
                        borderRadius: "30px",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          margin: "0 auto",
                          background: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        id="content"
                        className="highlightable padding-x-lg"
                      >
                        <p>{results}</p>
                      </div>
                    </div>
                  </Fade>
                </div>

                <div className="col-12 col@md">
                  <div
                    className="padding-lg padding-bottom-0 height-100%"
                    style={{
                      borderRadius: "30px",
                      background: "#EFF9FB",
                      color: "#003865",
                    }}
                  >
                    <h2 className="text-md font-secondary margin-bottom-md">
                      Instructions:
                    </h2>
                    <ul className="font-primary instructions">
                      <li className="text-sm text-base@md">
                        Click Copy to Clipboard
                      </li>
                      <li className="text-sm text-base@md">
                        Outlook &gt; Settings &gt; Signatures &gt; Edit
                      </li>
                      <li className="text-sm text-base@md">
                        Delete all the content and paste your email signature
                        &gt; Save
                      </li>
                      <li className="text-sm text-base@md">
                        You can rename the “Standard” email signature to Urgo
                        Medical
                      </li>
                      <li className="text-sm text-base@md">
                        Under “Choose Default Signature” Select your email
                        signature for “New Messages” and “Replies/Forward”
                      </li>
                      <li className="text-sm text-base@md">You're done!</li>
                    </ul>
                  </div>
                  <div className="text-center text-right@md">
                    <button
                      onClick={handleCopyToClipboard}
                      className="margin-top-md btn btn--primary padding-y-xs margin-right-sm"
                      id="highlightButton"
                    >
                      {copied ? "HTML Copied!" : "Copy to Clipboard"}
                    </button>
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
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-lg@md max-width-xl margin-auto">
            <div className="col-12 col@md margin-top-xl@md">
              <Fade left>
                <div className="grid margin-bottom-0 height-100% container flex justify-center items-center">
                  <div className="col-12 col@md radius-lg aspect-ratio-5:4@md">
                    <img
                      src={logo}
                      alt=""
                      style={{
                        objectFit: "contain",
                        maxWidth: "500px",
                      }}
                    ></img>
                  </div>
                </div>
              </Fade>
            </div>

            <div
              className="col-12 col@md margin-top-sm margin-top-xl@md padding-lg padding-md@md "
              style={{ backgroundColor: "#EFF9FB", borderRadius: "30px" }}
            >
              <Fade bottom>
                <h1 className="font-secondary text-md text-lg@md text-center">
                  Email Signature Generator
                </h1>
                <p className="text-center margin-top-xxs text-sm text-base@md">
                  Fill out the form below to create your signature
                </p>
              </Fade>

              <div
                id="emailsigform"
                className="margin-top-md padding-bottom-xs"
              >
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
                        type="email"
                        id="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
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
                        required
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
          </div>
        </>
      )}
    </div>
  );
}

export default EmailSignatureForm;
