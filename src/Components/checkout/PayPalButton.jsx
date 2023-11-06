import React, { useEffect, useRef } from 'react';

function PayPalButton() {
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    // Verifica se o botão PayPal já foi renderizado
    if (buttonContainerRef.current.childNodes.length === 0) {
      // Configuração do botão PayPal
      // eslint-disable-next-line no-undef
      paypal.Buttons().render(buttonContainerRef.current);
    }
  }, []);

  return (
    <div ref={buttonContainerRef}></div>
  );
}

export { PayPalButton };
