import { Sysreq } from "./Sysreq.js";
import { Igra } from "./Igra.js";
import { Prodavnica } from "./Prodavnica.js";
import { Recenzija } from "./Recenzija.js";

export class Sajt{

    constructor(naziv,listaIgara){
        this.naziv = naziv;
        this.listaIgara = listaIgara;
        this.kontejner = null;
    }
    
    crtaj(host)
    {
        this.kontejner = document.createElement("div");
        this.kontejner.className = "NajvisiKontejner";
        host.appendChild(this.kontejner);

        let kontNaslov = document.createElement("div");
        kontNaslov.className = "PomocniKontejner";
        this.kontejner.appendChild(kontNaslov);
        
        let kontGlavni = document.createElement("div");
        kontGlavni.className="GlavniKontejner";
        this.kontejner.appendChild(kontGlavni);

        let kontPomocni1 = document.createElement("div");
        kontPomocni1.className = "PomocniKontejner";
        kontGlavni.appendChild(kontPomocni1);

        let kontPomocni2 = document.createElement("div");
        kontPomocni2.className = "PomocniKontejner";
        kontGlavni.appendChild(kontPomocni2);

        let kontForma1 = document.createElement("div");
        kontForma1.className="Forma1";
        kontPomocni1.appendChild(kontForma1);

        let kontForma2 = document.createElement("div");
        kontForma2.className="Forma2";
        kontPomocni1.appendChild(kontForma2);
        
        let kontKorpa = document.createElement("div");
        kontKorpa.className="Korpa";
        kontPomocni1.appendChild(kontKorpa);

        let kontIgra = document.createElement("div");
        kontIgra.className="Igra";
        kontPomocni2.appendChild(kontIgra);

        let kontSysreq = document.createElement("div");
        kontSysreq.className="Sysreq";
        kontPomocni2.appendChild(kontSysreq);

        let kontForma3 = document.createElement("div");
        kontForma3.className="Forma3";
        kontPomocni2.appendChild(kontForma3);

        let kontSlika = document.createElement("div");
        kontSlika.className="Slika";
        kontPomocni2.appendChild(kontSlika);


        this.crtajNaslov(kontNaslov);
        this.crtajFormu1(kontForma1);
        this.crtajFormu2(kontForma2);
        this.crtajFormu3(kontForma3);
        this.crtajIgru(kontIgra);
        this.crtajKorpu(kontKorpa);
        this.crtajSysreq(kontSysreq);
        this.crtajSliku(kontSlika);
    }

    crtajNaslov(host)
    {
        let red = this.crtajRed(host);

        let l = document.createElement("h1");
        l.className = "labelanaziv";
        l.innerHTML = this.naziv;
        red.appendChild(l);
    }

    crtajFormu1(host)
    {
        let red = this.crtajRed(host);

        let l = document.createElement("label");
        l.innerHTML="Korisnicko ime:";
        red.appendChild(l);

        let usernamePolje = document.createElement("input");
        usernamePolje.className = "Polje";
        usernamePolje.type = "text";
        red.appendChild(usernamePolje);

        let btnRegistrujSe = document.createElement("button");
        btnRegistrujSe.className = "Dugme";
        btnRegistrujSe.innerHTML="Registruj se";
        btnRegistrujSe.onclick=(ev)=>this.upisiKorisnika(usernamePolje.value);
        red.appendChild(btnRegistrujSe);

        red = this.crtajRed(host);
        l = document.createElement("h2");
        l.innerHTML = "Ostavi recenziju";
        red.appendChild(l);

        red = this.crtajRed(host);
        l = document.createElement("label");
        l.innerHTML = "Igra:";
        red.appendChild(l);

        let igraSelect = document.createElement("select");
        igraSelect.className = "Polje";
        igraSelect.id = "selectRecenzija";
        red.appendChild(igraSelect);

        let opcija;
        this.listaIgara.forEach(p => {
            opcija = document.createElement("option");
            opcija.innerHTML = p.naziv;
            opcija.value = p.id;
            igraSelect.appendChild(opcija);
        })

        red = this.crtajRed(host);
        l = document.createElement("label");
        l.innerHTML = "Ocena:";
        red.appendChild(l);
        let ocenaPolje = document.createElement("input");
        ocenaPolje.className = "Polje";
        ocenaPolje.type = "number";
        red.appendChild(ocenaPolje);

        red = this.crtajRed(host);
        l = document.createElement("label");
        l.innerHTML = "Duzina:";
        red.appendChild(l);
        let duzinaPolje = document.createElement("input");
        duzinaPolje.className = "Polje";
        duzinaPolje.type = "number";
        red.appendChild(duzinaPolje);

        red = this.crtajRed(host);
        l = document.createElement("label");
        l.innerHTML="Recenzija:";
        red.appendChild(l);
        red = this.crtajRed(host);
        let reviewPolje = document.createElement("textarea");
        red.appendChild(reviewPolje);


        red = this.crtajRed(host);
        let btnDodajRecenziju = document.createElement("button");
        btnDodajRecenziju.className = "Dugme";
        btnDodajRecenziju.innerHTML="Dodaj";
        btnDodajRecenziju.onclick=(ev)=>this.upisiRecenziju(ocenaPolje.value,duzinaPolje.value,reviewPolje.value);
        red.appendChild(btnDodajRecenziju);

        let btnObrisiRecenziju = document.createElement("button");
        btnObrisiRecenziju.className = "Dugme";
        btnObrisiRecenziju.innerHTML = "Obrisi";
        btnObrisiRecenziju.onclick=(ev)=>this.obrisiRecenziju();
        red.appendChild(btnObrisiRecenziju);

        let btnSysreq = document.createElement("button");
        btnSysreq.className = "Dugme";
        btnSysreq.innerHTML = "Zahtevnost";
        btnSysreq.onclick=(ev)=>this.prikaziSysreq();
        red.appendChild(btnSysreq);

    }

    crtajFormu2(host)
    {
        let red = this.crtajRed(host);

        let l = document.createElement("h2");
        l.innerHTML = "Kupi igru";
        red.appendChild(l);

        red = this.crtajRed(host);
        
        l = document.createElement("label");
        l.innerHTML = "Igra:";
        red.appendChild(l);

        let igraSelect = document.createElement("select")
        igraSelect.className = "Polje";
        igraSelect.id = "selectProdavnica";
        red.appendChild(igraSelect);

        let opcija;
        this.listaIgara.forEach(p => {
            opcija = document.createElement("option");
            opcija.innerHTML = p.naziv;
            opcija.value = p.id;
            igraSelect.appendChild(opcija);
        })

        red = this.crtajRed(host);
        
        l = document.createElement("label");
        l.innerHTML = "Kolicina:"
        red.appendChild(l);

        let kolicinaPolje = document.createElement("input");
        kolicinaPolje.className = "Polje";
        kolicinaPolje.type = "number";
        red.appendChild(kolicinaPolje);

        let btnDodajUKorpu = document.createElement("button");
        btnDodajUKorpu.className = "Dugme";
        btnDodajUKorpu.innerHTML = "Dodaj u korpu";
        btnDodajUKorpu.onclick=(ev)=>this.dodajUKorpu(kolicinaPolje.value);
        red.appendChild(btnDodajUKorpu);

        let btnKupi = document.createElement("button");
        btnKupi.className = "Dugme";
        btnKupi.innerHTML = "Kupi";
        btnKupi.onclick=(ev)=>this.obaviKupovinu(kolicinaPolje.value);
        red.appendChild(btnKupi);

    }

    crtajFormu3(host)
    {
        let red = this.crtajRed(host);

        let l = document.createElement("h2");
        l.innerHTML = "Prikazi Screenshot";
        red.appendChild(l);

        red = this.crtajRed(host);
        
        l = document.createElement("label");
        l.innerHTML = "Igra:";
        red.appendChild(l);

        let igraSelect = document.createElement("select")
        igraSelect.className = "Polje";
        igraSelect.id = "selectSlika";
        red.appendChild(igraSelect);

        let opcija;
        this.listaIgara.forEach(p => {
            opcija = document.createElement("option");
            opcija.innerHTML = p.naziv;
            opcija.value = p.id;
            igraSelect.appendChild(opcija);
        })

        let btnPrikazi = document.createElement("button");
        btnPrikazi.className = "Dugme";
        btnPrikazi.innerHTML = "Prikazi";
        btnPrikazi.onclick=(ev)=>this.prikaziSliku();
        red.appendChild(btnPrikazi);

    }

    crtajIgru(host)
    {
        var tabela = document.createElement("table");
        tabela.className="tabela";
        host.appendChild(tabela);

        var tabelahead= document.createElement("thead");
        tabela.appendChild(tabelahead);

        var tr = document.createElement("tr");
        tabelahead.appendChild(tr);

        var tabelaBody = document.createElement("tbody");
        tabelaBody.className="TabelaPodaciIgra";
        tabela.appendChild(tabelaBody);

        let th;
        var zag=["Naziv", "Zanr", "Godina Izlaska", "Developer", "Izdavac", "Ocena", "Duzina"];
        zag.forEach(el=>{
            th = document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })
    }

    crtajKorpu(host)
    {
        var tabela = document.createElement("table");
        host.appendChild(tabela);

        var tabelahead= document.createElement("thead");
        tabela.appendChild(tabelahead);

        var tr = document.createElement("tr");
        tabelahead.appendChild(tr);

        var tabelaBody = document.createElement("tbody");
        tabelaBody.className="TabelaPodaciKorpa";
        tabela.appendChild(tabelaBody);

        let th;
        var zag=["Igra", "Cena", "Kolicina", "Racun"];
        zag.forEach(el=>{
            th = document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })
    }

    crtajSysreq(host)
    {
        var tabela = document.createElement("table");
        tabela.className="tabela";
        host.appendChild(tabela);

        var tabelahead= document.createElement("thead");
        tabela.appendChild(tabelahead);

        var tr = document.createElement("tr");
        tabelahead.appendChild(tr);

        var tabelaBody = document.createElement("tbody");
        tabelaBody.className="TabelaPodaciSysreq";
        tabela.appendChild(tabelaBody);

        let th;
        var zag=["Cpu", "Gpu", "Ram", "Slobodan prostor"];
        zag.forEach(el=>{
            th = document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })
    }

    crtajSliku(host)
    {
        var slika = document.createElement("img");
        slika.className = "SlikaZaPrikaz";
        slika.id = "slikaZaPrikaz";
        host.appendChild(slika);
    }

    crtajRed(host)
    {
        let red = document.createElement("div");
        red.className="red";
        host.appendChild(red);
        return red;
    }

    upisiKorisnika(username)
    {
        if(username == "" || username == null)
        {
            alert("Unesite korisnicko ime!");
            return;
        }

        fetch("https://localhost:5001/Korisnik/DodajKorisnika/"+username,
        {
            method:"POST"
        })
        .then(s =>
        {
            if(s.status == 400)
            {
                alert("Korisnik sa unetim korisnickim imenom vec postoji!");
                return;
            }
            if(s.ok)
            {
               alert("Uspesno upisan novi korisnik!"); 
            }
            
        })
    }

    upisiRecenziju(ocena, duzina, review)
    {
        if(ocena === ""){
            alert("Unesite ocenu za igru");
            return;
        }
        if(duzina === ""){
            alert("Unesite vreme koje vam je bilo potrebno za prelazak igre");
            return;
        }
        if(review === ""){
            alert("Unesite recenziju");
            return;
        }

        let ocenaPars = parseInt(ocena);
        let duzinaPars = parseInt(duzina);

        if(ocenaPars < 1 || ocenaPars > 10)
        {
            alert("Unesite vrednost izmedju 1 i 10");
            return;
        }
        if(duzinaPars < 1 || duzinaPars > 250)
        {
            alert("Unesite vrednost izmedju 1 i 250");
            return;
        }
        //duzina stringa veca od 1000?
        
        let igraOptionEl = this.kontejner.querySelector("select[id='selectRecenzija']");
        var idIgre = igraOptionEl.options[igraOptionEl.selectedIndex].value;
        let usernameEl = this.kontejner.querySelector("input[type='text']");
        var usernameKorisnika = usernameEl.value;

        if(usernameKorisnika == "" || usernameKorisnika == null)
        {
            alert("Unesite korisnicko ime!");
            return;
        }

        fetch("https://localhost:5001/Recenzija/DodajRecenziju/"+ocena+"/"+duzina+"/"+review+"/"+idIgre+"/"+usernameKorisnika,
        {
            method:"POST"
        }).then( s=>
            {
                if(s.status == 400)
                {
                    alert("Korisnik je vec uneo recenziju za odabranu igru");
                    return;
                }
                if(s.status == 403 || s.status == 500)
                {
                    alert("Dati korisnik ne postoji.Morate se registrovati!");
                    return;
                }
                if (s.status == 200)
                {
                    var teloTabele = this.obrisiPrethodniSadrzajIgra();
                    s.json().then(s=>
                    {
                        const i = new Igra(s.id, s.naziv, s.zanr, s.godinaIzlaska, s.developer, s.publisher, s.prosecnaOcena, s.prosecnaDuzina);
                        i.crtaj(teloTabele);
                    });
                   
                }
            })

    }

    obrisiRecenziju()
    {
        let igraOptionEl2 = this.kontejner.querySelector("select[id='selectRecenzija']");
        var idIgre2 = igraOptionEl2.options[igraOptionEl2.selectedIndex].value;
        let usernameEl2 = this.kontejner.querySelector("input[type='text']");
        var usernameKorisnika2 = usernameEl2.value;

        if(idIgre2 <= 0 || idIgre2 == null)
        {
            alert("Morate izabrati igru!");
            return;
        }
        if(usernameKorisnika2 == "" || usernameKorisnika2 == null)
        {
            alert("Unesite korisnicko ime!");
            return;
        }

        fetch("https://localhost:5001/Recenzija/ObrisiRecenziju/"+idIgre2+"/"+usernameKorisnika2,
        {
            method:"DELETE"
        }).then(s =>
        {
            if(s.status == 400)
            {
                alert("Korisnik nije dao recenziju odabranoj igri!");
                return;
            }
            if(s.ok)
            {
               alert("Uspesno obrisana recenzija"); 
            }
            
        })
    }

    obrisiPrethodniSadrzajIgra()
    {
        var teloTabele = this.kontejner.querySelector(".TabelaPodaciIgra");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        teloTabele = document.createElement("tbody");
        teloTabele.className="TabelaPodaciIgra";
        roditelj.appendChild(teloTabele);
        return teloTabele;
    }

    obrisiPrethodniSadrzajKorpa()
    {
        var teloTabele = this.kontejner.querySelector(".TabelaPodaciKorpa");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        teloTabele = document.createElement("tbody");
        teloTabele.className="TabelaPodaciKorpa";
        roditelj.appendChild(teloTabele);
        return teloTabele;
    }

    obrisiPrethodniSadrzajSysreq()
    {
        var teloTabele = this.kontejner.querySelector(".TabelaPodaciSysreq");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);

        teloTabele = document.createElement("tbody");
        teloTabele.className="TabelaPodaciSysreq";
        roditelj.appendChild(teloTabele);
        return teloTabele;
    }

    obrisiPrethodniSadrzajSlika()
    {
        var mestoSlike = this.kontejner.querySelector(".SlikaZaPrikaz");
        var roditelj = mestoSlike.parentNode;
        roditelj.removeChild(mestoSlike);

        mestoSlike = document.createElement("img");
        mestoSlike.className = "SlikaZaPrikaz";
        roditelj.appendChild(mestoSlike);
        return mestoSlike;
    }

    prikaziSysreq()
    {
        let igraOptionEl3 = this.kontejner.querySelector("select[id='selectRecenzija']");
        var idIgre3 = igraOptionEl3.options[igraOptionEl3.selectedIndex].value;
        fetch("https://localhost:5001/Sysreq/PreuzmiSysreq/"+idIgre3,
        {
            method:"GET"
        }).then( s=>
            {
               if (s.status == 200)
               {    
                   var teloTabele = this.obrisiPrethodniSadrzajSysreq();
                   s.json().then(data=>{
                       data.forEach(s=>{
                          const sysr = new Sysreq(s.id, s.cpu, s.gpu, s.ram, s.freeSpace, s.igraFK);
                          sysr.crtaj(teloTabele);
                       });
                   })
               }
            })
    }

    dodajUKorpu(korpa)
    {
        if(korpa <= 0)
        {
            alert("Unesite odgovarajucu kolicinu");
            return;
        }

        let igraOptionEl = this.kontejner.querySelector("select[id='selectProdavnica']");
        var idIgre = igraOptionEl.options[igraOptionEl.selectedIndex].value;
       
        var imeIgre = igraOptionEl.options[igraOptionEl.selectedIndex].innerHTML;

        var teloTabele = this.obrisiPrethodniSadrzajKorpa();
        fetch("https://localhost:5001/Prodavnica/PreuzmiArtikl/"+idIgre,
        {
            method:"GET"
        })
        .then(s=>
            {
            if(s.ok)
            {
                s.json().then(s=>
                    {
                        const p = new Prodavnica(s.id, s.cenaIgre, s.kolicinaProdatih, korpa, imeIgre,s.igraFK);
                        p.crtaj(teloTabele);
                    })
            }
        })

    }

    obaviKupovinu(korpa)
    {
        if(korpa <= 0)
        {
            alert("Unesite odgovarajucu kolicinu");
            return;
        }

        let igraOptionEl = this.kontejner.querySelector("select[id='selectProdavnica']");
        var idIgre = igraOptionEl.options[igraOptionEl.selectedIndex].value;

        fetch("https://localhost:5001/Prodavnica/PromeniKolicinuProdatih/"+idIgre+"/"+korpa,
        {
            method:"PUT"
        }).then(s=>{
            if(s.status == 200)
                {
                    alert("Kupovina obavljena!");
                    return;
                }
        })
    }

    prikaziSliku()
    {   
        let igraOptionEl = this.kontejner.querySelector("select[id='selectSlika']");
        var idIgre = igraOptionEl.options[igraOptionEl.selectedIndex].value;

        var slika = this.obrisiPrethodniSadrzajSlika();
        slika.src = "../Slike/"+idIgre+".jpg";
    }

}