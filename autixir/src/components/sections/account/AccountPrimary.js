import Link from "next/link";
import React from "react";

const AccountPrimary = () => {
  return (
    <div className="liton__wishlist-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- PRODUCT TAB AREA START --> */}
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="ltn__tab-menu-list mb-50">
                      <div className="nav">
                        <Link
                          className="active show"
                          data-bs-toggle="tab"
                          href="#liton_tab_1_1"
                        >
                          Kontrolna tabla <i className="fas fa-home"></i>
                        </Link>
                        <Link data-bs-toggle="tab" href="#liton_tab_1_2">
                          Narudžbe <i className="fas fa-file-alt"></i>
                        </Link>
                        <Link data-bs-toggle="tab" href="#liton_tab_1_3">
                          Preuzimanja <i className="fas fa-arrow-down"></i>
                        </Link>
                        <Link data-bs-toggle="tab" href="#liton_tab_1_4">
                          Adresa <i className="fas fa-map-marker-alt"></i>
                        </Link>
                        <Link data-bs-toggle="tab" href="#liton_tab_1_5">
                          Detalji računa <i className="fas fa-user"></i>
                        </Link>
                        <Link href="/login">
                          Odjava <i className="fas fa-sign-out-alt"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="liton_tab_1_1"
                      >
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            Zdravo <strong>UserName</strong> (nije{" "}
                            <strong>UserName</strong>?{" "}
                            <small>
                              <Link href="/login">Odjava</Link>
                            </small>{" "}
                            )
                          </p>
                          <p>
                            Sa vaše kontrolne table možete pregledati svoje{" "}
                            <span>nedavne narudžbe</span>, upravljati{" "}
                            <span>adresama za isporuku i naplatu</span>, i{" "}
                            <span>izmijeniti lozinku i detalje računa</span>.
                          </p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_2">
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Narudžba</th>
                                  <th>Datum</th>
                                  <th>Status</th>
                                  <th>Ukupno</th>
                                  <th>Akcija</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Jun 22, 2025</td>
                                  <td>Na čekanju</td>
                                  <td>3000KM</td>
                                  <td>
                                    <Link href="/cart">Pregled</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Juli 22, 2025</td>
                                  <td>Odobreno</td>
                                  <td>200KM</td>
                                  <td>
                                    <Link href="/cart">Pregled</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>August 12, 2025</td>
                                  <td>Na čekanju</td>
                                  <td>990KM</td>
                                  <td>
                                    <Link href="/cart">Pregled</Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_3">
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Proizvod</th>
                                  <th>Datum</th>
                                  <th>Istek</th>
                                  <th>Preuzimanje</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Carsafe - PSD šablon za servis automobila</td>
                                  <td>Nov 22, 2020</td>
                                  <td>Da</td>
                                  <td>
                                    <Link href="#">
                                      <i className="far fa-arrow-to-bottom mr-1"></i>{" "}
                                      Preuzmi fajl
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Carsafe - HTML šablon za servis automobila</td>
                                  <td>Nov 10, 2020</td>
                                  <td>Da</td>
                                  <td>
                                    <Link href="#">
                                      <i className="far fa-arrow-to-bottom mr-1"></i>{" "}
                                      Preuzmi fajl
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Carsafe - WordPress tema za servis automobila</td>
                                  <td>Nov 12, 2020</td>
                                  <td>Da</td>
                                  <td>
                                    <Link href="#">
                                      <i className="far fa-arrow-to-bottom mr-1"></i>{" "}
                                      Preuzmi fajl
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_4">
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            Sljedeće adrese će se koristiti po defaultu na stranici za naplatu.
                          </p>
                          <div className="row">
                            <div className="col-md-6 col-12 learts-mb-30">
                              <h4>
                                Adresa za naplatu{" "}
                                <small>
                                  <Link href="#">uredi</Link>
                                </small>
                              </h4>
                              <address>
                                <p>
                                  <strong>Almir Mehagić</strong>
                                </p>
                                <p>
                                  Ceravačka brda <br />
                                  Bihać
                                </p>
                                <p>Mobilni: (387) 456-7890</p>
                              </address>
                            </div>
                            <div className="col-md-6 col-12 learts-mb-30">
                              <h4>
                                Adresa za isporuku{" "}
                                <small>
                                  <Link href="#">uredi</Link>
                                </small>
                              </h4>
                              <adress>
                                <p>
                                  <strong>Almir Mehagić</strong>
                                </p>
                                <p>
                                  Ceravačka brda <br />
                                  Bihac
                                </p>
                                <p>Mobilni: (387) 456-7890</p>
                              </adress>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="liton_tab_1_5">
                        <div className="ltn__myaccount-tab-content-inner">
                          <p>
                            Sljedeće adrese će se koristiti po defaultu na stranici za naplatu.
                          </p>
                          <div className="ltn__form-box">
                            <form action="#">
                              <div className="row mb-50">
                                <div className="col-md-6">
                                  <label>Ime:</label>
                                  <input type="text" name="ltn__name" />
                                </div>
                                <div className="col-md-6">
                                  <label>Prezime:</label>
                                  <input type="text" name="ltn__lastname" />
                                </div>
                                <div className="col-md-6">
                                  <label>Prikazano ime:</label>
                                  <input
                                    type="text"
                                    name="ltn__lastname"
                                    placeholder="Ime"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label>Prikazani email:</label>
                                  <input
                                    type="email"
                                    name="ltn__lastname"
                                    placeholder="example@example.com"
                                  />
                                </div>
                              </div>
                              <fieldset>
                                <legend>Promjena lozinke</legend>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label>
                                      Trenutna lozinka (ostaviti prazno za nepromijenjeno):
                                    </label>
                                    <input type="password" name="ltn__name" />
                                    <label>
                                      Nova lozinka (ostaviti prazno za nepromijenjeno):
                                    </label>
                                    <input
                                      type="password"
                                      name="ltn__lastname"
                                    />
                                    <label>Potvrdi novu lozinku:</label>
                                    <input
                                      type="password"
                                      name="ltn__lastname"
                                    />
                                  </div>
                                </div>
                              </fieldset>
                              <div className="btn-wrapper">
                                <button
                                  type="submit"
                                  className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                >
                                  Sačuvaj promjene
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- PRODUCT TAB AREA END --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPrimary;
