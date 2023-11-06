<?php include('./header.php');?>
<section id="tutos">
        <h2 class="titre_famous">Tutos</h2>
        <div class="tutos_container">
        <p style="margin: 100px 0 100px 0;">Section en cours de construction, revenez plus tard.</p>
        </div>
        <div class="pedagogie_img">
            <img src="img/manifesto.webp" alt="Avatars NFC">
        </div>
    </section>
<script>
    function nfcherche() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('rechercheLexique');
    filter = input.value.toUpperCase();
    ul = document.getElementById("leLexiqueNFC");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
    }
</script>
<?php include('./footer.php');?>