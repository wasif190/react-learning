import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'india',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    isCommentsChecked: true,
    isCandidatesChecked: true,
    isOffersChecked: true,
    notificationMode: '',
  })

  const changeHandler = (e) => {
    const {name, value, checked, type} = e.target;
    setFormData(prev => {
      return {
        ...prev,
        // [e.target.name]: e.target.value
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  console.log(formData)

  const submitHandler = (e) => e.preventDefault();
  return (
    <main className="md:w-[700px] sm:w-[2500px] border-x-[1px] border-x-[#ccc] min-h-screen m-auto py-5">
      <form 
       onSubmit={submitHandler}
       className="w-[95%] m-auto space-y-2"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName">First Name</label>
          <input 
            className="border-[1px] rounded-md p-1 border-b-[#44b6dc] outline-none"
            type="text" 
            placeholder="First Name"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
            id="firstName"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName">Last Name</label>
          <input 
            className="border-[1px] rounded-md p-1 border-b-[#44b6dc] outline-none"
            type="text" 
            placeholder="Last Name"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
            id="lastName"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email address</label>
          <input 
            className="border-[1px] rounded-md p-1 border-b-[#44b6dc] outline-none"
            type="email" 
            placeholder="Email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
            id="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="country">Country</label>
          <select 
            onChange={changeHandler}
            name="country"
            id="country"
            value={formData.country}
            className="border-[1px] rounded-md p-1 border-b-[#44b6dc] outline-none"
          >
            <option value="india">India</option>
            <option value="america">America</option>
            <option value="nepal">Nepal</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="address">Street address</label>
          <input 
            className="border-[1px] rounded-md p-1 border-b-[#44b6dc] outline-none"
            type="text" 
            placeholder="1234 Main St"
            onChange={changeHandler}
            name="address"
            value={formData.address}
            id="address"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city">City</label>
          <input 
            className="border-[1px] rounded-md p-1 border-b-[#44b6dc] outline-none"
            type="text" 
            placeholder="Kolkata"
            onChange={changeHandler}
            name="city"
            value={formData.city}
            id="city"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="state">State</label>
          <input 
            className="border-[1px] rounded-md p-1 border-b-[#44b6dc] outline-none"
            type="text" 
            placeholder="West Bengal"
            onChange={changeHandler}
            name="state"
            value={formData.state}
            id="state"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="postalCode">ZIP / Postal code</label>
          <input 
            className="border-[1px] rounded-md p-1 border-b-[#44b6dc] outline-none"
            type="text" 
            placeholder="700137"
            onChange={changeHandler}
            name="postalCode"
            value={formData.postalCode}
            id="=postalCode"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="byEmail" className="font-semibold">By Email</label>
          <div id="byEmail" className="space-y-2">
            <div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="comments" onChange={changeHandler} name="isCommentsChecked" checked={formData.isCommentsChecked}/>
                <label htmlFor="comments">Comments</label>
              </div>
              <p className="ml-5">Get notified when someones posts a comment on a posting.</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="candidates" onChange={changeHandler} name="isCandidatesChecked" checked={formData.isCandidatesChecked}/>
                <label htmlFor="candidates">Candidates</label>
              </div>
              <p className="ml-5">Get notified when a candidates applies for a job.</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="offers" onChange={changeHandler} name="isOffersChecked" checked={formData.isOffersChecked}/>
                <label htmlFor="offers">Offers</label>
              </div>
              <p className="ml-5">Get notified when a candidate accespts or rejects an offer.</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <p className="font-semibold">Push Notifications</p>
            <p>These are delivered via SMS to your mobile phone.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input 
                type="radio" 
                id="everything" 
                value="everything"
                name="notificationMode"
                onChange={changeHandler} 
                checked={formData.notificationMode === 'everything'} 
              />
              <label htmlFor="everything">Everything</label>
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="radio" 
                id="same-as-email" 
                value="same-as-email"
                name="notificationMode"
                onChange={changeHandler} 
                checked={formData.notificationMode === 'same-as-email'} 
              />
              <label htmlFor="same-as-email">Same as email</label>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <button className="bg-[#3668d4] py-1 px-4 text-white font-semibold rounded-sm hover:bg-[#5585ed]">Save</button>
        </div>
      </form>
    </main>
  );
}

export default App;
