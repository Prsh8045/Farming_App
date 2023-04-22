import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">FAQ</h1>
        <hr className="w-25 m-auto" />
        <div className="row">
          <div className="col-lg-6 p-5">
            <h1 className="fs-5">Q: What our farming machine renting website do ?</h1>
            <p>
              A: A farming machine renting website is an online platform that
              connects farmers who need agricultural machinery with equipment
              owners who are willing to rent out their machines.
            </p>
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="fs-5">
              Q: What types of farming machines can be rented on such a website ?
            </h1>
            <p>
              A: The types of farming machines that can be rented on a farming
              machine renting website vary depending on the platform, but
              commonly include tractors, harvesters, plows, cultivators, seed
              drills, trailer, and other agricultural equipment.
            </p>
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="fs-5">Q: How does the renting process work ?</h1>
            <p>
              A: Generally, the process involves a farmer searching for the
              desired machinery on the website, making a request to the
              equipment owner, agreeing on the rental terms and price, and
              signing a rental agreement. The farmer then picks up the equipment
              or arranges for delivery, and returns it at the end of the rental
              period.
            </p>
          </div>
          <div className="col-lg-6 p-5">
            <h1 className="fs-5">Q: How can I trust the quality of the rented equipment ?</h1>
            <p>
              A: It is important to read the reviews and ratings of the
              equipment owner and their machines before making a rental. The
              platform may also offer a guarantee or insurance policy for the
              rented equipment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
