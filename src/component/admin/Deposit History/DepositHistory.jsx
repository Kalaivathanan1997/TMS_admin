import React, { Component } from 'react'

export default class DepositHistory extends Component {
  componentDidMount() {
    $("#example1").DataTable({
      "ordering": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  }
  render() {
    return (
      <div>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Transaction</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Transaction</li>
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
                <img className="img-circle  elevation -2 mx-1 " src="https://rathus.net:443/asset//img/list.png" style={{ width: 50, height: 50 }} st alt="User Avatar" />
                <div className='d-flex align-items-end '>
                  <h4>Deposit History</h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form name="form_aaa_transactionss" id="form_aaa_transactionss" action="https://rathus.net/administrator/aaa_transactions/index">
    <div className="row m-2">
  
    <div className="col-md-2">
      <label>Start Date</label>
      <input type="date" name="start_date" className="form-control start_date" defaultValue />
    </div>
    <div className="col-md-2">
      <label>End Date</label>
      <input type="date" name="end_date" className="form-control end_date" defaultValue />
    </div>
    <div className="col-md-2">
      <label>Moderator</label>
      <select name="moderator" className="form-control moderatorfilter">
        <option value selected disabled>Select Moderator</option>
        <option idval={8} value={8}>Mayuran, Jaffna</option>
        <option idval={13} value={13}>Sathic</option>
        <option idval={14} value={14}>Aaaa, Jaffna</option>
        <option idval={22} value={22}>Kumarathas, Colombo</option>
        <option idval={26} value={26}>TestPrinz</option>
        <option idval={38} value={38}>Euro</option>
        <option idval={49} value={49}>Venthan, Channei, India</option>
        <option idval={51} value={51}>AIE</option>
        <option idval={53} value={53}>AIE Online</option>
        <option idval={55} value={55}>Aie Express</option>
        <option idval={58} value={58}>FasterAie</option>
        <option idval={60} value={60}>INR</option>
      </select>
    </div>
    <div className=" col-lg-3 col-md-6 col-sm-12 mt-auto">
    <button type="button" class="btn btn-info  btn-s m-1  "><i class="fa fa-filter"></i>   Filter</button>
    <button type="button" class="btn btn-danger  btn-s m-1"><i class="fas fa-recycle"></i>  Reset</button>
    </div>
 
</div>

      </form>




<div>
<div className="card m-3">
            <div className="card-header">
              <h3 className="card-title">All Aaa Transactions </h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped dataTable dtr-inline">
              <thead>
              <tr className=" text-center p-0 ">
                           <th><input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all"/> 
                           </th>
                           <th>Moderator</th>
                           <th>Amount</th>
                           <th>Date Added</th>
                           <th>Action</th>
                        </tr>
                   </thead>
                <tbody>
                <tr>
                  <td className=" text-center  "> <input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all"/></td>
                  <td  >P Rajeswary</td>
                  <td>74584725 </td>
                  <td>BANK OF CEYLON</td>
                  <td>
                  <button className='btn btn-lg text-black p-2'><i class="fas fa-file"></i></button>
                     <button className='btn btn-lg text-gry p-2 '><i class="fas fa-edit"></i></button>
                     <button className='btn btn-lg text-red p-2'><i class="fas fa-trash"></i></button>
                  </td>
                 
                 
                </tr>
                <tr>
                  <td className=" text-center "> <input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all"/></td>
                  <td  >P Rajeswary</td>
                  <td>74584725 </td>
                  <td>BANK OF CEYLON</td>
                  <td>
                  <button className='btn btn-lg text-black p-2'><i class="fas fa-file"></i></button>
                     <button className='btn btn-lg text-gry p-2 '><i class="fas fa-edit"></i></button>
                     <button className='btn btn-lg text-red p-2'><i class="fas fa-trash"></i></button>
                  </td>
                  
                 
                </tr>
            
                </tbody>
             
              </table>
            </div>
            {/* /.card-body */}
          </div>
</div>




    </div>
    )
  }
}
