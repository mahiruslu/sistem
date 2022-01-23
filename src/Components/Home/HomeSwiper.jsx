import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

function HomeSwiper() {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <p>
            Sistem makine kalıp 1999 yılında saç metal kalıp üretimi yaparak
            faaliyetine başlamıştır. Daha sonra sanayimizin genellikle
            yurtdışından ithal ettiği ve yurtiçi pazarda eksikliği hissedilen
            hidrolik ve pnömatik malzemelerin imalatına yönelmiştir.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Vizyon</h1>
          <p>
            Firmamızda kalitenin bir yaşam biçimi olarak, en iyi kalite,
            zamanında sevkiyat ve her daim gelişen teknoloji ile çalışan bir
            dünya markası haline gelmektir. Bu amaç doğrultusunda; Devamlı
            değişim ve yenilik; Ürettiğimiz mal ve hizmet kalitesini devamlı
            arttırmak; Sektörümüzün mihenk taşı olmak; Müşterilerimizle uzun
            vadeli birliktelik oluşturmak ve bunu devamlı taze tutmaktır.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Misyon</h1>
          <p>
            Toplam Kalite Yönetimini esas alarak müşterilerimize mükemmel ürün,
            zamanında sevkiyat ve en iyi kaliteyi sağlayarak hizmet sunmak, yeni
            teknolojileri kullanarak ve geliştirerek ürünlerimizi
            müşterilerimize en uygun fiyatlarla Dünyadaki ve Türkiye’deki hedef
            pazarlarda rekabet edebilir ürün ve hizmet sunmaktır.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSwiper;
