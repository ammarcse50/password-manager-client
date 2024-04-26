import { useEffect, useState } from "react";
import axios from "axios";
const PassStore = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/password").then((res) => {
      setCollection(res.data);
    });
  }, [collection]);

  return (
    <div className="mb-10">
      <h2 className="text-5xl font-bold text-center pt-32 mb-10 text-[#1d7edd]">
        {" "}
        Table Saved Password
      </h2>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="shadow-xl">
            <tr className="text-lg">
              <th></th>
              <th className="text-white">Website</th>
              <th className="text-white">Username</th>
              <th className="text-white">password</th>
            </tr>  
    
          </thead>
        
          <tbody className="text-lg">
            {collection.map((data, idx) => (
              <tr key={data.id} className="bg-base-400">
                <th className="text-white">{idx}</th>
                <td className="text-white">{data.website}</td>
                <td className="text-white">{data.username}</td>
                <td className="text-white">{"*".repeat(data.password.length)}</td>
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