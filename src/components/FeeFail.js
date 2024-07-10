import React, { useState } from 'react';

function Fee() {
    const [number, setNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [zip, setZip] = useState('');
    const [ranNum] = useState(Math.floor(Math.random() * (16 - 1 + 1)) + 1);
    const [setChecked] = useState(false);
    const [sameAdd, setAddress] = useState('');

    const handleCardNum = (e) => {
        const inputVal = e.target.value.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");
    
        if (inputNumbersOnly.length > 16) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }
    
        const splits = inputNumbersOnly.match(/.{1,4}/g); 
        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join(" ");
        }
        setNumber(spacedNumber);
    };

    const handleExpiration = (e) => {
        const value = e.target.value.replace(
            /[^0-9]/g, ''
        ).replace(
            /^([2-9])$/g, '0$1'
        ).replace(
            /^(1{1})([3-9]{1})$/g, '0$1/$2'
        ).replace(
            /^0{1,}/g, '0'
        ).replace(
            /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2'
        );

        setExpiry(value);
    };

    const handleCvv = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setCvv(value);
    };

    const handleZip = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setZip(value);
    };


    const handleChecked = (e) => {
        if (e.target.checked) {
            let sameAddress = document.getElementById("billingAddress").value;
            setAddress(sameAddress);
        }
        setChecked(e.target.checked);
    };

    const handleInvalidDate = (e) => {
        if (expiry === '0' || expiry === '01' || expiry === '1' || expiry === '02' || expiry === '03' || expiry === '04' || expiry === '05' || expiry === '06' || expiry === '07' || expiry === '08' || expiry === '09' || expiry === '10' || expiry === '11' || expiry === '12') {
            e.preventDefault();
        }
    };

    return (
        <section>
            <div>
                <h1>Payment Information</h1>
                <p>Payment Failed, please re-enter information.</p>
                <form action="/fee" method="POST">
                    <div>
                        <div>
                            <label htmlFor="paymentType">Payment Options: &nbsp;
                                <select name="paymentType" id="paymentType">
                                    <option value="creditCard">Credit Card(s)</option>
                                    <option value="cash">Cash</option>
                                    <option value="check">Check</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cardBrand">Brand: &nbsp;
                                <select name="cardBrand" id="cardBrand">
                                    <option value="mastercard">Mastercard</option>
                                    <option value="visa">Visa</option>
                                    <option value="american-express">American Express</option>
                                    <option value="jcb">JCB</option>
                                    <option value="discover">Discover</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cardNumber">Card Number: &nbsp;
                                <input id="cardNumber" name="cardNumber" placeholder="Card Number (Ex: 1234 4567 8901 2345)" type="text" value={number} onChange={handleCardNum} required className="inp-text-input" autoComplete="off" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="expDate">Expiry Date: &nbsp;
                                <input id="expDate" name="expDate" placeholder="MM / YY (Ex: 09/99)" type="text" value={expiry} onChange={handleExpiration} required className="inp-text-input" autoComplete="off" maxLength="5" />
                                {expiry === '0' || expiry === '01' || expiry === '1' || expiry === '02' || expiry === '03' || expiry === '04' || expiry === '05' || expiry === '06' || expiry === '07' || expiry === '08' || expiry === '09' || expiry === '10' || expiry === '11' || expiry === '12' ? <div>Please re-enter a valid date.</div> : null}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cardHolder">Card Holder: &nbsp;
                                <input id="cardHolder" name="cardHolder" placeholder="Card Holder (Ex: John Doe)" type="text" required className="inp-text-input" autoComplete="off" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV: &nbsp;
                                <input id="cvv" name="cvv" placeholder="CVV/CVC (Ex: 123)" value={cvv} onChange={handleCvv} type="text" required className="inp-text-input" autoComplete="off" maxLength="4" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="billingAddress">Address: &nbsp;
                                <input id="billingAddress" name="billingAddress" placeholder="Address (Ex: 1234 Valley Rd)" type="text" required className="inp-text-input" autoComplete="off" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="zipCode">Zip Code: &nbsp;
                                <input id="zipCode" name="zipCode" placeholder="Zip Code (Ex: 01923)" value={zip} onChange={handleZip} type="text" required className="inp-text-input" autoComplete="off" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="dinerNum">Diner #: {ranNum} &nbsp;
                                <input type="hidden" id="dinerNum" name="dinerNum" value={ranNum} />
                            </label>
                        </div>
                        <div>
                            <label>Is the billing address above the same as the mailing address? &nbsp;
                                <input type="checkbox" id="mailingAddress" name="mailingAddress" value={sameAdd} onChange={handleChecked} />
                            </label>
                        </div>
        
                        <input type="submit" value="Submit" className="inp-text-input-submit-payment" onClick={handleInvalidDate} />
                        {expiry === '0' || expiry === '01' || expiry === '1' || expiry === '02' || expiry === '03' || expiry === '04' || expiry === '05' || expiry === '06' || expiry === '07' || expiry === '08' || expiry === '09' || expiry === '10' || expiry === '11' || expiry === '12' ? <div>Please re-enter a valid date.</div> : null}
                    </div>
                    <div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Fee;
