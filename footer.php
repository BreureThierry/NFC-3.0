<audio class="audio" src="nfc_instru_1.mp3"></audio>

    <div id="popscrt_container">

        <div id="popscrt"></div>

    </div>

    <!-- FOOTER -->

    <footer>

        <div id="footer_block_1" class="footer_block">

            <a href="index.php"><img src="img/nfclogo.webp" class="logo_footer" alt="Logo NFC"></a>

            <p>Le club le plus stylé de France.</p>

            <button class="btn_footer">Clique ici</button>

        </div>

        <div id="footer_block_2" class="footer_block">

            <ul>

                <li><a class="footer_item" href="index.php#nfc">C QUOI NFC ?</a></li>

                <li><a class="footer_item" href="manifesto.php">MANIFESTO</a></li>

                <li><a class="footer_item" href="collection.php">COLLECTION</a></li>

                <li><a class="footer_item" href="pedagogie.php">PEDAGOGIE</a></li>

                <li><a class="footer_item" href="lexique.php">LEXIQUE</a></li>

                <li><a class="footer_item" href="tutos.php">TUTOS</a></li>

                <li><a class="footer_item" href="soiree-privee.php">SOIRÉES PRIVÉES</a></li>

                <li><a class="footer_item" href="index.php#faq">FAQ</a></li>

            </ul>

        </div>

        <div id="footer_block_3" class="footer_block">

            <form method="POST" action="">

                <h3 class="form_title">Pour nous contacter,

                    envoie-nous un message ici

                </h3>

                <input id="email" name="email" type="email" placeholder="E-mail" required>

                <textarea id="message" name="message" type="text" placeholder="Message" required></textarea>

                <div class="rgpd_container">
                    <input id="rgpd" type="checkbox" required>
                    <label for="rgpd">En cochant cette case, j'accepte que mes informations soient transmises à NFC pour la gestion des contacts. J'ai bien compris qu'en aucun cas ces données ne seront cédées à des tiers.</label>
                </div>

                <input class="btn_submit_footer" type="submit" value="Envoyer">

            </form>

            <?php

            if(isset($_POST['message'])) {

                $email = $_POST['email'];

                $message = htmlspecialchars($_POST['message']);



                $destinataire = 'nfclub3.0@gmail.com';

                $objet = 'NFC3-0.fr - Message de '.$email.'';   

                $entete  = 'MIME-Version: 1.0' . "\r\n";

                $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";

                $entete .= 'From: nfc.contact@nfc3-0.com' . "\r\n";

                $entete .= 'Reply-to: ' . $_POST["email"];

                if(

                    (empty($_POST['email'])) || 

                    (empty($_POST['message']))) 

                {

                    echo "<p class='info warning'>Veuillez remplir tous les champs.</p>";

                }

                else{

                    $content = '<html>

                    <body style="background: #0889C4; color: white; font-size: 1.2em; padding: 10px; border-radius: 15px">

                        <div style="width: 80px;">

                            <img src="https://nfc3-0.com/img/nfclogo.webp" alt="logo NFC" style="width: 100%;">

                        </div>

                        <h1 style="color: #CEFC83; text-align: center;">Nouveau message !</h1>

                        <hr style="width: 70%;">

                        <p style="color: #CEFC83;"><b>Email :</b></p>

                        <p style="color: white;">'.$email.'</p>

                        <p style="color: #CEFC83;"><b>Message :</b></p>

                        <p style="color: white;">'.$message.'</p>

                    </body>

                    </html>';

                    mail($destinataire, $objet, $content, $entete);

                    echo "<p class='infos_form success'>Message envoyé.</p>";

                }

            }

            ?>

        </div>

    </footer>

  <!-- SWIPER -->

  <script src="libs/swiper.js"></script>

  <script>

    var swiper = new Swiper(".mySwiper", {

    slidesPerView: "auto",

    spaceBetween: 30,

    rewind: true,

    // loop: true,

    autoplay: false,

    direction: "horizontal",

    freeMode: true,

    pagination: {

    el: ".swiper-pagination",

    clickable: true,

    },

    // And if we need scrollbar

    // scrollbar: {

    // el: '.swiper-scrollbar',    

    //     },

    });

  </script>

</body>
</php>