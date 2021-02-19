import React, {useRef, useEffect, useState} from 'react';
import MoneyInput from './MoneyInput';

export default function PayPal() {

    const paypal = useRef();
    let [success, setSucess] = useState(false);
    const amount = document.getElementById("donationamount").value
    console.log(amount);


    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "Capture",
                    purchase_units: [
                        {
                            description: "Donation",
                            amount: {
                                currency_code: "CAD",
                                value: `${amount}.00`
                            }

                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                success = true;
                console.log("Succesful order: " + order);
                return(
                    <div>
                        <h1>Succesful order</h1>
                    </div>
                )

            },
            onError: (err) => {
                console.log(err)
            }

        }).render(paypal.current)
    }, [])

    return (
        <div>
            {success ? (
                <div className="Sucess" >
                    <h1>Succesful order</h1>
                </div>
            ) : (
                <div ref={paypal}></div>
            )}
        </div>

    )
}