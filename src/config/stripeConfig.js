import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  'pk_test_51S6yCMP31HN2WOmMpNokd674SeBtRE5qOMkbRHSTjAk30GLJjV9XPLKLvKUQEqiV6pT0QFKVhlfhf66tH62EVxJg00HOi7h4b3'
);

export default stripePromise;
