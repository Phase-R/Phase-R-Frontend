import React from "react";
import Select from "react-select";

const CountryDropdown = () => {
  const countryOptions = [
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "india", label: "India" },
    { value: "australia", label: "Australia" },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent",
      color: "#FFFFFF",
      borderColor: "#FFFFFF",
      borderRadius: "0.375rem",
      borderWidth: "2px",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#FFFFFF",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#FFFFFF",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "grey",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#2D3748" : "transparent",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#2D3748",
      },
    }),
    input: (provided: any) => ({
      ...provided,
      color: "#FFFFFF",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#FFFFFF",
    }),
  };

  return (
    <div className="w-64">
      <Select
        options={countryOptions}
        styles={customStyles}
        placeholder="Select a country"
        className="text-white-900"
      />
    </div>
  );
};

export default CountryDropdown;
