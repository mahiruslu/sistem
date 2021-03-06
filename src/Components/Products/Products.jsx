import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

function Services() {
  const products = [
    {
      id: 1,
      name: "AYAK BAĞLANTI",
      url: "1",
      shortDesc: "Silindir (mm) : 32 - 40 - 50 - 63 - 80 - 100",
      description:
        "Silindir (mm) : 32 - 40 - 50 - 63 - 80 - 100",
    },
    {
      id: 2,
      name: "HİDROLİK BORU KELEPÇE",
      url: "2",
      shortDesc: "",
      description:
        "Tekli Tek Vidalı (06 - 08 - 10 - 12) mm - Tekli Çift Vidalı - Çiftli Çift Vidalı",
    },
    {
      id: 3,
      name: "HİDROLİK HORTUM KELEPÇE",
      url: "3",
      shortDesc: "",
      description:
        "",
    },
    {
      id: 4,
      name: "HİDROLİK DEPO KAPAĞI",
      url: "4",
      shortDesc: "",
      description:
        "",
    },
    {
      id: 5,
      name: "HİDROLİK CAM SEVİYE GÖZÜ",
      url: "6",
      shortDesc: "",
      description:
        "",
    },
    {
      id: 6,
      name: "HİDROLİK SICAKLIK VE YAĞ SEVİYE GÖSTERGESİ METAL",
      url: "7",
      shortDesc: "",
      description:
        "FLG 76 - FLG 127 - FLG 254",
    },
    {
      id: 7,
      name: "HİDROLİK SICAKLIK VE YAĞ SEVİYE GÖSTERGESİ ALÜMİNYUM",
      url: "8",
      shortDesc: "",
      description:
        "FLG 76 - FLG 127 - FLG 254",
    },
    {
      id: 8,
      name: "MİNİ AYAK VE FLANŞ BAĞLANTI",
      url: "9",
      shortDesc: "Silindir (mm): 8/10 12/16 20/25",
      description:
        "Silindir (mm): 8/10 12/16 20/25",
    },
    {
      id: 9,
      name: "HİDROLİK EMİŞ FİLTRESİ",
      url: "10",
      shortDesc: "",
      description:
        "EF-15-PLS / EF-25-PLS / EF-45-PLS / EF-65-PLS / EF-90-PLS / EF-125-PLS / EF-180-PLS / EF-225-PLS / EF-300-PLS / EF-500-PLS",
    },
    {
      id: 10,
      name: "HİDROLİK DEPO KAPAĞI NİKELAJ",
      url: "11",
      shortDesc: "",
      description:
        "",
    },
    {
      id: 11,
      name: "MİNİ EKLEM BAĞLANTI",
      url: "12",
      shortDesc: "Silindir (mm): 8/10 12/16 20/25",
      description:
        "Silindir (mm): 8/10 12/16 20/25",
    },
  ];
  const changeDivStyle = (id) => {
    let getDiv = document.getElementsByName("product-card")[id - 1].className;
    // console.log(getDiv + id);
    document.getElementsByName("product-card")[id - 1].className =
      getDiv === "product-card" ? "product-card active" : "product-card";
  };
  return (
    <div className="products-container">
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productImg={require(`../../Images/Products/${product.url}.jpg`)}
            productName={product.name}
            productInfo={product.shortDesc}
            description={product.description}
            className="product-card"
            onClick={() => changeDivStyle(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
