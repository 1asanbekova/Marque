import { createTheme, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./HomePage.css";
import img1 from "../HomePage/img1.png";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

const HomePage = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 335,
        xs: 378,
        sm: 429,
        n: 466,
        ssm: 490,
        l: 495,
        k: 535,
        mmd: 580,
        md: 770,
        xl: 918,
        lg: 1100,
      },
    },
  });
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(https://mobimg.b-cdn.net/v3/fetch/94/94a1631be7410e20720acc99747baa9f.jpeg?w=1470&r=0.5625)`,
          backgroundSize: "100% ",
          // boxShadow: "inset 0 0 0 1000px rgba(63, 57, 70, 0.6);",
          boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.6);",
          height: "600px",
          marginBottom: 5,
          mt: "4%",
          [theme.breakpoints.down("lg")]: {
            height: "500px",
          },
          [theme.breakpoints.down("xl")]: {
            height: "420px",
          },
          [theme.breakpoints.down("md")]: {
            height: "430px",
          },
          [theme.breakpoints.down("mmd")]: {
            height: "300px",
          },
          [theme.breakpoints.down("l")]: {
            height: "278px",
          },
          [theme.breakpoints.down("ssm")]: {
            height: "250px",
          },
          [theme.breakpoints.down("sm")]: {
            height: "220px",
          },
          [theme.breakpoints.down("xs")]: {
            height: "200px",
          },
          [theme.breakpoints.down("xxs")]: {
            height: "185px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "40%",
            [theme.breakpoints.down("lg")]: {
              width: "50%",
            },
            [theme.breakpoints.down("xl")]: {
              width: "75%",
            },
            [theme.breakpoints.down("md")]: {
              width: "70%",
            },
            [theme.breakpoints.down("sm")]: {
              width: "80%",
            },
            [theme.breakpoints.down("ssm")]: {
              width: "100%",
            },
            // [theme.breakpoints.down("xs")]: {
            //   width: "100%",
            // },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "'Cormorant SC', serif",
              mt: "23%",
              fontSize: "50px",
              ml: "15%",
              [theme.breakpoints.down("md")]: {
                fontSize: "40px",
              },
              [theme.breakpoints.down("mmd")]: {
                fontSize: "31px",
                textAlign: "center",
                mt: "25%",
                ml: "36%",
              },
              [theme.breakpoints.down("k")]: {
                fontSize: "28px",
                textAlign: "center",
                mt: "25%",
                ml: "36%",
              },
              [theme.breakpoints.down("l")]: {
                fontSize: "27px",
                textAlign: "center",
                mt: "25%",
                ml: "36%",
              },
              [theme.breakpoints.down("ssm")]: {
                fontSize: "24px",
                ml: "12%",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
                ml: "9%",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "21px",
                ml: "10%",
              },
              [theme.breakpoints.down("xxs")]: {
                fontSize: "20px",
                ml: "9%",
              },
            }}
          >
            Швейная фабрика «MARQUE»
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontFamily: "'Cormorant SC', serif",
              mt: "10%",
              fontSize: "30px",
              ml: "15%",
              [theme.breakpoints.down("md")]: {
                fontSize: "25px",
              },
              [theme.breakpoints.down("mmd")]: {
                fontSize: "20px",
                mt: "10%",
                ml: "40%",
              },
              [theme.breakpoints.down("ssm")]: {
                fontSize: "20px",
                mt: "10%",
                ml: "32%",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
                mt: "10%",
                ml: "27%",
              },
              [theme.breakpoints.down("xxs")]: {
                fontSize: "16px",
                ml: "28%",
              },
            }}
          >
            г.Бишкек, Кыргызстан
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              width: "50%",
              fontWeight: "600",
              [theme.breakpoints.down("lg")]: {
                width: "60%",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "25px",
              },
              [theme.breakpoints.down("mmd")]: {
                width: "80%",
                fontSize: "20px",
              },
              [theme.breakpoints.down("xs")]: {
                width: "90%",
                fontSize: "18px",
              },
              color: " #434343",
              fontSize: "30px",
              fontFamily: "Quattrocento Sans",
            }}
          >
            ОсОО "MARQUE " принимает заказы на женскую, детскую, мужскую одежду.
          </Typography>
        </Box>

        <div className="services">
          <ul className="services__list">
            <li className="services__item homePageImg">
              <img
                className="services__icon"
                width="20%"
                src="https://cdn-icons-png.flaticon.com/512/2171/2171879.png"
                alt="error"
              />
              <h4 className="services__title">2 лекальщика</h4>
            </li>

            <li className="services__item services__item homePageImg">
              <img
                className="services__icon"
                width="20%"
                src="https://cdn-icons-png.flaticon.com/512/2171/2171879.png"
                alt="error"
              />
              <h4 className="services__title">2 технолога</h4>
            </li>

            <li className="services__item services__item homePageImg">
              <img
                className="services__icon"
                width="20%"
                src="https://cdn-icons-png.flaticon.com/512/2171/2171879.png"
                alt="error"
              />
              <h4 className="services__title">2 ОТК</h4>
            </li>

            <li className="services__item services__item homePageImg">
              <img
                className="services__icon"
                width="20%"
                src="https://cdn-icons-png.flaticon.com/512/2171/2171879.png"
                alt="error"
              />
              <h4 className="services__title">38 Швей-универсалов</h4>
            </li>

            <li className="services__item services__item homePageImg">
              <img
                className="services__icon"
                width="20%"
                src="https://cdn-icons-png.flaticon.com/512/2171/2171879.png"
                alt="error"
              />
              <h4 className="services__title">2 утюжника</h4>
            </li>

            <li className="services__item services__item homePageImg">
              <img
                className="services__icon"
                width="20%"
                src="https://cdn-icons-png.flaticon.com/512/2171/2171879.png"
                alt="error"
              />
              <h4 className="services__title">8 упаковщиц</h4>
            </li>
          </ul>
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: "15%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            width="140px"
            className="shop_bag"
            src="https://cdn-icons-png.flaticon.com/512/3514/3514254.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
            width: "16%",
            [theme.breakpoints.down("mmd")]: {
              width: "25%",
            },
          }}
        >
          <Typography
            data-aos="fade-down"
            sx={{
              fontSize: "25px",
              fontWeight: "600",
              color: "#434343",
              fontFamily: "Quattrocento Sans",
              alignSelf: "center",
              [theme.breakpoints.down("xl")]: {
                padding: "3%",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "20px",
              },
              [theme.breakpoints.down("mmd")]: {
                fontSize: "18px",
              },
              [theme.breakpoints.down("ssm")]: {
                fontSize: "17px",
              },
            }}
          >
            Услуги байера +996500950029
          </Typography>
        </Box>
      </Box>

      <Box>
        <img
          className="bf"
          width="100%"
          height="200px"
          src="https://www.harrywinston.com/-/media/project/harry-winston/corporate/harry-winston-int/high-jewelry/marvelous-creations-by-harry-winston/plp/herolarged_marvelous_plp_3_butterfly_2.gif?rev=cdc5e43d532542f6bf53f79b171af377"
        />
      </Box>

      {/* Услуги */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "35px",
            width: "50%",
            fontWeight: "600",
            [theme.breakpoints.up("lg")]: {
              width: "60%",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "30px ",
            },
            [theme.breakpoints.down("mmd")]: {
              width: "80%",
              fontSize: "25px",
            },
            color: "#434343",
            fontFamily: " Quattrocento Sans",
          }}
        >
          Сплоченная команда предлагает свои услуги.
        </Typography>
      </Box>
      <div className="services2">
        <ul className="services__list2">
          <li data-aos="fade-left" className="services__item2">
            <img
              className="services__icon2"
              width="8%"
              src="https://cdn-icons-png.flaticon.com/512/5839/5839078.png"
              alt="error"
            />
            <h4 className="services__title2">
              Изготовления лекала по фото за 1 день
            </h4>
          </li>

          <li data-aos="fade-left" className="services__item2">
            <img
              className="services__icon2"
              width="8%"
              src="https://cdn-icons-png.flaticon.com/512/5839/5839078.png"
              alt="error"
            />
            <h4 className="services__title2">
              Пошив эталлонного образца с расчётом себестоимости модели 1 день.
            </h4>
          </li>

          <li data-aos="fade-left" className="services__item2">
            <img
              className="services__icon2"
              width="8%"
              src="https://cdn-icons-png.flaticon.com/512/5839/5839078.png"
              alt="error"
            />
            <h4 className="services__title2">
              {" "}
              Отправка образца на утверждение для запуска на производство.
            </h4>
          </li>

          <li data-aos="fade-left" className="services__item2">
            <img
              className="services__icon2"
              width="8%"
              src="https://cdn-icons-png.flaticon.com/512/5839/5839078.png"
              alt="error"
            />
            <h4 className="services__title2">
              Закуп материала и фурнитуры по видео-фото чату, заказчик
              оплачивает по факту стоимости материала текстильмаркету.
            </h4>
          </li>

          <li data-aos="fade-left" className="services__item2">
            <img
              className="services__icon2"
              width="8%"
              src="https://cdn-icons-png.flaticon.com/512/5839/5839078.png"
              alt="error"
            />
            <h4 className="services__title2">
              Запускаем на производство утверждённый образец.{" "}
            </h4>
          </li>

          <li data-aos="fade-left" className="services__item2">
            <img
              className="services__icon2"
              width="8%"
              src="https://cdn-icons-png.flaticon.com/512/5839/5839078.png"
              alt="error"
            />
            <h4 className="services__title2">
              Контроль качества и своевременного выхода продукции.
            </h4>
          </li>

          <li data-aos="fade-left" className="services__item2">
            <img
              className="services__icon2"
              width="8%"
              src="https://cdn-icons-png.flaticon.com/512/5839/5839078.png"
              alt="error"
            />
            <h4 className="services__title2">
              Отправка за максимально короткое время партию товара.
            </h4>
          </li>

          <li data-aos="fade-left" className="services__item2">
            <img
              className="services__icon2"
              width="8%"
              src="https://cdn-icons-png.flaticon.com/512/5839/5839078.png"
              alt="error"
            />
            <h4 className="services__title2">
              Контроль качества и своевременного выхода продукции.
            </h4>
          </li>
        </ul>
        <div className="photo_marque" style={{ width: "40%" }}>
          <img width="100%" src={img1} alt="error" />
        </div>
      </div>

      <Box
        className="lowerNav"
        sx={{
          height: "4rem",
          mt: "3%",
          mb: "3%",
          width: "100%",
          backgroundColor: "#f6bd60",
        }}
      >
        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Quattrocento Sans",
              fontSize: "40px",
              fontWeight: "600",
              color: "white",
              [theme.breakpoints.down("md")]: {
                fontSize: "35px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "26px",
                mt: "3%",
              },
              [theme.breakpoints.down("xxs")]: {
                fontSize: "24px",
                mt: "3%",
              },
            }}
          >
            С нами выгодно и удобно
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <Typography
          sx={{
            fontFamily: "Quattrocento Sans",
            fontSize: "30px",
            fontWeight: "600",
            color: "black",
            [theme.breakpoints.down("md")]: {
              fontSize: "25px",
            },
            [theme.breakpoints.down("mmd")]: {
              fontSize: "20px",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "18px",
              textAlign: "center",
            },
            // [theme.breakpoints.down("xs")]: {
            //   fontSize: "16px",
            //   textAlign: "center",
            // },
          }}
        >
          Принимаются заказы под ключ и на давальческой основе.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          mt: "2%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: "0.75em", display: "flex", alignItems: "center" }}>
          <CallIcon className="icons" sx={{ color: "#f6bd60" }} />
          <a
            style={{ textDecoration: "none", color: "#434343" }}
            href="tel:+996700790112"
          >
            +996 700 790 112
          </a>
        </Box>

        <Box sx={{ mb: "0.75em", display: "flex", alignItems: "center" }}>
          <WhatsAppIcon className="icons" sx={{ color: "#f6bd60" }} />
          <a
            style={{ textDecoration: "none", color: "#434343" }}
            href=" https://wa.me/+996700790112"
          >
            +996 700 790 112
          </a>
        </Box>

        <Box sx={{ mb: "0.75em", display: "flex", alignItems: "center" }}>
          <TelegramIcon className="icons" sx={{ color: "#f6bd60" }} />
          <a
            style={{
              textDecoration: "none",
              color: "#434343",
            }}
            href="https://telegram.me/+996700790112"
          >
            +996 700 790 112
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#333333",
          [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
            padding: "14px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Швейная фабрика «MARQUE»
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
