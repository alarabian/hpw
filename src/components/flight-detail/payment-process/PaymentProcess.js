import Image from "next/image";
import Link from "next/link";
import React from "react";

const PaymentProcess = () => {
  return (
    <>
      <div className="paymentProcess">
        <p>
          By clicking on continue, I confirm that I have read, understood, and
          agree with the <Link href={"/"}>Fare Rules</Link>,{" "}
          <Link href={"/privacy"}>Privacy Policy</Link> and{" "}
          <Link href={"/terms-of-use"}>Terms of Use</Link> .
        </p>
        <span>
          <strong>100% </strong>Safe Payment Process
        </span>
        <div className="paymentLogo">
          <Image src={"/assets/images/visa.PNG"} alt="Payment" width={120} height={60} />
          <Image src={"/assets/images/master.PNG"} alt="Payment" width={120} height={60} />
          <Image src={"/assets/images/safe.PNG"} alt="Payment" width={120} height={60} />
        </div>
      </div>
    </>
  );
};

export default PaymentProcess;
