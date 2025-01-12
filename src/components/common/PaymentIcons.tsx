import Visa from "@/assets/svg/visa.svg?react";
import Mastercard from "@/assets/svg/mastercard.svg?react";
import Paypal from "@/assets/svg/paypal.svg?react";
import ApplePay from "@/assets/svg/apple-pay.svg?react";
const PaymentIcons = () => {
  return (
    <div className="flex items-center gap-6">
      <Visa className="sm:h-10 sm:w-10 w-5 h-5" />
      <Mastercard className="sm:h-10 sm:w-10 w-5 h-5" />
      <Paypal className="sm:h-10 sm:w-10 w-5 h-5" />
      <ApplePay className="sm:h-10 sm:w-10 w-5 h-5" />
    </div>
  );
};

export default PaymentIcons;
