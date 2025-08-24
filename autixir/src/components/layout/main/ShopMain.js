"use client";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import ProductsPrimary from "@/components/sections/products/ProductsPrimary";
import useSearch from "@/hooks/useSearch";
import filterItems from "@/libs/filterItems";
import getAllProducts from "@/libs/getAllProducts";
import getRangeValue from "@/libs/getRangeValue";
import makeText from "@/libs/makeText";
import CommonContext from "@/providers/CommonContext";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProdavnicaGlavna = ({ naslov, jeSaStrane, tekst, jeAuto, trenutniTabId }) => {
  const sviProizvodi = getAllProducts()?.filter(({ type }) =>
    jeAuto ? type === "auto" : type !== "auto"
  );

  const kategorija = useSearchParams()?.get("category");
  const brend = useSearchParams()?.get("brand");
  const oznaka = useSearchParams()?.get("tag");
  const velicina = useSearchParams()?.get("size");
  const boja = useSearchParams()?.get("color");
  const pretraga = useSearchParams()?.get("search");

  const trenutnaPutanja = usePathname();
  const [rasponVrijednosti, setRasponVrijednosti] = useState(null);

  const maxVelicina = jeAuto ? 200000 : 5000;
  const donjaGranica = jeAuto ? 30000 : 50;
  const gornjaGranica = jeAuto ? 100000 : 1500;

  // podaci iz pretrage
  const {
    trazeniArtikli,
    prikaziPretragu,
    pokreniPretragu,
    postaviStringPretrage,
    startSearch,
    closeSearch,
    prikaziBrzeRezultate,
    setPrikaziBrzeRezultate,
  } = useSearch(sviProizvodi, trenutnaPutanja);

  const proizvodiPrijeFilteraPoCijeni = filterItems(
    sviProizvodi,
    kategorija
      ? "category"
      : brend
      ? "brand"
      : oznaka
      ? "tags"
      : velicina
      ? "size"
      : boja
      ? "color"
      : pretraga
      ? "search"
      : "",
    kategorija
      ? kategorija
      : brend
      ? brend
      : oznaka
      ? oznaka
      : velicina
      ? velicina
      : boja
      ? boja
      : pretraga
      ? pretraga
      : "",
    true
  );

  const filtriraniProizvodi = filterItems(
    proizvodiPrijeFilteraPoCijeni,
    rasponVrijednosti ? "range" : "",
    rasponVrijednosti ? rasponVrijednosti : ""
  );

  useEffect(() => {
    getRangeValue(setRasponVrijednosti, maxVelicina, donjaGranica, gornjaGranica, true);
    setRasponVrijednosti(null);
  }, [
    kategorija,
    oznaka,
    velicina,
    boja,
    pretraga,
    donjaGranica,
    maxVelicina,
    gornjaGranica,
  ]);

  useEffect(() => {
    getRangeValue(setRasponVrijednosti, maxVelicina, donjaGranica, gornjaGranica);
  }, [donjaGranica, gornjaGranica, maxVelicina]);

  return (
    <main>
      <HeroPrimary
        title={
          kategorija
            ? `Kategorija: ${makeText(kategorija)}`
            : brend
            ? `Brend: ${makeText(brend)}`
            : velicina
            ? `Veličina proizvoda: ${makeText(velicina)}`
            : oznaka
            ? `Oznaka: ${makeText(oznaka)}`
            : boja
            ? `Boja proizvoda: ${makeText(boja)}`
            : pretraga
            ? `Pretraga: ${makeText(pretraga)}`
            : naslov
            ? naslov
            : "Shop"
        }
        text={tekst ? tekst : "Shop"}
        type={jeSaStrane === "primary" ? 2 : 3}
        isCapitalize={brend ? true : false}
      />

      <CommonContext
        value={{
          filteredProducts: filtriraniProizvodi,
          searchedItems: trazeniArtikli,
          handleSearch: pokreniPretragu,
          handleSearchString: postaviStringPretrage,
          startSearch,
          closeSearch,
          isShowSearch: prikaziPretragu,
          isShowQuickSearchResult: prikaziBrzeRezultate,
          setIsShowQuickSearchResult: setPrikaziBrzeRezultate,
          isShop: true,
          currentPath: trenutnaPutanja,
          isCar: jeAuto,
          category: kategorija,
          brand: brend,
          tag: oznaka,
          size: velicina,
        }}
      >
        <ProductsPrimary
          isSidebar={jeSaStrane}
          currentTapId={trenutniTabId}
          isCar={jeAuto}
        />
      </CommonContext>
    </main>
  );
};

export default ProdavnicaGlavna;
