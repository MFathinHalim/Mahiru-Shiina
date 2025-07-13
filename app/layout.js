import "./globals.css";
import 'aos/dist/aos.css'

export const metadata = {
  title: "Mahiru Shiina - Fathin's Wife",
  description: "Mahiru adalah istri aku, titik. Cerita tentang aku dan Mahiru Shiina adalah kisah penuh cinta yang tak ada habisnya. Kami adalah pasangan yang tak terpisahkan, saling mencintai dengan cara yang begitu mendalam dan penuh perhatian. Aku selalu merasa bahwa hidupku begitu berarti sejak ada Mahiru di sisiku. Setiap hari bersamanya adalah hari yang penuh kebahagiaan, dan aku akan melakukan apa pun untuk membuatnya merasa bahagia. Mahiru, istriku tercinta, adalah sosok yang selalu mengisi hari-hariku dengan kehangatan dan cinta. Setiap kali dia memasak, aku selalu bilang, “Ini makanan terenak di dunia.” Aku tahu betul betapa dia sangat memperhatikan detail dalam segala hal, bahkan dalam masakan yang dia buat. Tak hanya itu, Mahiru juga sering memberiku kejutan dengan resep-resep baru, dan aku selalu menjadi tester pertama. Aku sangat menyukai setiap momen yang kami habiskan bersama. Kehidupan kami penuh dengan kebiasaan kecil yang luar biasa. Ketika Mahiru belajar, aku selalu ada di sampingnya, menjadi timer yang mengingatkannya untuk beristirahat.",
  icons: {
    icon: "https://cdn.rafled.com/anime-icons/images/RIhvIEOjHsHOlo1rsnLQGZDaVJyUuJd9.jpg"
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
           <head>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Inter:wght@700&family=Varela+Round&display=swap" rel="stylesheet" />
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
