
import { useState } from 'react';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    address: '',
    email: '',
    password: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const router=useRouter();
    
    console.log(formData);
    setFormData({
        name: '',
        country: '',
        address: '',
        email: '',
        password: '',
      });
    


};

  return (
    <>
    <div className="text-blueSecondary font-semibold hover:underline  font-abc  hover:text-rishabh text-6xl  " style={{marginLeft:"815px",marginTop:"100px",marginBottom:"-200px"}}>
        REGISTER!!!!
    </div>
    <div className="max-w-2xl max-h-2xl mx-auto mt-10 bg-[white]/10 backdrop-blur-md rounded-xl overflow-hidden mt-[280px]">
      <form onSubmit={handleSubmit} className="p-8">
        <div className='flex flex-col gap-12 m-10' >
          <div className="flex items-center">
            <label htmlFor="name" className="block text-white font-bold font-aldrich text-xl w-1/3">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="ml-2 flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="country" className="block text-white font-bold font-aldrich text-xl w-1/3">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="ml-2 flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="address" className="block text-white font-bold font-aldrich text-xl w-1/3">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="ml-2 flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="block text-white font-bold font-aldrich text-xl w-1/3">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="ml-2 flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="password" className="block text-white font-bold font-aldrich text-xl w-1/3">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="ml-2 flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
         
          <button  type="submit" onSubmit={handleSubmit} className="bg-none text-blueSecondary border border-blueSecondary px-4 py-2 rounded-2xl hover:bg-blue hover:text-rishabh hover:border-rishabh transition duration-300  font-bold font-aldrich text-xl"  >Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Register;
