// components/ScoreUpdateForm.js
"use client";
import { useState, useEffect } from "react";

export default function ScoreUpdateForm({ isFormVisible, setIsFormVisible, currentUser, updateUserData }) {
  const [formData, setFormData] = useState({
    rank: "",
    percentile: "",
    currentScore: ""
  });
  
  // Initialize form with current user data when component mounts
  useEffect(() => {
    if (currentUser) {
      setFormData({
        rank: currentUser.rank || "",
        percentile: currentUser.percentile || "",
        currentScore: currentUser.correctAnswers || ""
      });
    }
  }, [currentUser]);

  const [errors, setErrors] = useState({
    rank: false,
    percentile: false,
    currentScore: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      rank: !formData.rank,
      percentile: !formData.percentile,
      currentScore: !formData.currentScore
    };
    
    setErrors(newErrors);
    
    // If any errors, don't submit
    if (Object.values(newErrors).some(error => error)) {
      return;
    }
    
    // Update the user's data in parent component
    updateUserData({
      rank: parseInt(formData.rank),
      percentile: parseInt(formData.percentile),
      correctAnswers: parseInt(formData.currentScore)
    });
    
    // Close the form modal
    setIsFormVisible(false);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Update scores</h2>
        <div className="bg-orange-500 text-white p-1 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
            />
          </svg>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <span>1</span>
            </div>
            <label htmlFor="rank" className="block text-sm font-medium">
              Update your Rank
            </label>
          </div>
          <input
            type="number"
            id="rank"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
            className={`border rounded w-full py-2 px-3 ${errors.rank ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.rank && (
            <p className="text-red-500 text-xs mt-1">required | should be number</p>
          )}
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <span>2</span>
            </div>
            <label htmlFor="percentile" className="block text-sm font-medium">
              Update your Percentile
            </label>
          </div>
          <input
            type="number"
            id="percentile"
            name="percentile"
            value={formData.percentile}
            onChange={handleChange}
            className={`border rounded w-full py-2 px-3 ${errors.percentile ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.percentile && (
            <p className="text-red-500 text-xs mt-1">required</p>
          )}
        </div>
        
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <span>3</span>
            </div>
            <label htmlFor="currentScore" className="block text-sm font-medium">
              Update your Current Score (out of 15)
            </label>
          </div>
          <input
            type="number"
            id="currentScore"
            name="currentScore"
            value={formData.currentScore}
            onChange={handleChange}
            className={`border rounded w-full py-2 px-3 ${errors.currentScore ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.currentScore && (
            <p className="text-red-500 text-xs mt-1">required</p>
          )}
        </div>
        
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 rounded"
          >
            cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded flex items-center"
          >
            save
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}