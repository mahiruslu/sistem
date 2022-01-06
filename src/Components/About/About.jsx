import React from "react";
import "./About.css";
import backgroundImage from "../../Images/aboutBG.jpg";

const styles = {
  backgroundImage: `url(${backgroundImage})`
};

function About() {
  return(
   <div className="about-container" style={styles}>
      <div className="about-left-container">
        <div className="about-left">
          <h1>Vizyon</h1>
          <p>
          Firmamızda kalitenin bir yaşam biçimi olarak, en iyi kalite, zamanında sevkiyat ve her daim gelişen teknoloji ile çalışan bir dünya markası haline gelmektir.
          Bu amaç doğrultusunda;
          Devamlı değişim ve yenilik;
          Ürettiğimiz mal ve hizmet kalitesini devamlı arttırmak;
          Sektörümüzün mihenk taşı olmak;
          Müşterilerimizle uzun vadeli birliktelik oluşturmak ve bunu devamlı taze tutmaktır.
          </p>
        </div>
      </div>
      <div className="about-right-container">
        <div className="about-right">
          <h1>Misyon</h1>
          <p>
          Toplam Kalite Yönetimini esas alarak müşterilerimize mükemmel ürün, zamanında sevkiyat ve en iyi kaliteyi sağlayarak hizmet sunmak, yeni teknolojileri kullanarak ve geliştirerek ürünlerimizi müşterilerimize en uygun fiyatlarla Dünyadaki ve Türkiye’deki hedef pazarlarda rekabet edebilir ürün ve hizmet sunmaktır.
          </p>
        </div>
      </div>
    </div>
)};

export default About;
