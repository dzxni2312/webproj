export class Igra{

    constructor(id, naziv, zanr, godinaIzlaska, developer, publisher, prosecnaOcena, prosecnaDuzina){
        this.id = id;
        this.naziv = naziv;
        this.zanr = zanr;
        this.godinaIzlaska = godinaIzlaska;
        this.developer = developer;
        this.publisher = publisher;
        this.prosecnaOcena = prosecnaOcena;
        this.prosecnaDuzina = prosecnaDuzina;
    }

    crtaj(host){
       
        var tr = document.createElement("tr");
        host.appendChild(tr);

        var el = document.createElement("td");
        el.innerHTML=this.naziv;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.zanr;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.godinaIzlaska;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.developer;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.publisher;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.prosecnaOcena;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.prosecnaDuzina;
        tr.appendChild(el);
    }
}