import React from 'react'

export default function AddTransaction() {
    $('.select2').select2()
  return (
    <div>
     
<section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Aaa Transactions        <small>New Aaa Transactions </small></h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active"><a href="#"> Transaction</a></li>
                  <li class="active"> New </li>
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
                    <h4>Aaa Transactions</h4>
                    <span>New Aaa Transactions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
       <div className="card card-secondary mx-5"  >
  <div className="card-header">
    <h3 className="card-title">General Elements</h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <form>
      <div className="row">
        <div className="col-sm-6">
          {/* text input */}
          <div className="form-group">
            <label>Full Name </label>
            <input type="text" className="form-control" placeholder="Enter ..." />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Account Number</label>
            <input type="text" className="form-control" placeholder="Enter ..."  />
          </div>
        </div>
      </div> 
      
       <div className="row">
        <div className="col-sm-6">
          {/* text input */}
          <div className="form-group">
            <label>Bank Name </label>
            <input type="text" className="form-control" placeholder="Enter ..." />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Identity Card Number</label>
            <input type="text" className="form-control" placeholder="Enter ..."  />
          </div>
        </div>
      </div> 
      
       <div className="row">
        <div className="col-sm-6">
        <div className="form-group">
    <label>Select Agent *
</label>
    <select className="form-control select2" style={{width: '100%'}}>
    <option selected="selected">Senthuran</option>
                <option >Raagold</option>
                <option >Ruban Anna</option>
                <option >Lingam</option>
                <option >Anton Biel</option>
                <option >Moneygram</option>
                <option >Jegan</option>
                <option >Jana Gra</option>
                <option >Sugu Jasi</option>
                <option >Suthan Frieburg</option>
                <option >Selvi Acca</option>
                <option >Raju Anna</option>
                <option >Jasi Lu</option>
                <option >Freecom</option>
                <option >Kumar Anna</option>
                <option >Raa Money</option>
                <option >Paventhy</option>
                <option >Mathan</option>
                <option >Prince Paneer</option>
                <option >Ragu</option>
                <option >Anpu</option>
                <option >Pushpa</option>
                <option>Jasijanath</option>
                <option >Vts</option>
                <option >TPM Suthan Lausan</option>
                <option >So Vithu</option>
                <option >Singaram</option>
                <option >Ramanan</option>
   
    </select>
  </div>
        </div>
        <div className="col-sm-6">
  <div className="form-group">
    <label>country</label>
    <select className="form-control select2" style={{width: '100%'}}>
      <option selected="selected">SRI LANKA</option>
      <option>INDIA</option>
   
    </select>
  </div>
</div>

      </div>
      
        <div className="row">
        <div className="col-sm-6">
          {/* text input */}
          <div className="form-group">
            <label>Telephone * </label>
            <input type="text" className="form-control" placeholder="Enter ..." />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Exchange Rate *</label>
            <input type="text" className="form-control" placeholder="Enter ..."  />
          </div>
        </div>
      </div>  
      
      <div className="row">
        <div className="col-sm-6">
          {/* text input */}
          <div className="form-group">
            <label>Amount To send (CHF) * </label>
            <input type="text" className="form-control" placeholder="Enter ..." />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Amount Received *</label>
            <input type="text" className="form-control" placeholder="Enter ..."  />
          </div>
        </div>
      </div>
   <hr/>
   <div className="row">
        <div className="col-sm-6">
          {/* text input */}
          <div className="form-group">
            <label>Total amount to send * : </label>
            <label className='mx-3 '> NaN</label>
            <div>

            </div>
           
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Total amount to receive * :</label>
                <label className='mx-3 '>NaN</label>
            <div >
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <button type="button" class="btn btn-info  btn-s m-1  "><i class="fa fa-save"></i>   Save</button>
    <button type="button" class="btn btn-info  btn-s m-1"><i class="fas fa-list"></i>  Save and go to list</button>
    <button type="button" class="btn btn-lightblue  btn-s m-1"><i class="fas fa-recycle "></i>  Cancel</button>
</div>



    </form>
  </div>
  {/* /.card-body */}
</div>





</div>
  )
}

