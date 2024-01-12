import React from "react";

function GeneratedSignature({
  fullName,
  jobTitle,
  phoneNumber,
  emailAddress,
  address,
  employeeImage,
  color,
}) {
  const conditionalStyles = `
    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {width: 430px !important;}
        td {width: 110px !important;}
      </style>
    <![endif]-->
  `;
  return (
    <table
      className="generatedSignature"
      cellSpacing="0"
      cellPadding="0"
      border="0"
      width="430"
      style={{ height: "10px" }}
    >
      {/* <div dangerouslySetInnerHTML={{ __html: conditionalStyles }} /> */}
      <tbody>
        <tr>
          <td width="50" rowSpan="10">
            <p style={{ textAlign: "center" }}>
              <img
                width="110"
                className="logo"
                src="https://staging-agencyhabitat23-staging.kinsta.cloud/wp-content/uploads/2024/01/Abby-Cantwell_Dec2022_Cropped.png"
                // src={employeeImage}
                alt="Logo 1"
              />
            </p>

            <p>
              <img
                width="105"
                className="logo"
                src="https://staging-agencyhabitat23-staging.kinsta.cloud/wp-content/uploads/2024/01/URGO-logo-email_.png"
                alt="Logo 2"
              />
            </p>
          </td>
          <td
            width="15"
            rowSpan="10"
            style={{ borderRight: "1px solid #003865" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </td>

          <td width="15" rowSpan="10">
            &nbsp;&nbsp;&nbsp;&nbsp;
          </td>
        </tr>

        <tr>
          <td
            width="100%"
            style={{
              fontWeight: "bold",
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "22px",
            }}
          >
            {fullName}
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "16px",
              fontWeight: "normal",
            }}
          >
            {jobTitle}
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Urgo Medical North America
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "8px",
              fontWeight: "normal",
            }}
          >
            &nbsp;
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href="tel:0000000000"
            >
              {phoneNumber}
            </a>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href={`mailto:${emailAddress}`}
            >
              {emailAddress}
            </a>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            100 <span style={{ display: "none" }}> -</span>Lexington
            <span style={{ display: "none" }}> -</span>Street, Suite 400
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Fort <span style={{ display: "none" }}> -</span>Worth,
            <span style={{ display: "none" }}> -</span>TX 76102
            <span style={{ display: "none" }}> -</span>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href="https://urgomedical.us"
            >
              urgomedical.us
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GeneratedSignature;
