import React, { useEffect, useState } from 'react';

function PayPalButton() {
  const [buttonsRendered, setButtonsRendered] = useState(false);

  useEffect(() => {
    if (!buttonsRendered) {
      // Configuração do botão PayPal
      // eslint-disable-next-line no-undef
      paypal.Buttons().render('#paypal-button-container');
      setButtonsRendered(true);
    }
  }, [buttonsRendered]);

  return (
    <div id="paypal-button-container"></div>
  );
}

export { PayPalButton };
