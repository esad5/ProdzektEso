import Link from "next/link";
import React from "react";

const RegisterPrimary = () => {
  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">
                Registrujte <br />
                Svoj Račun
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Sit aliquid, Non distinctio vel iste.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <form action="#" className="ltn__form-box contact-form-box">
                <input type="text" name="firstname" placeholder="Ime" />
                <input type="text" name="lastname" placeholder="Prezime" />
                <input type="text" name="email" placeholder="Email*" />
                <input
                  type="password"
                  name="password"
                  placeholder="Lozinka*"
                />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Potvrdite Lozinku*"
                />
                <label className="checkbox-inline">
                  <input type="checkbox" /> Dajem saglasnost Herboil-u da obrađuje
                  moje lične podatke u svrhu slanja personaliziranog marketinškog
                  materijala u skladu sa obrascem saglasnosti i politikom privatnosti.
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" /> Klikom na {`"kreiraj račun"`}, dajem
                  saglasnost na politiku privatnosti.
                </label>
                <div className="btn-wrapper">
                  <button
                    className="theme-btn-1 btn reverse-color btn-block"
                    type="submit"
                  >
                    KREIRAJTE RAČUN
                  </button>
                </div>
              </form>
              <div className="by-agree text-center">
                <p>Kreiranjem računa slažete se sa našim:</p>
                <p>
                  <Link href="#">
                    USLOVIMA KORIŠTENJA &nbsp; &nbsp; | &nbsp; &nbsp; POLITIKOM
                    PRIVATNOSTI
                  </Link>
                </p>
                <div className="go-to-btn mt-50">
                  <Link href="/login">VEĆ IMATE RAČUN?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPrimary;
