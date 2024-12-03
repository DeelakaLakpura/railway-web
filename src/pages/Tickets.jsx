import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Ticket = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [generalFormData, setGeneralFormData] = useState({
    NIC: "",
    mobileNumber: "",
    from: "",
    to: "",
    date: "",
    journeyTime: "",
    returnTrip: false,
    returnDate: "",
    passengers: 1,
    class: "Second Class",
    price: 0,
    
  });

  const [warrantFormData, setWarrantFormData] = useState({
    warrantNumber: "",
    departmentCode: "",
    classType: "",
    issuingDate: "",
    travelDate: "",
    nic: "",
    title: "Mr.",
    firstName: "",
    lastName: "",
    gender: "",
    mobileNumber: "",
    fromStation: "",
    toStation: "",
    journeyDate: "",
    passengers: 1,
  });



  const handleTabSwitch = (tab) => setActiveTab(tab);

  const handleInputChange = (e, isGeneral) => {
    const { name, value, type, checked } = e.target;
    const setData = isGeneral ? setGeneralFormData : setWarrantFormData;
    const data = isGeneral ? generalFormData : warrantFormData;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const calculatePrice = () => {
    const basePrice = 300;
    let multiplier = 1;

    if (generalFormData.class === "First Class") multiplier = 3;
    else if (generalFormData.class === "Third Class") multiplier = 0.7;

    let totalPrice = basePrice * multiplier * generalFormData.passengers;
    if (generalFormData.returnTrip) totalPrice *= 2;
    return totalPrice;
  };
  const navigate = useNavigate();

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculatePrice();
    
    // Update the generalFormData locally before navigation
    const updatedFormData = {
      ...generalFormData,
      price: totalPrice,
      mobileNumber: "+94" + generalFormData.mobileNumber,
      from: generalFormData.from,
      to: generalFormData.to,
      date: generalFormData.date,
      journeyTime: generalFormData.journeyTime,
      returnTrip: generalFormData.returnTrip,
      returnDate: generalFormData.returnDate,
      passengers: generalFormData.passengers,
      class: generalFormData.class,
    };
  
    // Show the alert with updated totalPrice
    alert(`Booking Successful! Total Price: Rs.${totalPrice}`);
  
    // Navigate with the updated form data
    navigate("/payment", { state: { generalFormData: updatedFormData } });
  };
  
  const handleGeneralReset = () => {
    setGeneralFormData({
      NIC: "",
      mobileNumber: "",
      from: "",
      to: "",
      date: "",
      journeyTime: "",
      returnTrip: false,
      returnDate: "",
      passengers: 1,
      class: "Second Class",
      price: 0,
    });
  };

  const handleWarrantSubmit = (e) => {
    e.preventDefault();
    alert("Warrant Passenger Details Submitted Successfully!");
    console.log(warrantFormData);
  };

  const handleWarrantReset = () => {
    setWarrantFormData({
      warrantNumber: "",
      departmentCode: "",
      classType: "",
      issuingDate: "",
      travelDate: "",
      nic: "",
      title: "Mr.",
      firstName: "",
      lastName: "",
      gender: "",
      mobileNumber: "",
      fromStation: "",
      toStation: "",
      journeyDate: "",
      passengers: 1,
    });
  };

  return (
    
    <div >
       
      <header className="py-12 bg-gradient-to-br from-gray-800 to-gray-900 text-center shadow-lg relative">
        <h1 className="text-5xl font-extrabold tracking-wide text-white m-2"> Railway Booking System</h1>
        <p className="text-lg mt-3 max-w-2xl mx-auto opacity-90">
       
        </p>
      </header>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white mt-6  rounded-lg shadow-lg p-6">

        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 text-lg font-medium ${
              activeTab === "general"
                ? "text-white bg-green-600"
                : "text-green-600 border border-green-600"
            } rounded-l-lg`}
            onClick={() => handleTabSwitch("general")}
          >
            General Passenger
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium ${
              activeTab === "warrant"
                ? "text-white bg-green-600"
                : "text-green-600 border border-green-600"
            } rounded-r-lg`}
            onClick={() => handleTabSwitch("warrant")}
          >
            Warrant Passenger
          </button>
        </div>

  
        {activeTab === "general" && (
          <form
            onSubmit={handleGeneralSubmit}
            className="space-y-4 text-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="NIC" className="block text-sm font-medium">
                  NIC/Passport Number
                </label>
                <input
                  type="text"
                  name="NIC"
                  id="NIC"
                  value={generalFormData.NIC}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="block text-sm font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  value={generalFormData.mobileNumber}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="from" className="block text-sm font-medium">
                  From
                </label>
                <select
                  name="from"
                  id="from"
                  value={generalFormData.from}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="Ahangama">Ahangama</option>
                  <option value="Colombo Fort">Colombo Fort</option>
                  <option value="Kandy">Kandy</option>
                </select>
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-medium">
                  To
                </label>
                <select
                  name="to"
                  id="to"
                  value={generalFormData.to}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="Ambalangoda">Ambalangoda</option>
                  <option value="Galle">Galle</option>
                  <option value="Jaffna">Jaffna</option>
                </select>
              </div>
            </div>

            {/* Journey Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={generalFormData.date}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="journeyTime" className="block text-sm font-medium">
                  Journey Time
                </label>
                <input
                  type="time"
                  name="journeyTime"
                  id="journeyTime"
                  value={generalFormData.journeyTime}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4 items-center">
              <label htmlFor="returnTrip" className="text-sm font-medium">
                Return Trip
              </label>
              <input
                type="checkbox"
                name="returnTrip"
                id="returnTrip"
                checked={generalFormData.returnTrip}
                onChange={(e) => handleInputChange(e, true)}
                className="w-5 h-5 text-green-600 focus:ring-2 focus:ring-green-500"
              />
              {generalFormData.returnTrip && (
                <input
                  type="date"
                  name="returnDate"
                  value={generalFormData.returnDate}
                  onChange={(e) => handleInputChange(e, true)}
                  className="p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="passengers" className="block text-sm font-medium">
                  Passengers
                </label>
                <input
                  type="number"
                  name="passengers"
                  id="passengers"
                  value={generalFormData.passengers}
                  onChange={(e) => handleInputChange(e, true)}
                  min="1"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="class" className="block text-sm font-medium">
                  Class
                </label>
                <select
                  name="class"
                  id="class"
                  value={generalFormData.class}
                  onChange={(e) => handleInputChange(e, true)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="Second Class">Second Class</option>
                  <option value="First Class">First Class</option>
                  <option value="Third Class">Third Class</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleGeneralReset}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {/* Warrant Form */}
        {activeTab === "warrant" && (
          <form
            onSubmit={handleWarrantSubmit}
            className="space-y-4 text-gray-800"
          >
            {/* Form content for Warrant Passenger */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
               

            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleWarrantReset}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default Ticket;
