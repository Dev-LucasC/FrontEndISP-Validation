import React, { useEffect, useRef, useState } from 'react';

function PayPalButton() {
  const [amount, setAmount] = useState(0);
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    if (buttonContainerRef.current.childNodes.length === 0) {
      // eslint-disable-next-line no-undef
      paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
                currency_code: 'BRL'
              }
            }]
          });
        }
      }).render(buttonContainerRef.current);
    }
  }, [amount]);

  return (
    <div>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <div ref={buttonContainerRef}></div>
    </div>
  );
}

export { PayPalButton };
