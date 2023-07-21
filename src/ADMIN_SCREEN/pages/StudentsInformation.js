import React from "react";
import { Header } from "../components";
import avatar from "../data/avatar.jpg";
import { useState } from "react";
import { useEffect } from "react";

const StudentsInformation = () => {
  // use state hook
  const [learners, setLearners] = useState("");
  const [learnerid, setLearnerid] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [coursesenrolled, setCoursesenrolled] = useState("");
  const [batch, setBatch] = useState("");
  const [batchtimings, setBatchTimings] = useState("");
  const [classmodeCategory, setClassmodeCategory] = useState("");
  const [sessionmodecategory, setSessionmodeCategory] = useState("");
  const [grade, setGrade] = useState("");
  const [trainer, setTrainer] = useState("");
  const [progress, setProgress] = useState("");
  const [payment, setPayment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [deleteMode, setDeleteMode] = useState(false);

  const fetchLearners = async () => {
    try {
      const response = await fetch("/learners");
      const data = await response.json();
      console.log("datalearners =", data);
      setLearners(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLearners();
  }, []);

  const handleSubmit = (e) => {
    console.log("Handling form submission...");
    console.log("LearnerID:", learnerid);
    console.log("Name :", name);
    console.log("Age:", age);
    console.log("CoursesEnrolled:", coursesenrolled);
    console.log("Batch:", batch);
    console.log("BatchTimings:", batchtimings);
    console.log("classmodeCategory", classmodeCategory);
    console.log("sessionmodeCategory:", sessionmodecategory);
    console.log("Grade:", grade);
    console.log("Trainer:", trainer);
    console.log("Progress:", progress);
    console.log("Payment:", payment);
    console.log("PhoneNumber:", phoneNumber);
    console.log("Email:", email);
    e.preventDefault();
    const formData = new FormData();
    formData.append("LearnerID", learnerid);
    formData.append("Name", name);
    formData.append("Age", age);
    formData.append("CoursesEnrolled", coursesenrolled);
    formData.append("Batch", batch);
    formData.append("BatchTimings", batchtimings);
    formData.append("classmodeCategory", classmodeCategory);
    formData.append("sessionmodeCategory", sessionmodecategory);
    formData.append("Grade", grade);
    formData.append("Trainer", trainer);
    formData.append("Progress", progress);
    formData.append("Payment", payment);
    formData.append("PhoneNumber", phoneNumber);
    formData.append("Email", email);
    console.log("Form Data:", Object.fromEntries(formData)); // Display form data as an object
    console.log("Sending POST request to server...");
    fetch("/insertupdatelearner", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request successful");
        } else {
          throw new Error("Upload Failed");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Response data:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (deleteMode) {
  //     console.log("Deleting learner with ID:", learnerid);
  //     fetch("/insertupdatelearner", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         LearnerID: learnerid,
  //         Delete: 1,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           console.log("Delete successful");
  //         } else {
  //           throw new Error("Delete Failed");
  //         }
  //         return response.json(); // Parse the response as JSON
  //       })
  //       .then((data) => {
  //         console.log("Response data:", data);
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //       });
  //   } else {
  //     console.log("Performing insert or update operation...");
  //     const formData = new FormData();
  //     formData.append("LearnerID", learnerid);
  //     formData.append("Name", name);
  //     formData.append("Age", age);
  //     formData.append("CoursesEnrolled", coursesenrolled);
  //     formData.append("Batch", batch);
  //     formData.append("BatchTimings", batchtimings);
  //     formData.append("classmodeCategory", classmodeCategory);
  //     formData.append("sessionmodeCategory", sessionmodecategory);
  //     formData.append("Grade", grade);
  //     formData.append("Trainer", trainer);
  //     formData.append("Progress", progress);
  //     formData.append("Payment", payment);
  //     formData.append("PhoneNumber", phoneNumber);
  //     formData.append("Email", email);
  //     console.log("Form Data:", Object.fromEntries(formData));

  //     fetch("/insertupdatelearner", {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           console.log("Request successful");
  //         } else {
  //           throw new Error("Upload Failed");
  //         }
  //         return response.json(); // Parse the response as JSON
  //       })
  //       .then((data) => {
  //         console.log("Response data:", data);
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //       });
  //   }
  // };

  return (
    <div className='my-3 absolute top-12 left-96 w-9/12'>
    <div className="bg-slate-200 dark:bg-secondary-dark-bg">
      <div className="p-10">
        <Header category="Page" title="Students Details" />
        <div className="w-120 mx-auto flex p-8 border-4 border-white dark:border-slate-200 dark:border-opacity-20 rounded-2xl">
          <div className="w-80">
            <img
              className="mx-auto rounded-full border-4 border-white dark:border-blue-700 dark:border-opacity-60"
              src={avatar}
            />
          </div>
          <div className="bg-white dark:bg-slate-200 dark:bg-opacity-20 dark:text-white w-9/12 mx-auto rounded-2xl p-1 text-s">
            <p className="m-2 text-3xl">Details</p>
            <div className="w-auto flex justify-evenly bg-slate-300 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-3 mt-1">
              <form className="w-full max-w-none">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      LearnerID
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setLearnerid(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Age
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Courses
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setCoursesenrolled(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Batch
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setBatch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      BatchTimings
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setBatchTimings(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      ClassmodeCategory
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setClassmodeCategory(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      SessionmodeCategory
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setSessionmodeCategory(e.target.value)}
                    />
                  </div>
                </div>
              </form>

              <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Grade
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setGrade(e.target.value)}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Trainer
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setTrainer(e.target.value)}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Progress
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setProgress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Payment
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setPayment(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      PhoneNumber
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-6"
                      htmlFor="inline-full-name"
                    >
                      Email
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-end">
                  <div className=" ml-auto">
                    <button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  <div className=" flex  ml-auto ">
                    <button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={() => setDeleteMode(true)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto flex gap-10 mt-10 p-3 justify-center dark:text-white">
          <div className="w-64 h-48 bg-white dark:bg-slate-200 dark:bg-opacity-20 rounded-2xl p-4">
            div1
          </div>
          <div className="w-64 h-48 bg-white dark:bg-slate-200 dark:bg-opacity-20 rounded-2xl p-4">
            div2
          </div>
          <div className="w-64 h-48 bg-white dark:bg-slate-200 dark:bg-opacity-20 rounded-2xl p-4">
            div3
          </div>
          <div className="w-64 h-48 bg-white dark:bg-slate-200 dark:bg-opacity-20 rounded-2xl p-4">
            div4
          </div>
        </div>
        <div className="w-11/12 mx-auto flex gap-10 my-4 p-3 justify-center dark:text-white">
          <div className="w-1/3 h-48 bg-white dark:bg-slate-200 dark:bg-opacity-20 rounded-2xl p-4">
            div1
          </div>
          <div className="w-1/3 h-48 bg-white dark:bg-slate-200 dark:bg-opacity-20 rounded-2xl p-4">
            div2
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentsInformation;