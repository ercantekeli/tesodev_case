import React, { useState, useEffect } from "react";
import { Button, Input, Layout } from "../components";
import "./NewRecord.css";
import { useAppContext } from "../context/AppContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

function NewRecord() {
  const { setAllData, allData } = useAppContext();
  // const handleInputChange = (index, value) => {
  //   const newRecordData = [...recordData];
  //   newRecordData[index] = value;
  //   setRecordData(newRecordData);
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      country: "",
      city: "",
      email: "",
      website: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(60, "Must be 60 characters or less")
        .min(4, "Must be 4 characters or more")
        .typeError("Please enter only letters"),
      country: Yup.string()
        .max(40, "Must be 40 characters or less")
        .min(2, "Must be 2 characters or more")
        .typeError("Please enter only letters"),
      city: Yup.string()
        .max(40, "Must be 40 characters or less")
        .min(2, "Must be 2 characters or more")
        .typeError("Please enter only letters"),
      email: Yup.string().email("Invalid email address"),
      website: Yup.string().url("Invalid website"),
    }),
    onSubmit: (values, { resetForm }) => {
      setAllData({ ...allData, data: [...allData.data, values] });
      resetForm();
      toast.success("New Record Added");
    },
  });

  useEffect(() => {
    if (formik.isSubmitting) {
      for (const err in formik.errors) {
        toast.error(formik.errors[err]);
      }
    }
  }, [formik.errors, formik.isSubmitting]);

  return (
    <Layout isNewLinkPage>
      <div className="new-record_container">
        <Input
          // value={recordData[1]}
          // onChange={(e) => handleInputChange(1, e.target.value)}
          label="Name Surname"
          name="name"
          value={formik.values.name}
          onChange={(e) => formik.setFieldValue("name", e.target.value)}
          placeholder="Enter name and surname"
          errorMessage={formik.touched.name && formik.errors.name}
        />
        <Input
          // value={recordData[6]}
          // onChange={(e) => handleInputChange(6, e.target.value)}
          label="Country"
          placeholder="Enter a country"
          name="country"
          value={formik.values.country}
          onChange={(e) => formik.setFieldValue("country", e.target.value)}
          errorMessage={formik.touched.country && formik.errors.country}
        />
        <Input
          // value={recordData[7]}
          // onChange={(e) => handleInputChange(7, e.target.value)}
          label="City"
          placeholder="Enter a city"
          name="city"
          value={formik.values.city}
          onChange={(e) => formik.setFieldValue("city", e.target.value)}
          errorMessage={formik.touched.city && formik.errors.city}
        />
        <Input
          // value={recordData[3]}
          // onChange={(e) => handleInputChange(3, e.target.value)}
          label="Email "
          placeholder="Enter a e-mail (abc@xyz.com)"
          name="email"
          value={formik.values.email}
          onChange={(e) => formik.setFieldValue("email", e.target.value)}
          errorMessage={formik.touched.email && formik.errors.email}
        />
        <Input
          // value={recordData[5]}
          // onChange={(e) => handleInputChange(5, e.target.value)}
          label="Website "
          placeholder="Enter a websitel (https://xyz.com)"
          name="website"
          value={formik.values.website}
          onChange={(e) => formik.setFieldValue("website", e.target.value)}
          errorMessage={formik.touched.website && formik.errors.website}
        />
        <div className="new-record_button">
          <Button buttonName="Add" onClick={formik.handleSubmit} />
        </div>
      </div>
    </Layout>
  );
}

export default NewRecord;
