import React, { Component } from 'react'

export default class AgentView extends Component {
  render() {
    return (
      <div>

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Agent</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Agent</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <div className="row mx-3">
          <div className="col-12">
            <button type="button" className="btn btn-success float-right" style={{ marginRight: 5 }} data-original-title="Add Aaa Transactions New  (Ctrl+a)">
              <i className="fas fa-plus"></i> Add Agent New
            </button>
            <div >
              <div className='d-flex justify-content-between  '>
                <div className='d-flex   '>
                  <img className="img-circle  elevation -2 mx-1 " src="https://rathus.net:443/asset//img/list.png" style={{ width: 50, height: 50 }} st alt="User Avatar" />
                  <div>
                    <h4>Agent</h4>
                    <span>Register All Agents <i className="label bg-yellow">28  Item</i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <form name="form_user" id="form_user" action="#">
          <div className="card m-3">
            <div className="card-header">
              <h3 className="card-title">All Agents </h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">

              <table className="table table-bordered table-striped dataTable">
                <thead>
                  <tr className>
                    <th>
                      <input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all" />

                    </th>
                    <th>User</th>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="tbody_user">
                  <tr>
                    <td width={5}>
                      <input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all" />

                    </td>
                    <td>
                      <div className="chip">
                        <a className="fancybox mr-2" rel="group" href="https://rathus.net:443/uploads/user/default.png" data-original-title title>
                          <img src="https://rathus.net:443/uploads/user/default.png" alt="Person" width={30} height={30} />
                        </a>
                        Ramanan                            </div>
                    </td>
                    <td>Swarnalaya</td>
                    <td>
                      <input type="checkbox" name="status" data-user-id={59} className="switch-button" defaultChecked style={{ display: 'none' }} /><div className="switch-button-background checked" style={{ width: '27px', height: '13px' }}><div className="switch-button-button" style={{ width: '14px', height: '13px', left: '12px' }} /></div><span className="switch-button-label off" style={{ display: 'none' }}>Not active</span><span className="switch-button-label on">Active</span><div style={{ clear: 'left' }} />
                    </td>
                    <td width={200}>
                      <a href="https://rathus.net/administrator/agent/view/59" className="label-default" data-original-title title> <i className="far fa-file-alt "/> see </a>
                      <a href="https://rathus.net/administrator/agent/edit/59" className="label-default" data-original-title title><i className="far fa-edit ml-2" /> Change </a>
                      <a href="javascript:void(0);" data-href="https://rathus.net/administrator/agent/delete/59" className="label-default remove-data" data-original-title title><i className="far fa-trash-alt ml-2" /> Delete </a>
                    </td>
                  </tr>
                  <tr>
                    <td width={5}>
                      <input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all" />

                    </td>
                    <td>
                      <div className="chip">
                        <a className="fancybox mr-2" rel="group" href="https://rathus.net:443/uploads/user/default.png" data-original-title title>
                          <img src="https://rathus.net:443/uploads/user/default.png" alt="Person" width={30} height={30} />
                        </a>
                        Singaram </div>
                    </td>
                    <td>Singaram</td>
                    <td>
                      <input type="checkbox" name="status" data-user-id={56} className="switch-button" defaultChecked style={{ display: 'none' }} /><div className="switch-button-background checked" style={{ width: '27px', height: '13px' }}><div className="switch-button-button" style={{ width: '14px', height: '13px', left: '12px' }} /></div><span className="switch-button-label off" style={{ display: 'none' }}>Not active</span><span className="switch-button-label on">Active</span><div style={{ clear: 'left' }} />
                    </td>
                    <td width={200}>
                      <a href="https://rathus.net/administrator/agent/view/56" className="label-default" data-original-title title> <i className="far fa-file-alt"/> see </a>
                      <a href="https://rathus.net/administrator/agent/edit/56" className="label-default" data-original-title title><i className="far fa-edit ml-2" /> Change </a>
                      <a href="javascript:void(0);" data-href="https://rathus.net/administrator/agent/delete/56" className="label-default remove-data" data-original-title title><i className="far fa-trash-alt ml-2" /> Delete </a>
                    </td>
                  </tr>

                </tbody>
              </table>

            </div>
          </div>
        </form>
        <hr />
        {/* /.widget-user */}
        <div className="row">
            <div className="col-md-3">

            <div className="input-group mb-3">
              <select className="custom-select rounded-0 form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" name="bulk" id="bulk">
                <option value>Bulk</option>
                <option value="delete">Delete</option>
              </select>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Apply</button>
              </div>
            </div>
            </div>

            <div className="col-md-3">
            <input type="text" class="form-control rounded-0" id="exampleInputRounded0" placeholder="Filter" />
            </div>
            <div className="col-md-3">
            <div className="input-group mb-3">
              <select className="custom-select rounded-0 form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" name="bulk" id="bulk">
              <option value>All</option>
                <option value="id">ID</option>
                <option value="username">Username</option>
                <option value="full_name">Full Name</option>
                <option value="email">Email</option>
              </select>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Filter</button>
                <button class="btn btn-outline-secondary" type="button">
                <i className="fa-solid fa-arrow-rotate-right"></i>
                <i class="fas fa-redo"></i>
                
                </button>
              </div>
            </div>
            </div>


         
        </div>






        {/* <select type="text" className="form-control chosen chosen-select" name="bulk" id="bulk" placeholder="Site Email" style={{ display: 'none' }}>
                <option value>Bulk</option>
                <option value="delete">Delete</option>
              </select><div className="chosen-container chosen-container-single" style={{ width: '104px' }} title id="bulk_chosen"><a className="chosen-single"><span>Bulk</span><div><b /></div></a><div className="chosen-drop"><div className="chosen-search"><input type="text" autoComplete="off" /></div><ul className="chosen-results" /></div></div>
            </div>
            <div className="col-sm-2 padd-left-0 ">
              <button type="button" className="btn btn-flat" name="apply" id="apply" value="Apply" title data-original-title="Apply bulk action">Apply</button>
            </div>
            <div className="col-sm-3 padd-left-0  ">
              <input type="text" className="form-control" name="q" id="filter" placeholder="Filter" defaultValue />
            </div>
            <div className="col-sm-3 padd-left-0 ">
              <select type="text" className="form-control chosen chosen-select" name="f" id="field" style={{ display: 'none' }}>
                <option value>All</option>
                <option value="id">ID</option>
                <option value="username">Username</option>
                <option value="full_name">Full Name</option>
                <option value="email">Email</option>
              </select><div className="chosen-container chosen-container-single" style={{ width: '164px' }} title id="field_chosen"><a className="chosen-single"><span>All</span><div><b /></div></a><div className="chosen-drop"><div className="chosen-search"><input type="text" autoComplete="off" /></div><ul className="chosen-results" /></div></div>
            </div>
            <div className="col-sm-1 padd-left-0 ">
              <button type="submit" className="btn btn-flat" name="sbtn" id="sbtn" value="Apply" title data-original-title="Refining Search">
                Filter                      </button>
            </div>
            <div className="col-sm-1 padd-left-0 ">
              <a className="btn btn-default btn-flat" name="reset" id="reset" value="Apply" href="https://rathus.net/administrator/agent" title data-original-title="Reset Search">
                <i className="fa fa-undo" />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dataTables_paginate paging_simple_numbers pull-right" id="example2_paginate">
              <center />                   </div>
          </div>
        </div> */}
      </div>

        )
  }
}
