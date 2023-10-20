import "./styles.css";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FormFields } from "./types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: yup
      .string()
      .email("Insira um e-mail válido")
      .required("Campo obrigatório"),
    text: yup.string().required("Campo obrigatório"),
  })
  .required();

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormFields) => console.log(data);

  return (
    <section className="footer-container flex justify-center items-center flex-col w-full pt-8 pb-14 relative">
      <h1 className="font-extrabold text-white text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8">
        Contato
      </h1>
      <div className="flex justify-center items-center flex-col md:grid md:grid-cols-2">
        <div className="flex justify-center items-center flex-col">
          <p className="text-center text-base mb-2 lg:text-xl">
            Fale com a Gente
          </p>
          <form
            className="w-full px-10 flex items-center flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full mb-1">
              <p className="text-lg">Name:</p>
              <input
                {...register("name")}
                className="w-full p-2 rounded-md shadow-lg"
              />
              <p className="text-red-700 text-xs mt-1">
                {errors.name?.message}
              </p>
            </div>
            <div className="w-full mb-1">
              <p className="text-lg">E-mail:</p>
              <input
                {...register("email")}
                className="w-full p-2 rounded-md shadow-lg"
              />
              <p className="text-red-700 text-xs mt-1">
                {errors.email?.message}
              </p>
            </div>
            <div className="w-full mb-1">
              <p className="text-lg">Mensagem:</p>
              <textarea
                {...register("text")}
                className="w-full p-2 resize-none rounded-md shadow-lg"
              />
              <p className="text-red-700 text-xs">{errors.text?.message}</p>
            </div>
            <button
              className="flex items-center  justify-center bg-orange-500 shadow-xl text-white text-sm mt-2 w-28 h-8 rounded-md md:h-10 md:w-36"
              type="submit"
            >
              ENVIAR
            </button>
          </form>
        </div>
        <div className="w-full px-10 md:flex md:items-center md:flex-col">
          <div className="w-ful mt-5 md:mt-1">
            <div className="mb-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49531.6866312252!2d-43.28651584923242!3d-22.673741015383502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9972edfbe838f5%3A0x672bb060c280a52a!2sDuque%20de%20Caxias%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1670934180387!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div>
              <p>Rua XXX</p>
              <p>Duque de Caxias / RJ</p>
              <p>90000-000</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-3 mt-5">
            <a
              href="mailto:"
              target="_blank"
              className="icons text-white text-3xl md:text-4xl"
            >
              <FiMail className="fas fa-envelope" />
            </a>
            <a
              href="https://www.facebook.com/instituicaosociedadeplural/"
              target="_blank"
              className="icons text-white text-3xl md:text-4xl"
            >
              <FaFacebookSquare className="fab fa-facebook-f" />
            </a>
            <a
              href="https://mobile.twitter.com/SociedadePlural"
              target="_blank"
              className="icons text-white text-3xl md:text-4xl"
            >
              <FaTwitter className="fab fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/sociedadeplural/"
              target="_blank"
              className="icons text-white text-3xl md:text-4xl"
            >
              <FaInstagram className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/institui%C3%A7%C3%A3o-sociedade-plural/mycompany/"
              target="_blank"
              className="icons text-white text-3xl md:text-4xl"
            >
              <FaLinkedin className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs text-white absolute bottom-2 md:text-sm">
        ISP-SJB © Todos direitos reservados | CNPJ: XXXXXX-XX
      </p>
    </section>
  );
};

export { Footer };
