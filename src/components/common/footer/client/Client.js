import Image from "next/image";
import Link from "next/link";
import React from "react";

const Client = () => {
  return (
    <>
      <section className="clientSec">
        <div className="container">
          <div className="client">
            <ul>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/images/client/1.png"}
                    alt="Client"
                    width={150}
                    height={55}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/images/client/2.png"}
                    alt="Client"
                    width={150}
                    height={55}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/images/client/3.jpg"}
                    alt="Client"
                    width={150}
                    height={55}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/images/client/4.png"}
                    alt="Client"
                    width={150}
                    height={55}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/images/client/5.png"}
                    alt="Client"
                    width={150}
                    height={55}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/assets/images/client/6.png"}
                    alt="Client"
                    width={150}
                    height={55}
                  ></Image>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
