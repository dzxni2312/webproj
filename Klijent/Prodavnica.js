export class Prodavnica{

    constructor(id, cenaIgre, kolicinaProdatih, korpa, imeIgre, igraFK){
        this.id = id;
        this.cenaIgre = cenaIgre
        this.kolicinaProdatih = kolicinaProdatih;
        this.korpa = korpa;
        this.imeIgre = imeIgre;
        this.igraFK = igraFK;
    }
    
    crtaj(host)
    {   
        var tr = document.createElement("tr");
        host.appendChild(tr);

        var el = document.createElement("td");
        el.innerHTML=this.imeIgre;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.cenaIgre;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.korpa;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=this.cenaIgre*this.korpa;
        tr.appendChild(el);
    }
}