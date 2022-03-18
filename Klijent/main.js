import { Sajt } from "./Sajt.js";
import { Igra } from "./Igra.js";

var listaIgara =[];

fetch("https://localhost:5001/Igra/PreuzmiIgre")
.then(p=>{
    p.json().then(igre=>{
        igre.forEach(igra => {
            var p = new Igra(igra.id, igra.naziv, igra.zanr, igra.godinaIzlaska, igra.developer, igra.publisher);
            listaIgara.push(p);
        })

        var s = new Sajt("Prodavnica1",listaIgara);
        s.crtaj(document.body);
        
        var s2 = new Sajt("Prodavnica2",listaIgara);
        s2.crtaj(document.body);
    })
})

