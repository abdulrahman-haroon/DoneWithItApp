import React from "react";
import { useFormikContext } from "formik";
import * as Yup from "yup";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import PickerItem from "../PickerItem";

function AppFormPicker({ items,numOfColumns,PickerItemComponent, width,name, placeholder }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
        numOfColumns={numOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage name={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
