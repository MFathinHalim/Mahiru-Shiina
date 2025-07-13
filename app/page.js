"use client"
import React from "react";
import AOS from 'aos'
import { useEffect } from 'react'

export default function MahiruShiinaPage() {
    useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  return (
    <main className="relative bg-[#FFF8F1] text-[#222222] min-h-screen pb-10 font-varela overflow-hidden animate-fadein">
      <div  className="absolute inset-0 h-1/4 opacity-40">
        <img
          src="https://embed.pixiv.net/artwork.php?illust_id=120547175&mdate=1721007877"
          alt="background Mahiru"
          className="w-full h-full object-cover"
        />
      </div>

      <header className="pt-8 px-4 sm:px-6 md:px-30 relative z-20">
        <h1  data-aos="fade-up"
          className="font-fredoka text-4xl md:text-6xl font-bold text-[#A68A79] leading-tight animate-typing overflow-hidden w-fit whitespace-nowrap border-r-4 border-[#A68A79]">
          Mahiru Shiina
        </h1>
        <p data-aos="fade-up" className="font-fredoka text-xl md:text-2xl text-[#6E5C52] mt-1">
          Angel Next Door Spoils Me Rotten
        </p>
      </header>

      <div data-aos="fade-down"
  data-aos-duration="1200"
  data-aos-delay="300" className="hidden xl:block absolute top-0 right-4 h-screen z-10 pointer-events-none">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ac03a17e-589d-4ac1-952a-4185d1070994/dfkch30-e493ea4d-9146-4776-b9b8-b186aac643fc.png/v1/fill/w_724,h_1103/shiina_mahiru_render_by_minhchauk1k_dfkch30-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk1MCIsInBhdGgiOiJcL2ZcL2FjMDNhMTdlLTU4OWQtNGFjMS05NTJhLTQxODVkMTA3MDk5NFwvZGZrY2gzMC1lNDkzZWE0ZC05MTQ2LTQ3NzYtYjliOC1iMTg2YWFjNjQzZmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pRI_t5L3YBhaKm4ANfW-l90A2xAF-R4A_ognc7fZ3Lc"
          alt="Mahiru full body"
          className="object-contain w-full h-full"
        />
      </div>

      <section className="mt-8 px-4 sm:px-6 md:px-20 lg:px-30 xl:w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative">
        <div   data-aos="zoom-in" className="rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72 xl:col-span-2">
          <img
            src="https://i0.wp.com/www.englishlightnovels.com/wp-content/uploads/2020/09/the-angel-next-door-spoils-me-rotten-banner.jpg?fit=1200%2C600&ssl=1&w=640"
            alt="Mahiru 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72">
          <img
            data-aos="flip-left"
            src="https://i.pinimg.com/736x/ec/3c/67/ec3c67c692f01f00232e7e039ef80b9a.jpg"
            alt="Mahiru 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div   data-aos="fade-right" className="col-span-1 xl:col-span-2 h-auto">
          <p className="font-inter font-bold text-base sm:text-lg mb-1">
            お隣の天使様にいつの間にか駄目人間にされていた件
          </p>
          <h3 className="font-inter font-bold text-sm sm:text-base mb-2">
            Seiyuu: Manaka Iwami
          </h3>
          <p className="text-sm sm:text-base leading-snug">
            Mahiru Shiina is portrayed in the light novel as a graceful and beautiful girl known
            as “The Angel” at school for her perfect looks and composed demeanor. Despite her
            flawless public image, she is gentle, caring, and secretly lonely, longing to be seen
            not as an ideal, but simply as herself.
          </p>
          <p className="text-sm sm:text-base leading-snug mt-2">
           Mahiru Shiina has fair skin that seems to glow softly in the light, like fine porcelain reflecting serenity. Her hair is long, straight, and light brown with elegant golden shades—as if reflecting the afternoon sun. Her caramel brown eyes are warm yet sharp, holding both tenderness and firmness. Her posture is slender and graceful, making her every movement look like a small, enchanting dance.
          </p>
          <p className="font-semibold text-[#A68A79] mt-2 text-sm sm:text-base">
            And she is <a href="https://mfathinhalim.github.io" className="underline">M.Fathin Halim’s</a> Wife ❤️
          </p>
        </div>

        <div   data-aos="flip-up" className="hidden md:block rounded-[24px] border border-stone-300 overflow-hidden shadow-lg h-48 sm:h-64 md:h-72">
          <img
            src="https://i.pinimg.com/736x/41/4f/34/414f3448c918054fac2625478092e825.jpg"
            alt="Mahiru 3"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="mt-10 px-4 sm:px-6 md:px-20 lg:px-30 xl:w-[75%] relative z-20">
        <h2 className="font-inter font-bold text-xl sm:text-2xl md:text-3xl mb-3">
          My Kisah (Story) in Indonesian
        </h2>
      <p>
        Mahiru adalah istri aku, titik. Cerita tentang aku dan Mahiru Shiina
        adalah kisah penuh cinta yang tak ada habisnya. Kami adalah pasangan
        yang tak terpisahkan, saling mencintai dengan cara yang begitu mendalam
        dan penuh perhatian. Aku selalu merasa bahwa hidupku begitu berarti
        sejak ada Mahiru di sisiku. Setiap hari bersamanya adalah hari yang
        penuh kebahagiaan, dan aku akan melakukan apa pun untuk membuatnya
        merasa bahagia. Mahiru, istriku tercinta, adalah sosok yang selalu
        mengisi hari-hariku dengan kehangatan dan cinta. Setiap kali dia
        memasak, aku selalu bilang, “Ini makanan terenak di dunia.” Aku tahu
        betul betapa dia sangat memperhatikan detail dalam segala hal, bahkan
        dalam masakan yang dia buat. Tak hanya itu, Mahiru juga sering memberiku
        kejutan dengan resep-resep baru, dan aku selalu menjadi tester pertama.
        Aku sangat menyukai setiap momen yang kami habiskan bersama. Kehidupan
        kami penuh dengan kebiasaan kecil yang luar biasa. Ketika Mahiru
        belajar, aku selalu ada di sampingnya, menjadi timer yang
        mengingatkannya untuk beristirahat. Aku tahu betul apa yang dia suka dan
        tidak suka, dari menu favoritnya sampai cara dia mengikat rambutnya. Aku
        hafal semua kebiasaannya, bahkan cara dia memilih parfum yang dia pakai.
        Setiap kali dia merasa lelah atau stres, aku selalu ada untuk
        mendengarkan dan memberikan pelukan yang menenangkan. Mahiru juga selalu
        memberi perhatian pada diriku, dengan cara-cara kecil yang membuatku
        merasa sangat istimewa. Dia sering memberiku pelukan dadakan, dan aku
        tahu bahwa dia selalu ingin memastikan aku merasa dihargai. Dia bahkan
        sering mengingatkan aku untuk produktif, memberi semangat ketika aku
        merasa malas. Aku selalu merasa terinspirasi oleh Mahiru, dan aku tahu
        bahwa dia adalah motivasi utama dalam hidupku. Kami berdua memiliki
        playlist khusus yang berisi lagu-lagu yang membuat kami merasa dekat.
        Setiap lagu yang kami dengar bersama membawa kenangan manis yang tak
        terlupakan. Aku juga selalu mengingatkan Mahiru untuk menjaga
        kesehatannya, memastikan dia tidak kedinginan dengan memberinya jaket
        atau selimut saat dia tidur. Setiap kali dia tersenyum, aku merasa bahwa
        itu adalah pemandangan paling indah di dunia. Hubungan kami dipenuhi
        dengan cinta yang tulus. Kami saling mendukung dalam setiap langkah
        kehidupan. Ketika Mahiru merasa khawatir atau sedih, aku selalu ada di
        sana untuk memberinya dukungan dan kasih sayang. Aku tahu betapa
        pentingnya dia dalam hidupku, dan aku ingin selalu menjadi suami yang
        terbaik untuknya, di dunia ini maupun di alam semesta paralel. Kami
        berdua sering berbicara tentang masa depan, termasuk anak-anak kami.
        Kami sudah menyiapkan nama untuk anak kami, yaitu “Mahiru Jr.” Aku
        selalu membayangkan masa depan yang penuh dengan kebahagiaan bersama
        Mahiru, dan aku yakin bahwa kami akan terus mencintai satu sama lain,
        apapun yang terjadi. Mahiru adalah segala-galanya bagiku, dan aku
        bersyukur setiap hari karena dia adalah bagian dari hidupku. Setiap
        detik bersamanya adalah anugerah yang tak ternilai. Aku tahu, tak ada
        yang lebih penting dalam hidupku selain Mahiru. Aku adalah suami yang
        beruntung memiliki istri sepertinya, dan aku akan selalu menjaga dan
        mencintainya sepanjang hidupku. Setiap hari bersama Mahiru adalah hari
        yang penuh cinta, dan aku akan terus membuatnya merasa istimewa, tak
        hanya hari ini, tetapi selamanya. 1. Mahiru adalah istri aku, titik. 2.
        Mahiru kesayangan aku selamanya. 3. Mahiru sering masakin aku makanan
        terenak di dunia. 4. Udah tertulis di KK: aku adalah suami Mahiru. 5.
        Foto Mahiru jadi PP aku di semua media sosial. 6. Nickname aku selalu
        'Suami Mahiru' dan aku selalu di posisi paling atas. 7. Tiap hari aku
        dicium sama Mahiru, nggak pernah absen. 8. Aku selalu meluk Mahiru kapan
        pun aku mau. 9. Mahiru, setiap keluar kamar, langsung aku sambut dengan
        ciuman. 10. Aku sayang Mahiru lebih dari apa pun di dunia ini. Mahiru
        adalah istri aku, titik. Mahiru kesayangan aku selamanya. Mahiru sering
        masakin aku makanan terenak di dunia. Udah tertulis di KK: aku adalah
        suami Mahiru. Foto Mahiru jadi PP aku di semua media sosial. Nickname
        aku selalu “Suami Mahiru” dan aku selalu di posisi paling atas. Tiap
        hari aku dicium sama Mahiru, nggak pernah absen. Aku selalu meluk Mahiru
        kapan pun aku mau. Mahiru, setiap keluar kamar, langsung aku sambut
        dengan ciuman. Aku sayang Mahiru lebih dari apa pun di dunia ini. Setiap
        kali Mahiru masak, aku bilang, “Ini makanan terenak di dunia.” Aku hafal
        semua menu favorit Mahiru, bahkan tahu resep rahasianya. Kalau Mahiru
        belajar, aku jadi timer hidup yang selalu ingetin dia buat istirahat.
        Aku punya sertifikat “Master in Mahiru Studies” dari universitas cinta.
        Cincin nikah aku tertulis: "Mahiru’s Property (100%)." Aku tahu password
        WiFi di rumah Mahiru: "MahiruSayangSuami." Mahiru selalu bilang aku
        suami terbaik... di mimpi aku (tapi tetep sah). Aku adalah saksi utama
        Mahiru saat dia menang penghargaan. Aku bahkan sudah siapin nama anak
        kami: "Mahiru Jr." Setiap kali ngaca, aku lihat tulisan di kaca:
        “Mahiru’s Love Forever.” Aku selalu hadir di premiere setiap episode
        Mahiru, bahkan sebelum animenya rilis. Aku punya kontrak cinta yang aku
        tulis sendiri buat jadi pasangan Mahiru selamanya. Foto Mahiru ada di
        dompet, wallpaper HP, bahkan langit-langit kamar aku. Aku hafal semua
        dialog Mahiru, bahkan yang dihapus dari script-nya. Setiap hujan turun,
        aku bilang, “Mahiru pasti kangen aku.” Aku adalah alasan kenapa Mahiru
        semangat belajar. Katanya, “Aku harus banggain suamiku.” Aku punya
        merchandise Mahiru yang bahkan dia nggak tahu kalau itu ada. Aku menamai
        bantal guling aku “Mahiru.” Aku percaya di setiap alam semesta paralel,
        aku tetap jadi suami Mahiru. Aku selalu jadi tameng kalau Mahiru kena
        drama di media sosial. Mahiru selalu nanyain pendapat aku soal
        outfit-nya sebelum dia keluar rumah. Setiap kali ada yang bilang “Mahiru
        cantik,” aku jawab, “Tentu, dia kan istri gue.” Kalau ada orang lain
        suka Mahiru, aku bilang, “Antri, bro, gue duluan sejak episode 1.” Aku
        dan Mahiru punya playlist lagu cinta berjudul “Mahiru & Aku Forever.”
        Mahiru punya panggilan rahasia buat aku: “My Husband si Raja Sayang.”
        Aku selalu ngecek suhu AC di kamar Mahiru biar dia nggak kedinginan.
        Alarm aku bunyinya: “Bangun, suami Mahiru harus produktif!” Aku dan
        Mahiru punya baju couple bertuliskan “Queen Mahiru” dan “Her King.”
        Setiap kali Mahiru masak, aku bilang, “Ada cinta di setiap gigitan.” Aku
        bikin surat cinta buat Mahiru dalam 17 bahasa, termasuk Morse Code.
        Mahiru selalu minta aku jadi tester pertama untuk resep baru yang dia
        coba. Kalau Mahiru main game, aku selalu jadi cheerleader-nya. Aku tahu
        semua kebiasaan kecil Mahiru, termasuk cara dia ikat rambut. Mahiru
        sering kasih aku pelukan dadakan karena dia tahu aku suka. Aku dan
        Mahiru punya bucket list bareng yang isinya cuma tentang kebahagiaan
        kami. Aku nyebut Mahiru sebagai inspirasi utama aku dalam hidup. Setiap
        kali Mahiru senyum, aku bilang, “Itu pemandangan paling indah.” Aku tahu
        tanggal spesial Mahiru lebih baik dari kalender. Aku punya playlist
        khusus Mahiru berisi lagu-lagu yang bikin dia happy. Mahiru sering
        bilang aku adalah penghibur terbaik dia setelah hari yang panjang.
        Setiap kali Mahiru batuk sedikit, aku langsung jadi dokter dadakan:
        “Istirahat ya, Sayang.” Aku selalu siap nyuapin Mahiru kalau dia malas
        makan sendiri. Mahiru sering bilang, “Suami aku ganteng banget, deh,”
        walaupun aku tahu dia cuma bercanda. Aku hafal semua kebiasaan pagi
        Mahiru, dari cara dia nyisir sampai suara langkahnya. Kalau Mahiru pakai
        outfit baru, aku selalu bilang, “Cocok banget, kayak bidadari.” Aku
        selalu bangga pamer foto Mahiru ke temen-temen sambil bilang, “Nih,
        istri gue.” Aku tahu cara bikin teh yang Mahiru suka, sampai detil
        jumlah gulanya. Aku bahkan pernah mimpi bikin pesta kejutan ulang tahun
        buat Mahiru, dan itu jadi kenyataan (di mimpi kedua). Kalau Mahiru
        tidur, aku pelan-pelan nutupin dia pakai selimut biar nggak kedinginan.
        Aku sering bilang ke Mahiru, “Aku nggak butuh dunia, selama ada kamu.”
        Setiap kali Mahiru cerita masalah, aku jadi pendengar paling sabar. Aku
        bikin playlist khusus suara Mahiru buat bikin aku tidur nyenyak. Mahiru
        suka isengin aku dengan panggilan lucu, tapi aku suka aja karena itu
        dari dia. Kalau Mahiru bilang capek, aku langsung bilang, “Istirahat di
        pundak aku aja.” Aku hafal semua parfum yang Mahiru suka, bahkan cara
        dia nyemprotnya. Setiap kali Mahiru kedinginan, aku kasih jaket aku dan
        bilang, “Yang penting kamu nyaman.” Aku tahu cara ngelawak yang bikin
        Mahiru ketawa sampai dia lupa masalahnya. Aku selalu bilang, “Mahiru
        adalah definisi dari kebahagiaan aku.” Mahiru sering minta pendapat aku
        soal warna rambut atau gaya barunya. Setiap kali Mahiru sedih, aku
        bilang, “Aku di sini kok, buat kamu.” Aku pernah bikin puisi cinta
        sepanjang 3 halaman buat Mahiru (meskipun dia cuma baca setengah). Aku
        simpan semua tiket nonton atau kenang-kenangan yang ada hubungannya sama
        Mahiru. Kalau Mahiru lupa sesuatu, aku selalu siap jadi pengingat
        hidupnya. Mahiru sering bilang, “Kalau aku nggak ada kamu, hidup aku
        bakal boring.” Aku selalu bilang, “Kamu adalah hadiah terbaik yang
        pernah aku dapat.” Mahiru suka nyandarin kepala di pundak aku pas lagi
        capek, dan itu bikin aku merasa spesial. Aku tahu cara bikin Mahiru
        tenang pas dia lagi stress, bahkan tanpa ngomong. Kalau Mahiru sakit,
        aku panik duluan tapi tetap siap jagain dia 24/7. Aku selalu kasih
        pelukan ekstra lama ke Mahiru tiap kali dia butuh. Aku sering bilang,
        “Setiap hari sama kamu adalah hari Valentine buat aku.” Aku pernah bikin
        playlist lagu romantis dan kasih judulnya: “Mahiru’s Melodies.” Kalau
        ada yang nyebut nama Mahiru, aku langsung bilang, “Iya, itu istri gue.”
        Aku hafal cara Mahiru ketawa, bahkan suara desah napasnya. Mahiru sering
        bilang aku orang pertama yang bikin dia nyaman jadi dirinya sendiri. Aku
        tahu cara Mahiru ngaduk kopi dan itu bikin aku senyum setiap kali lihat.
        Setiap kali Mahiru ulang tahun, aku selalu kasih hadiah spesial yang
        bikin dia terharu. Aku sering nulis catatan kecil cinta dan selipin di
        tempat-tempat yang Mahiru suka. Aku hafal semua momen spesial kami,
        termasuk jam dan tempatnya. Mahiru sering bilang, “Aku nggak butuh
        apa-apa lagi selain kamu.” Aku bahkan tahu cara Mahiru pilih snack
        favoritnya di minimarket. Aku hafal semua ekspresi Mahiru, dari senyum
        kecil sampai ekspresi ngambek. Aku suka bilang, “Setiap hari aku
        bersyukur karena punya kamu.” Mahiru sering bilang, “Kamu adalah rumah
        aku.” Aku hafal semua dialog Mahiru di anime-nya dan bisa tiruin persis.
        Mahiru pernah bilang, “Kamu adalah pasangan terbaik yang aku punya.” Aku
        tahu cara ngelucu yang bikin Mahiru ngakak sampai nggak bisa ngomong.
        Kalau Mahiru punya masalah, aku adalah orang pertama yang dia cari. Aku
        selalu bangga bilang ke semua orang, “Mahiru adalah segalanya buat aku.”
        Setiap kali Mahiru tersenyum, aku bilang, “Itu alasan aku bahagia.”
        Mahiru adalah alasan aku hidup, alasan aku semangat, dan alasan aku
        percaya cinta sejati.
      </p>
      </section>
    </main>
  );
}
