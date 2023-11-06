import React, { useEffect, useRef, useState } from 'react';

function PayPalButton() {
  const [amount, setAmount] = useState(5);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    // Limpa o contêiner do botão antes de renderizar um novo botão
    buttonContainerRef.current.innerHTML = '';

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
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          setPaymentSuccessful(true);
        });
      }
    }).render(buttonContainerRef.current);
  }, [amount]);

  return (
    <div>
      <input type="number" value={amount} onChange={e => setAmount(Math.max(5, Number(e.target.value)))} min="5" step="0.01" />
      <div ref={buttonContainerRef}></div>
      {paymentSuccessful && <p>Obrigado pela sua doação!</p>}
    </div>
  );
}

export { PayPalButton };
