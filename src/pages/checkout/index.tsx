import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook
import CheckoutHero from "../../components/Checkout/Chero";
import CustomerInfo from "../../components/Checkout/CustomerInfoForm";
import PaymentMethod from "../../components/Checkout/PaymentMethod";
import OrderSummary from "../../components/Checkout/OderSummmary/OrderSummary";
import { Container } from "../../components/common/Container";
import Input from "../../components/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { useCart } from "../../hooks/useCart";

export default function Checkout() {
  const { cart, totalPrice } = useCart();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // State for payment method details
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("cash");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Handle form submission and validation
  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    
    const isLoggedIn = true; 

    if (!isLoggedIn) {
      alert("Please login first to place an order.");
      navigate('/login'); 
      return; 
    }

    
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return; 
    }
    
    
    setTimeout(() => {
      alert("Order placed successfully! (Mock)");
      // TODO: Call clearCart() function here to empty the cart
      navigate('/'); // Redirect to home page
    }, 1000);
  };

  return (
    <>
      <CheckoutHero />

      <Container className="py-12">
        {/* Main form wrapper to handle submit event */}
        <form
          onSubmit={handlePlaceOrder}
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >
          {/* LEFT SIDE: Form Fields */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* CUSTOMER INFO */}
          
            <CustomerInfo />

            {/* SHIPPING ADDRESS */}
            <div
              className="
                bg-white
                rounded-3xl
                border
                border-secondary/10
                shadow-sm
                p-6
                transition-all
                duration-300
                hover:border-accent
                hover:shadow-xl
              "
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                {t("checkout.shippingAddress")}
              </h2>

              <div className="space-y-4">
                {/* Added 'required' attribute */}
                <Input 
                  required
                  placeholderKey="checkout.streetAddressPlaceholder" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Added 'required' attribute */}
                  <Input 
                    required
                    placeholderKey="checkout.cityPlaceholder" 
                  />
                  
                  {/* Added 'required' attribute */}
                  <select
                    required
                    className="
                      w-full
                      px-4
                      py-2.5
                      bg-background
                      border
                      border-secondary/20
                      outline-none
                      transition-all
                      duration-200
                      text-primary
                      focus:border-accent
                      focus:ring-1
                      focus:ring-accent
                      rounded-md
                    "
                  >
                    <option value="">{t("checkout.countryPlaceholder")}</option>
                    <option value="US">United States</option>
                    <option value="SY">Syria</option>
                    <option value="TR">Turkey</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
              cardHolder={cardHolder}
              setCardHolder={setCardHolder}
              expiryDate={expiryDate}
              setExpiryDate={setExpiryDate}
              cvv={cvv}
              setCvv={setCvv}
            />

          </div>

          {/* RIGHT SIDE: Order Summary */}
          <OrderSummary
            items={cart}
            totalPrice={totalPrice()}
          />
          
        </form>
      </Container>
    </>
  );
}