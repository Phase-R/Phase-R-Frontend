import React from "react";
import Select from "react-select";

const CountryDropdown = () => {
  const countryOptions = [
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    // Add more countries as needed
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent", // Transparent background
      color: "#FFFFFF", // White text
      borderColor: "#FFFFFF", // White border
      borderRadius: "0.375rem", // Rounded border (6px, Tailwind default for 'rounded-md')
      borderWidth: "2px", // Solid border
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#FFFFFF", // White text
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#FFFFFF", // White dropdown indicator
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "grey", // Transparent background for dropdown
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#2D3748" : "transparent", // Darker shade when selected
      color: "#FFFFFF", // White text
      "&:hover": {
        backgroundColor: "#2D3748", // Darker grey on hover
      },
    }),
  };

  return (
    <div className="w-64">
      <Select
        options={countryOptions}
        styles={customStyles}
        placeholder="Select a country"
        className="text-white"
      />
    </div>
  );
};

export default CountryDropdown;
