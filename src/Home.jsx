import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loader } from './components/Loader';
import { useNavigate } from 'react-router-dom';

export function HomePage(){
    const navigate=useNavigate()
    const [users, setUsers]=useState([]);
  const [deleted, setDeleted]=useState(false);
  const [firstName, setFirstName]=useState("");
  const [lastName, setLastName]=useState("");
  const [city, setCity]=useState("");
  const [phone, setPhone]=useState("");
  const [loading, setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    axios.get('https://sarg-backend.onrender.com/api/v1/users').then((res)=>{
      console.log(res);
      setUsers(res.data.users);
    })
    setDeleted(false)
    setLoading(false);
  }, [deleted]);

  return (
    <div className="container mx-auto p-4">
      {/* {loading==='true' ? <Loader></Loader> : null} */}
      <div className="overflow-x-auto">
        <div className="min-w-full align-middle">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-4">
                      <button
                        // onClick={() => handleEditUser(user.id)}
                        onClick={async()=>{
                              navigate(`/edit/${user.id}`)
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={async()=>{
                          setLoading(true);
                          const res=await axios.post('https://sarg-backend.onrender.com/api/v1/delete', {
                           data:{
                                id:user.id
                           }
                          });
                          alert(res.data.msg);
                           setDeleted(true);
                           setLoading(false);
                         }}
                        className="flex justify-center items-center gap-2 w-12 h-6 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                      >
                        <svg viewBox="0 0 15 15" className="w-5 fill-white">
                          <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                          Delete
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">New</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="text"
                      name="firstName"
                      // value={newUser.firstName}
                      // onChange={handleInputChange}
                      onChange={async(e)=>{
                        setFirstName(e.target.value);
                      }}
                      required
                      className="border rounded px-2 py-1"
                      placeholder="First Name"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="text"
                      name="lastName"
                      // value={newUser.lastName}
                      // onChange={handleInputChange}
                      onChange={async(e)=>{
                        setLastName(e.target.value);
                      }}
                      required
                      className="border rounded px-2 py-1"
                      placeholder="Last Name"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="text"
                      name="city"
                      // value={newUser.city}
                      // onChange={handleInputChange}
                      onChange={async(e)=>{
                        setCity(e.target.value);
                      }}
                      required
                      className="border rounded px-2 py-1"
                      placeholder="City"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="text"
                      name="phone"
                      // value={newUser.phone}
                      // onChange={handleInputChange}
                      onChange={async(e)=>{
                        setPhone(e.target.value);
                      }}
                      required
                      className="border rounded px-2 py-1"
                      placeholder="Phone"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      // onClick={handleAddUser}
                      onClick={async()=>{
                        try{
                          setLoading(true);
                        const res=await axios.post('https://sarg-backend.onrender.com/api/v1/create', {
                          data:{
                                firstName,
                                lastName,
                                city,
                                phone
                          }
                        });
                        alert(res.data.msg);
                        setDeleted(true);
                        setLoading(false);
                        console.log(res);
                      }
                      catch(e){
                          console.log("Error while creating user");
                      }

                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <h1 className='flex justify-center font-bold mt-6'>Made By Gaurav Sharma😊 for Sarg</h1>
    </div>
  );
}