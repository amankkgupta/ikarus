import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const Upload = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${url}/upload`, formData);
      console.log("Response:", response.data);
      toast.success("Model uploaded successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error uploading model");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Upload Model</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          URL:
        </label>
        <input
          type="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Upload;
