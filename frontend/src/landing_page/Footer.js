import { grey } from "@mui/material/colors";
import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p className="text-muted " style={{ fontSize: "14px" }}>
              &copy; 2010 - 2025, Not Zerodha Broking Ltd.<br></br> All rights
              reserved.
            </p>
          </div>
          <div className="col">
            <p className="fs-5">Company</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="text-decoration-none text-muted">
                About
              </a>
              <a href="" className="text-decoration-none text-muted">
                Products
              </a>
              <a href="" className="text-decoration-none text-muted">
                Pricing
              </a>
              <a href="" className="text-decoration-none text-muted">
                Referral programme
              </a>
              <a href="" className="text-decoration-none text-muted">
                Careers
              </a>
              <a href="" className="text-decoration-none text-muted">
                Zerodha.tech
              </a>
              <a href="" className="text-decoration-none text-muted">
                Open source
              </a>
              <a href="" className="text-decoration-none text-muted">
                Press & media
              </a>
              <a href="" className="text-decoration-none text-muted">
                Zerodha Cares (CSR)
              </a>
            </div>
          </div>
          <div className="col">
            <p className="fs-5 ">About</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="text-decoration-none text-muted">
                Contact
              </a>
              <a href="" className="text-decoration-none text-muted">
                Support portal
              </a>
              <a href="" className="text-decoration-none text-muted">
                Z-Connect blog
              </a>
              <a href="" className="text-decoration-none text-muted">
                List of charges
              </a>
              <a href="" className="text-decoration-none text-muted">
                Downloads & resources
              </a>
              <a href="" className="text-decoration-none text-muted">
                Videos
              </a>
              <a href="" className="text-decoration-none text-muted">
                Market overview
              </a>
              <a href="" className="text-decoration-none text-muted">
                How to file a complaint?
              </a>
              <a href="" className="text-decoration-none text-muted">
                Status of your complaints
              </a>
            </div>
          </div>
          <div className="col">
            <p className="fs-5 ">Account</p>
            <div className="d-flex flex-column gap-2">
              <a href="" className="text-decoration-none text-muted">
                Open an account
              </a>
              <a href="" className="text-decoration-none text-muted">
                Fund transfer
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <a href="" style={{ textDecoration: "none" }}>
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a href="" style={{ textDecoration: "none" }}>
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF{" "}
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances{" "}
          </p>

          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>{" "}
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.{" "}
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.{" "}
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              create a ticket here{" "}
            </a>
            .
          </p>
          <div className="d-flex justify-content-center flex-wrap p-3">
            <a href="" className="text-decoration-none text-muted mx-3">
              NSE{" "}
            </a>

            <a href="" className="text-decoration-none text-muted mx-3">
              BSE{" "}
            </a>

            <a href="" className="text-decoration-none text-muted mx-3">
              MCX{" "}
            </a>

            <a href="" className="text-decoration-none text-muted mx-3">
              Terms & conditions{" "}
            </a>

            <a href="" className="text-decoration-none text-muted mx-3">
              Policies & procedures{" "}
            </a>

            <a href="" className="text-decoration-none text-muted mx-3">
              Privacy policy{" "}
            </a>

            <a href="" className="text-decoration-none text-muted mx-3">
              Disclosure{" "}
            </a>

            <a href="" className="text-decoration-none text-muted mx-3">
              For investor's attention{" "}
            </a>

            <a href="" className="text-decoration-none text-muted mx-3">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
