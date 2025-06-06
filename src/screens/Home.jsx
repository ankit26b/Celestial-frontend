import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user.context";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [project, setProject] = useState([]);

  const navigate = useNavigate();

  function createProject(e) {
    e.preventDefault();
    console.log({ projectName });

    axios
      .post("/projects/create", {
        name: projectName,
      })
      .then((res) => {
        console.log(res);
        setProject((prevProjects) => [...prevProjects, res.data]);
        setIsModalOpen(false);
        setProjectName("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios
      .get("/projects/all")
      .then((res) => {
        console.log("API response: ", res.data)
        const projects = res.data?.projects || [];
        setProject(projects);
      })
      .catch((err) => {
        console.log(err);
        setProject([]);
      });
  }, []);

  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('../bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="projects flex flex-col justify-between items-center p-6 w-screen h-screen">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">

        {project.map((project) => (
          <div
            key={project._id}
            onClick={() => {
              navigate(`/project`, {
                state: { project },
              });
            }}
            className="project flex flex-col gap-2 cursor-pointer p-5 border border-slate-300 rounded-lg shadow-md bg-white/10 hover:bg-gray-800/10 transition duration-300"
          >
            <h2 className="font-semibold text-lg">{project.name}</h2>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <p>
                {" "}
                <small>
                  {" "}
                  <i className="ri-user-line"></i> Collaborators
                </small>{" "}
                :
              </p>
              {project.users.length}
            </div>
          </div>
        ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bottom-0 px-6 py-6 border border-slate-300 rounded-lg bg-white/10 hover:bg-gray-800/20 text-white font-semibold shadow-md transition duration-300 flex justify-center items-center w-44"
        >
          New Project
          <i className="ri-link ml-2"></i>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="inset-0 bg-white/10 opacity-100 p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-xl mb-4 text-center text-white">Create New Project</h2>
            <form onSubmit={createProject}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Project Name
                </label>
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-700"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black/50 text-white rounded-md hover:bg-gray-900 transition"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
