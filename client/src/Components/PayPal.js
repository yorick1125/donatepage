import React, {useRef, useEffect} from 'react';
import MoneyInput from './MoneyInput';

export default function PayPal() {

    const paypal = useRef();
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
                console.log("Succesful order: " + order);

            },
            onError: (err) => {
                console.log(err)
            }

        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}