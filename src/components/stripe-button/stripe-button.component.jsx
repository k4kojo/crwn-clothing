import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51RnlbJ6lMWdDFXgyrFWRXmB4Tsq3llCEtr3Jlh2lfR6OxYxaxNluXdhI1KKZdMioCnEzl7vGmFRTnrjb9k87dEO6006neCb2rd';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
