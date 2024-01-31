import React, { useState, useEffect } from "react";
const Airtable = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async (offset = "", retryCount = 0) => {
      try {
        // Generate a timestamp to make each request unique
        const timestamp = new Date().getTime();

        const response = await fetch(
          `https://api.airtable.com/v0/appY8CxyBarWLloUl/tblA3FWH04lI1Owc7?offset=${offset}&timestamp=${timestamp}`,
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
        const newImages = data.records.map((record) => {
          const attachments = record.fields.Attachments;
          if (attachments && attachments.length > 0) {
            return attachments[0].thumbnails.full.url;
          }
          return null;
        });

        // Use the functional form of setImages to ensure the correct state value
        setImages((prevImages) => [...new Set([...prevImages, ...newImages])]);

        // If there are more records, make a recursive call with the new offset
        if (data.offset) {
          fetchData(data.offset, retryCount);
        } else if (retryCount < 2) {
          // Run a third time if there are no more records and we haven't retried twice
          fetchData("", retryCount + 1);
        } else {
          // Display alert with the total number of unique records
          alert(`Found ${images.length} unique records`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      <h1>Airtable Images</h1>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Employee Headshot ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Airtable;
