function merhaba(){
    let ad, soyad, yas, orumcek;
    ad=document.getElementById("txtAd").value;
    console.log(ad);

    soyad=document.getElementById("txtSoyad").value;
    console.log(soyad);

    yas=document.getElementById("numberYas").value;
    console.log(yas);

    orumcek=document.getElementById("listeOrumcek").selectedIndex;
    console.log(orumcek);

    document.getElementById("sonucBaslik").innerHTML="";
    document.getElementById("yazi").innerHTML=""

    if(yas<13){
        sonucBaslik.innerHTML="Siteye 13 Yaş Altı Giriş Yasaktır!"
    }
    else{
        sonucBaslik.innerHTML="Sitemize Giriş Yapabilirsiniz"
    }

    if(orumcek==1){
        yazi.innerHTML="Büyük güç, büyük sorumluluk getirir. Bu benim hediyem, benim lanetim. ben kim miyim? Örümcek Adam.";
        document.getElementById("resim").setAttribute("src", "tm.gif");
    }
    else if(orumcek==2){
        yazi.innerHTML="Sizi Seviyorum Çocuklar.";
        document.getElementById("resim").setAttribute("src", "ag.gif");
    }
    else if(orumcek==3){
        yazi.innerHTML="Sadece sen ve ben";
        document.getElementById("resim").setAttribute("src", "th.gif");
    }
}