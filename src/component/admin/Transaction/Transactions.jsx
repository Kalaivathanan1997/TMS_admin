import React, { Component } from 'react'
import {  useNavigate } from "react-router-dom";
import $ from 'jquery'; // Make sure you've imported jQuery


  export default function AddTransaction(){
    // useEffect(() => {
    //   const initializeDataTables = () => {
    //     // Initialize DataTable for #example1
    //     $("#example1").DataTable({
    //       "ordering": false,
    //       "scrollX": true,
    //       "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    //     }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    
    //     // Initialize DataTable for #example2
    //     $('#example2').DataTable({
    //       "paging": true,
    //       "lengthChange": false,
    //       "searching": false,
    //       "ordering": true,
    //       "info": true,
    //       "autoWidth": false,
    //       "responsive": true,
    //     });
    //   };
  
    //   // Call the initialization function after the component is mounted
    //   initializeDataTables();
    // }, []);

  
  
    const navigate = useNavigate();
    const navigateToContacts = () => {
      // 👇️ navigate to /contacts
      navigate('/Add_transaction');
    };

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
            <button type="button" onClick={navigateToContacts} className="btn btn-success float-right" style={{ marginRight: 5 }} data-original-title="Add Aaa Transactions New  (Ctrl+a)">
              <i class="fas fa-plus"></i> Add Aaa Transactions New
            </button>
            <div >
              <div className='d-flex justify-content-between  '>
                <div className='d-flex   '>
                  <img className="img-circle  elevation -2 mx-1 " src="https://rathus.net:443/asset//img/list.png" style={{ width: 50, height: 50 }} st alt="User Avatar" />
                  <div>
                    <h4>Aaa Transactions</h4>
                    <span>Register All Aaa Transactions <i className="label bg-yellow">53517  Item</i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form name="form_aaa_transactionss" id="form_aaa_transactionss" action="https://rathus.net/administrator/aaa_transactions/index">
          <div className="row d-flex m-3">

            <div className="col-lg-2 col-md-6 col-sm-12 ">
              <label>Start Date</label>
              <input type="date" name="start_date" className="form-control start_date" defaultValue />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <label>End Date</label>
              <input type="date" name="end_date" className="form-control end_date" defaultValue />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
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
            <div className="col-lg-2 col-md-6 col-sm-12">
              <label>Agent</label>
              <select name="agent" className="form-control agentfilter">
                <option value selected disabled>Select Agent</option>
                <option idval={3} value={3}>Senthuran</option>
                <option idval={15} value={15}>Raagold</option>
                <option idval={19} value={19}>Ruban Anna</option>
                <option idval={25} value={25}>Lingam</option>
                <option idval={27} value={27}>Anton Biel</option>
                <option idval={28} value={28}>Moneygram</option>
                <option idval={29} value={29}>Jegan</option>
                <option idval={30} value={30}>Jana Gra</option>
                <option idval={31} value={31}>Sugu Jasi</option>
                <option idval={32} value={32}>Suthan Frieburg</option>
                <option idval={33} value={33}>Selvi Acca</option>
                <option idval={34} value={34}>Raju Anna</option>
                <option idval={35} value={35}>Jasi Lu</option>
                <option idval={36} value={36}>Freecom</option>
                <option idval={37} value={37}>Kumar Anna</option>
                <option idval={39} value={39}>Raa Money</option>
                <option idval={40} value={40}>Paventhy</option>
                <option idval={41} value={41}>Mathan</option>
                <option idval={42} value={42}>Prince Paneer</option>
                <option idval={43} value={43}>Ragu</option>
                <option idval={46} value={46}>Anpu</option>
                <option idval={47} value={47}>Pushpa</option>
                <option idval={48} value={48}>Jasijanath</option>
                <option idval={50} value={50}>Vts</option>
                <option idval={52} value={52}>TPM Suthan Lausan</option>
                <option idval={54} value={54}>So Vithu</option>
                <option idval={56} value={56}>Singaram</option>
                <option idval={59} value={59}>Ramanan</option>
              </select>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <label>Raa Agent</label>
              <select name="raa_agent" className="form-control agentfilter">
                <option value selected disabled>Select Raamony Agents</option>
                <option idval="Admin" value="Admin">Admin</option>
                <option idval="Agent(7)" value="Agent(7)">Agent(7)</option>
                <option idval="jasi" value="jasi">Jasi</option>
                <option idval="Anton" value="Anton">Anton</option>
                <option idval="Raju" value="Raju">Raju</option>
                <option idval="Raamoney Admin" value="Raamoney Admin">Raamoney Admin</option>
                <option idval="Sinnathurai" value="Sinnathurai">Sinnathurai</option>
                <option idval="Raa Express GmbH" value="Raa Express GmbH">Raa Express GmbH</option>
                <option idval="Kumar" value="Kumar">Kumar</option>
                <option idval="Ravi Test" value="Ravi Test">Ravi Test</option>
                <option idval="prince4dev" value="prince4dev">Prince4dev</option>
                <option idval="Anton Quintines" value="Anton Quintines">Anton Quintines</option>
                <option idval="Thayaskumar Nakanthi" value="Thayaskumar Nakanthi">Thayaskumar Nakanthi</option>
                <option idval="Mathan" value="Mathan">Mathan</option>
                <option idval="Poopalaratnam Ramana" value="Poopalaratnam Ramana">Poopalaratnam Ramana</option>
                <option idval="Test Prinz" value="Test Prinz">Test Prinz</option>
                <option idval="GA CAPITAL" value="GA CAPITAL">GA CAPITAL</option>
                <option idval="Sutharsan" value="Sutharsan">Sutharsan</option>
                <option idval="Thayaskumar Nakanthiran" value="Thayaskumar Nakanthiran">Thayaskumar Nakanthiran</option>
                <option idval="Prince" value="Prince">Prince</option>
                <option idval="Mohali Test" value="Mohali Test">Mohali Test</option>
              </select>
            </div>
            <div className=" col-lg-2 col-md-6 col-sm-12 mt-auto ">
              <button type="button" class="btn btn-info  btn-s m-1  "><i class="fa fa-filter"></i>   Filter</button>
              <button type="button" class="btn btn-danger  btn-s m-1"><i class="fas fa-recycle"></i>  Reset</button>

              {/* <input type="submit" name="sumitfilter" className="btn btn-primary" defaultValue="Filter" style={{marginTop: 24}} data-original-title title />
        <a style={{marginTop: 24}} className="btn btn-danger" href="https://rathus.net/administrator/aaa_transactions" data-original-title title>Reset</a> */}
            </div>

          </div>
        </form>

       <div className="row m-3">
  
    <div className="col-md-4" style={{fontSize: 18, background: '#98def1', padding: 5}}>
      <b> Admin Commission:</b> 192382 CHF
    </div>
    <div className="col-md-4" style={{fontSize: 18, background: '#98a5f1', padding: 5}}>
      <b> Agent Commission:</b> No Agent Selected                      </div>
    <div className="col-md-4" style={{fontSize: 18, background: '#f1b798', padding: 5}}>
      <b> Moderator Commission:</b> No Moderator Selected                      </div>
  
</div>
<div className="row m-3">

    <div className="col-md-6" style={{fontSize: 18, background: '#98a5f1', padding: 5}}>
      <b> Agent Balance:</b>                               </div>
    <div className="col-md-6" style={{fontSize: 18, background: '#f1b798', padding: 5}}>
      <b> Moderator Balance:</b>                               </div>

</div>


<div>
<div className="card m-3">
              <div className="card-header">
                <h3 className="card-title">All Aaa Transactions </h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example1" className="table table-striped table-bordered table-xs">
                <thead>
                        <tr className="">
                           <th  width="50">
                            <input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all"/>
                           </th>
                           <th className="th-xs">Full Name</th>
                           <th className="th-xs">Account Number</th>
                           <th className='p-0'>Bank Name</th>
                           <th className='p-0'> ID Type</th>
                           <th className='p-0'> ID Number</th>
                           <th className='p-0'>Telephone</th>
                           <th className='p-0'>Country</th>
                           <th className='p-0'>CHF Amount</th>
                           <th className='p-0'>Exchange Rate</th>
                           <th className='p-0'>Amount Received</th>
                           <th className='p-0'>Reciept</th>
                           <th className='p-0'>Status</th>
                           <th className='p-0'>Sender ID</th>
                           <th>Created By</th>
                           <th>Agent</th>
                           <th>Moderator</th>
                           <th>Options</th> 
                        <th>Action</th>
                        </tr>
                     </thead>
                  <tbody>
                  <tr>
                    <td> <input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all"/></td>
                    <td  >P Rajeswary</td>
                    <td>74584725 </td>
                    <td>BANK OF CEYLON</td>
                    <td></td>
                    <td></td>
                    <td>094</td>
                    <td>Sri Lanka</td>
                    <td>138.9</td>
                    <td>	360.00</td>
                    <td>50000</td>
                    <td><button type="button" class="btn bg-info btn-xs rounded-5 m-1 ">ViewReceipt</button> </td>
                    <td className='bg-success '>Completed</td>
                    <td> 1302</td>
                    <td>Raamoney Admin</td>
                    <td>Trident</td>
                    <td>AIE</td>
                    <td>  <button type="button" class="btn bg-info btn-xs rounded-5 m-1 ">Approve</button>
                    <button type="button" class="btn bg-danger btn-xs rounded-5 m-1 ">Reject</button>
                    </td>
                    <td> 
                     <button className='btn btn-lg text-black p-2'><i class="fas fa-file"></i></button>
                     <button className='btn btn-lg text-gry p-2 '><i class="fas fa-edit"></i></button>
                     <button className='btn btn-lg text-red p-2'><i class="fas fa-trash"></i></button>
                    

                    </td>
                   
                  </tr>
                  <tr>
                    <td> <input type="checkbox" className="flat-red toltip" id="check_all" name="check_all" title="check all"/></td>
                    <td  >P Rajeswary</td>
                    <td>74584725 </td>
                    <td>BANK OF CEYLON</td>
                    <td></td>
                    <td></td>
                    <td>094</td>
                    <td>Sri Lanka</td>
                    <td>138.9</td>
                    <td>	360.00</td>
                    <td>50000</td>
                    <td><button type="button" class="btn bg-info btn-xs rounded-5 m-1 ">ViewReceipt</button> </td>
                    <td className='bg-primary '>Approved</td>
                    <td> 1302</td>
                    <td>Raamoney Admin</td>
                    <td>Trident</td>
                    <td>AIE</td>
                    <td> 
                       <button type="button" class="btn bg-info btn-xs rounded-5 m-1 ">Approve</button>
                    <button type="button" class="btn bg-danger btn-xs rounded-5 m-1 ">Reject</button>
                    </td>
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
