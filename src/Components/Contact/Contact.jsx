import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMailBulk,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import './Contact.css'

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const toastifySuccess = () => {
    toast.success("Mesajınız bize ulaştı! En kısa sürede size dönüş sağlayacağız.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };
  const toastifyError = () => {
    toast.error(
      "Mesajınız gönderilemedi. Daha sonra tekrar deneyebilir, mail adresimize direkt ulaşmayı deneyeyebilir ya da telefon numaramızdan ulaşabilirsiniz.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "submit-feedback error",
        toastId: "notifyToast",
      }
    );
  };
  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        "service_r6d75na",
        "template_k6nam7t",
        templateParams,
        "user_xB9Qf7kX1ChmxddSmBRip"
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(`e`, e.message);
      toastifyError();
    }
  };

  return (
    <div className="contact-container">
     
      <div className="conctact-info-container">
        <div className="contact-info contact-card">
          <div className="contact-info-top">

          <div className="contact-message">İletişim Bilgilerimiz</div>
          <div className="col">
            <a href="tel:+90 539 569 22 00"   target="_blank">
              <FontAwesomeIcon icon={faPhone} id="faIcon" />
              0 539 569 22 00
            </a>
          </div>
          <div className="col">
            <a href="https://wa.me/905395692200?chat"   target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} id="faIcon" />
              Bize Whatsapp'tan yazın.
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.instagram.com/sistemmakinakalip/"
                target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} id="faIcon" />
              Instagram'da bizi takip edin.
            </a>
          </div>
          <div className="col">
            <a href="mailto:bilgi@sistemmakinakalip.com"   target="_blank">
              <FontAwesomeIcon icon={faMailBulk} id="faIcon" />
              bilgi@sistemmakinakalip.com
            </a>
          </div>
          </div>
          <div className="contact-info-bottom">
          <div className="contact-message"> Adresimiz</div>
          <div className="col">
            <a href="https://goo.gl/maps/ptpaAApjLQhYCoj46" target="_blank">
              <FontAwesomeIcon icon={faLocationArrow} id="faIcon" />
              Horozluhan mah. Selçuklu / Konya
            </a>
          </div>
          </div>
        </div>

        <div className="contact-form contact-card">
          <div className="contact-message">Bize ulaşın</div>
          <form className="contact-form-group" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "İsminizi giriniz.",
                    },
                    maxLength: {
                      value: 30,
                      message: "30 karakterden az girmelisiniz.",
                    },
                  })}
                  className="form-control formInput"
                  placeholder="İsminiz"
                />
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className="form-control"
                  placeholder="Email adresiniz"
                ></input>
                {errors.email && (
                  <span className="errorMessage">
                    Lütfen mail adresinizi doğru girdiğinizden emin olun!
                  </span>
                )}
              </div>
            </div>
            {/* Row 2 of form */}
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Konu girmelisiniz.",
                    },
                    maxLength: {
                      value: 75,
                      message: "75 karakteri aşmamalı",
                    },
                  })}
                  className="form-control formInput"
                  placeholder="Konu"
                ></input>
                {errors.subject && (
                  <span className="errorMessage">{errors.subject.message}</span>
                )}
              </div>
            </div>
            {/* Row 3 of form */}
            <div className="row formRow">
              <div className="col">
                <textarea
                  rows={3}
                  {...register("message", {
                    required: true,
                  })}
                  className="form-control formInput"
                  placeholder="Mesajınızı buraya girebilirsiniz."
                ></textarea>
                {errors.message && (
                  <span className="errorMessage">
                    Mesaj alanını boş bırakmayın!
                  </span>
                )}
              </div>
            </div>
            <Button variant="outlined" color="primary" type="submit">
              Gönder
            </Button>
          </form>
        </div>
      </div>
      <div className="contact-map contact-map-card">
        <iframe
          // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA3q7hmvxsGPH1O8zOvh634s7V0Zl00J64&q=Horozluhan+Konya,Istanbul+Turkey"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.939469818937!2d32.51061511549424!3d37.931844510879614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08fb50e68bdf3%3A0x8e1d314d059d7d71!2sHorozluhan%2C%20Demirtepe%20Sk.%20No%3A12%2C%2042110%20Horozluhan%20Osb%2FSel%C3%A7uklu%2FKonya!5e0!3m2!1str!2str!4v1640248472327!5m2!1str!2str"
          width="750"
          height="250"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="harita"
        ></iframe>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
