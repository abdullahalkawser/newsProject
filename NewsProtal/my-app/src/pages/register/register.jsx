import React from 'react';

const Register = () => {
    return (
        <div>
             <h1 className="text-5xl font-bold">Registar Now !</h1>
           
            <div>

          
       
  <div className="hero-content flex-col lg:flex-row-reverse mt-10">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input input-bordered" required />
     
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;