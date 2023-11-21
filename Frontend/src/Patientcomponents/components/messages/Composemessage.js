import React from "react";
import Navbar from "../Navbar"
import Menu from "../Menu";

const Composemessage = () => {
  return (
    <>
    <Navbar/>
    <div>
      <div className="d-flex">
        <div className="col-2 p-0">
          <Menu />
        </div>

        <div className="col-10 p-0">
          <div class="col-md-8 m-5">
            <form action="" method="post">
              <div class="form-group row">
                <label class="col-sm-2 fs-6 fw-bold">
                  To
                </label>
                <div class="col-md-10">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="mainemail"
                    name="mainemail"
                    placeholder="Email"
                  />
                </div>
              
              </div>
              <div class="form-group row">
                <label class="col-sm-2 fs-6 fw-bold">
                  CC
                </label>
                
                <div class="col-md-10 ">
                  <input
                    type="text"
                    class="form-control mb-2"
                    id="cmail"
                    name="cemail"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="text" class="col-sm-2 fs-6 fw-bold">
                  Subject
                </label>
                <div class="col-md-10">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Type Subject"
                  />
                </div>
              </div>

              <div class="compose-body">
                <label for="text" class="fs-6 fw-bold">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                ></textarea>
                <div class="compose-footer p-3">
                  <div class="float-end">
                    <button
                      class="btn btn-success "
                      name="btn-submit"
                      id="btn-submit"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Composemessage;
