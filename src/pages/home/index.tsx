import { Footer } from '../../components/footer';
import { PayPalButton } from '../../Components/checkout/PayPalButton.jsx';



const HomePage = () => {
  return (
    <div>
      <p className="font-bold">Home Page</p>
      <PayPalButton />
      <Footer />
    </div>
  )
}

export default HomePage