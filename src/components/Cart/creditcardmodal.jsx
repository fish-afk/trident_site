import React from 'react'
import { useCart } from 'react-use-cart';


export default function Creditcardmodal() {
const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    } = useCart();
  return (
      
    <React.Fragment>
        
        <div className="container bg-secondary mt-5">
        <h4 className="guide2 text-warning" style={{textDecoration: "underline"}}>Billing information</h4>
    <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <script src='https://js.stripe.com/v2/' type='text/javascript'></script>
          <form accept-charset="UTF-8" action="/" className="require-validation" data-cc-on-file="false" data-stripe-publishable-key="pk_bQQaTxnaZlzv4FnnuZ28LFHccVSaj" id="payment-form" method="post"><div style={{margin:0,padding:0,display:"inline"}}><input name="utf8" type="hidden" value="✓" /><input name="_method" type="hidden" value="PUT" /><input name="authenticity_token" type="hidden" value="qLZ9cScer7ZxqulsUWazw4x3cSEzv899SP/7ThPCOV8=" /></div>
            <div className='form-row'>
              <div className='col-xs-12 form-group required'>
                <label className='control-label'>Name on Card</label>
                <input className='form-control' size='90' type='text'/>
              </div>
            </div>
            <div className='form-row'>
              <div className='col-xs-12 form-group card required'>
                <label className='control-label'>Card Number</label>
                <input autoComplete='off' className='form-control card-number' size='90' type='text'/>
              </div>
            </div>
            <div className='form-row'>
              <div className='col-xs-4 form-group cvc required'>
                <label className='control-label'>CVC</label>
                <input autoComplete='off' className='form-control card-cvc' placeholder='ex. 311' size='4' type='text'/>
              </div>
              <div className='col-xs-4 form-group expiration required'>
                <label className='control-label'>Expiration</label>
                <input className='form-control card-expiry-month' placeholder='MM' size='2' type='text'/>
              </div>
              <div className='col-xs-4 form-group expiration required'>
                <label className='control-label'> </label>
                <input className='form-control card-expiry-year' placeholder='YYYY' size='4' type='text'/>
              </div>
            </div>
            <div>
            <input autoComplete='off' className='form-control card-number mt-3'
             placeholder="Address Line 1" size='90' type='text'/>
            <input autoComplete='off' className='form-control card-number mt-3'
             placeholder="Address Line 2" size='90' type='text'/>
            <input autoComplete='off' className='form-control card-number mt-3 mb-3'
             placeholder="Postal code" size='90' type='text'/>
             <input autoComplete='off' className='form-control card-number mt-3 mb-3'
             placeholder="City" size='90' type='text'/>
            </div>
            <div className='form-row'>
              <div className='col-md-12'>
                <div className='form-control total bg-info'>
                  Total:
                  <span className='amount'>${cartTotal}</span>
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='col-md-12 form-group'>
                <button className='form-control btn btn-primary submit-button' type='submit'>Pay »</button>
              </div>
            </div>
            <div className='form-row'>
              <div className='col-md-12 error form-group hide'>
                <div className='alert-danger alert'>
                  Please correct the errors and try again.
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='col-md-4'></div>
    </div>
</div>



    </React.Fragment>
  );
}
