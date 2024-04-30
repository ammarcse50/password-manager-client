import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaPen } from "react-icons/fa";

import { MdOutlineDeleteForever } from "react-icons/md";
import {  Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const PassStore = () => {
  const location = useLocation();

  const [collection, setCollection] = useState([]);
        
    const {user} = useContext(AuthContext)
    
     const url = `https://password-manager-server-mine-production.up.railway.app/password?email=${user.email}&sort=1` // name mistake in github i done paas manager er jaigai mahadul qiraat diye repo crete kore felchi
     

      

  // fetch all data
  useEffect(() => {
    axios.get(url).then((res) => {
      setCollection(res.data);
    });
  }, [collection]);

  // edit
  const handleDelete = (id) => {
    axios.delete(`https://password-manager-server-mine-production.up.railway.app/password/${id}`).then((res) => {
      console.log(res.data);
    });
    const filter = collection.filter((data) => data._id !== id);

    setCollection(filter);
  };

  return (
    <div className="mb-10">
      <h2 className="text-5xl font-bold text-center  mb-10 text-[#1d7edd]">
        {" "}
        Table Saved Password
      </h2>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="shadow-xl">
            <tr className="md:text-lg">
              <th></th>
              <th className="text-white">Website</th>
              <th className="text-white">Username</th>
              <th className="text-white">password</th>
              <th className="text-white">Action</th>
            </tr>
          </thead>

          <tbody className="md:text-lg">
            {collection.map((data, idx) => (
              <tr key={data._id} className="bg-base-400">
                <th className="text-white">{idx + 1}</th>
                <td className="text-white">{data.site}</td>
                <td className="text-white">{data.username}</td>
                <td className="text-white">
                  {"*".repeat(data.password.length)}
                </td>
                <td className="flex items-center gap-3">
                  <Link
                    activeClass="active"
                    to={`/update/${data._id}`}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className=""
                  >
                    <FaPen className="text-xl text-primary-color" />{" "}
                  </Link>
                  <a onClick={() => handleDelete(data._id)} className="">
                    <MdOutlineDeleteForever className="text-3xl text-rose-500" />{" "}
                  </a>
                </td>
              </tr>
            ))}

            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassStore;
