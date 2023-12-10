import React, { useState, useEffect } from "react";
import { Button, Input, Layout } from "../components";
import "./NewRecord.css";
import { useAppContext } from "../context/AppContext";

function NewRecord() {
  const { setAllData, allData } = useAppContext();
  const [recordData, setRecordData] = useState([]);

  useEffect(() => {
    console.log("recordData", recordData);
  }, [recordData]);
  useEffect(() => {
    console.log("allData", allData);
  }, [allData]);

  const handleInputChange = (index, value) => {
    const newRecordData = [...recordData];
    newRecordData[index] = value;
    setRecordData(newRecordData);
  };

  return (
    <Layout>
      <div className="new-record_container">
        <Input
          value={recordData[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          label="Name Surname"
          placeholder="Enter name and surname"
        />
        <Input
          value={recordData[6]}
          onChange={(e) => handleInputChange(6, e.target.value)}
          label="Country"
          placeholder="Enter a country"
        />
        <Input
          value={recordData[7]}
          onChange={(e) => handleInputChange(7, e.target.value)}
          label="City"
          placeholder="Enter a city"
        />
        <Input
          value={recordData[3]}
          onChange={(e) => handleInputChange(3, e.target.value)}
          label="Email "
          placeholder="Enter a e-mail (abc@xyz.com)"
        />
        <Input
          value={recordData[5]}
          onChange={(e) => handleInputChange(5, e.target.value)}
          label="Website "
          placeholder="Enter a websitel (https://xyz.com)"
        />
        <div className="new-record_button">
          <Button
            buttonName="Add"
            onClick={() =>
              setAllData({ ...allData, data: [...allData.data, recordData] })
            }
          />
        </div>
      </div>
    </Layout>
  );
}

export default NewRecord;
