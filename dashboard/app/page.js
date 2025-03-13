"use client";
import { useState } from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import ScoreUpdateForm from "../components/ScoreUpdateForm";

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  const [currentUser, setCurrentUser] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: 10,
    totalQuestions: 15,
    syllabus: [
      { name: "HTML Tools, Forms, History", score: 80 },
      { name: "Tags & References in HTML", score: 60 },
      { name: "Tables & References in HTML", score: 24 },
      { name: "Tables & CSS Basics", score: 96 },
    ],
  });

  // Sample data for the comparison graph
  const comparisonData = [
    { percentile: 0, Students: 10 },
    { percentile: 10, Students: 20 },
    { percentile: 20, Students: 30 },
    { percentile: 30, Students: 45 },
    { percentile: 40, Students: 60 },
    { percentile: 50, Students: 95 },
    { percentile: 60, Students: 80 },
    { percentile: 70, Students: 65 },
    { percentile: 80, Students: 45 },
    { percentile: 90, Students: 30 },
    { percentile: 100, Students: 20 },
  ];

  // function for updating user data
  const updateUserData = (newData) => {
    setCurrentUser((prev) => ({
      ...prev,
      ...newData
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-md md:min-h-screen">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0h.25M6 16.5h.25"
                  />
                </svg>
              </span>
              <span className="font-semibold text-gray-800">Dashboard</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center p-2 rounded-lg bg-blue-50 text-blue-700 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <span>Skill Test</span>
            </div>
            <div className="flex items-center p-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <span>Internship</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Skill Test
          </h1>

          {/* HTML Test Card */}
          <div className="bg-white p-6 rounded-lg mb-8 border-gray-300 border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="mr-4 bg-orange-500 text-white p-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-xl">
                    Hyper Text Markup Language
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>
              </div>
              <button
                onClick={toggleForm}
                className="bg-indigo-700 text-white py-2 px-6 rounded hover:bg-indigo-800 transition-colors"
              >
                Update
              </button>
            </div>
          </div>

          {isFormVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-5 rounded border-gray-300 border relative">
                <ScoreUpdateForm
                  isFormVisible={isFormVisible}
                  setIsFormVisible={setIsFormVisible}
                  currentUser={currentUser}
                  updateUserData={updateUserData}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column */}
            <div className="w-full lg:w-7/12">
              {/* Quick Statistics */}
              <Card className="mb-8 border-gray-300 border">
                <CardHeader>
                  <CardTitle>Quick Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-yellow-100 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-yellow-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">
                          {currentUser.rank}
                        </div>
                        <div className="text-xs text-gray-500">YOUR RANK</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="p-3 bg-gray-100 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0h.25M6 16.5h.25"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">
                          {currentUser.percentile}%
                        </div>
                        <div className="text-xs text-gray-500">PERCENTILE</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">
                          {currentUser.correctAnswers} /{" "}
                          {currentUser.totalQuestions}
                        </div>
                        <div className="text-xs text-gray-500">
                          CORRECT ANSWERS
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Graph */}
              <Card className="mb-8 border-gray-300 border">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Comparison Graph</CardTitle>
                    <div className="bg-purple-200 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-purple-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                        />
                      </svg>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <span className="font-bold">
                      You scored {currentUser.percentile}% percentile
                    </span>{" "}
                    which is lower than the average percentile 72% of all the
                    engineers who took this assessment
                  </p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={comparisonData}>
                        <XAxis
                          dataKey="percentile"
                          label={{ value: "Percentile", position: "bottom" }}
                        />
                        <YAxis hide={true} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="Students"
                          stroke="#6366f1"
                          strokeWidth={2}
                          dot={(props) => {
                            if (props.payload.percentile === 30) {
                              return (
                                <circle
                                  key={`dot-${props.index}`}
                                  cx={props.cx ?? 0}
                                  cy={props.cy ?? 0}
                                  r={4}
                                  fill="#6366f1"
                                />
                              );
                            }
                            return (
                              <circle
                                key={`dot-${props.index}`}
                                cx={props.cx}
                                cy={props.cy}
                                r={4}
                                stroke="#6366f1"
                                fill="white"
                              />
                            );
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-5/12 ">
              {/* Syllabus Wise Analysis */}
              <Card className="mb-8 border-gray-300 border">
                <CardHeader>
                  <CardTitle>Syllabus Wise Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {currentUser.syllabus.map((item, index) => (
                      <div key={item.id || index}>
                        {/* Progress Header */}
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{item.name}</span>
                          <span className="text-sm font-semibold">
                            {item.score}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              item.score >= 93
                                ? "bg-green-500"
                                : item.score >= 80
                                ?"bg-orange-500"
                                : item.score >= 40
                                ? "bg-blue-500"
                                :"bg-red-500"
                                 
                            }`}
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Question Analysis */}
              <Card className="mb-8 border-gray-300 border">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Question Analysis</CardTitle>
                    <span className="text-blue-600 font-semibold">
                      {currentUser.correctAnswers}/{currentUser.totalQuestions}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    <span className="font-semibold">
                      You scored {currentUser.correctAnswers} question correct
                      out of {currentUser.totalQuestions}.
                    </span>{" "}
                    However it still needs some improvements
                  </p>
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeDasharray={`${
                            (currentUser.correctAnswers /
                              currentUser.totalQuestions) *
                            100
                          }, 100`}
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-3xl font-bold">
                          {Math.round(
                            (currentUser.correctAnswers /
                              currentUser.totalQuestions) *
                              100
                          )}
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
