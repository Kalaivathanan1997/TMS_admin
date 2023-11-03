

import React, { Component } from 'react'

export default class AgentAdd extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#submit").click(function () {
        var name = $("#currency").val();

        $("#emp").append("<tr><td>" + name + "</td><td>" + city + "</td></tr>");
      });

    });
  }
  render() {
    return (
      <div>

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Agents <small>New Agent </small></h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active"><a href="#"> Agent</a></li>
                  <li className="active"> New </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <div className="row mx-3">
          <div className="col-12">

            <div >
              <div className='d-flex justify-content-between  '>
                <div className='d-flex   '>
                  <img className="img-circle  elevation -2 mx-1 " src="	https://rathus.net/asset//img/add2.png" style={{ width: 50, height: 50 }} st alt="User Avatar" />
                  <div>
                    <h4>Agents</h4>
                    <span>New Agent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <form>

          <div className="card card-secondary mx-5"  >
            <div className="card-header">
              <h3 className="card-title">Agent Login Detail</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username"
                      placeholder="Enter User Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email"
                      placeholder="Enter email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleSelectRounded0">Groups</label>
                    <select className="custom-select rounded-0" id="exampleSelectRounded0">
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"
                      placeholder="Password" />
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="card card-secondary mx-5"  >
            <div className="card-header">
              <h3 className="card-title">Agent Detail</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  {/* text input */}
                  <div className="form-group">
                    <label>Full Name </label>
                    <input type="text" className="form-control" placeholder="Enter ..." />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea className="form-control" id="address" rows="2"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleSelectRounded0">country</label>
                    <select className="custom-select rounded-0" id="exampleSelectRounded0">
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleSelectRounded0">State</label>
                    <select className="custom-select rounded-0" id="exampleSelectRounded0">
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleSelectRounded0">City</label>
                    <select className="custom-select rounded-0" id="exampleSelectRounded0">
                      <option>Value 1</option>
                      <option>Value 2</option>
                      <option>Value 3</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="agent-commission">Agent Commissions</label>
                    <input type="number" className="form-control" id="agent-commission" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="admin-commission">Admin Commissions</label>
                    <input type="number" className="form-control" id="admin-commission" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="add-credit">Add Credit</label>
                    <input type="number" className="form-control" id="add-credit" />
                  </div>
                </div>
              </div>
              {/* Button trigger modal */}
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
              </button>

              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Add Currency</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <select className="custom-select rounded-0" id="currency">
                          <option value={"Value"}>Value 1</option>
                          <option  value={"Value2"}>Value 2</option>
                          <option  value={"Value43"}>Value 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <input type="submit" id='submit' value="Add Currency" className="btn btn-primary" />
                    </div>
                  </div>
                </div>
              </div>








              <table border="1" id="emp">
                <tr>
                  <td>Priti</td>
                  <td>Pune</td>
                </tr>
                <tr>
                  <td>Nilesh</td>
                  <td>Solapur</td>
                </tr>
                <tr>
                  <td>Shravya</td>
                  <td>Pune</td>
                </tr>
              </table>
              <hr />

              <div className="row">
                <button type="button" className="btn btn-info  btn-s m-1  "><i className="fa fa-save"></i>   Save</button>
                <button type="button" className="btn btn-info  btn-s m-1"><i className="fas fa-list"></i>  Save and go to list</button>
                <button type="button" className="btn btn-lightblue  btn-s m-1"><i className="fas fa-recycle "></i>  Cancel</button>
              </div>
            </div>
          </div>

        </form>


      </div>
    )
  }
}

