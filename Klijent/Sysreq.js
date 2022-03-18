export class Sysreq{

    constructor(id, cpu, gpu, ram, freeSpace, igraFK){
        this.id = id;
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.freeSpace = freeSpace;
        this.igraFK = igraFK;
    }
    
    crtaj(host)
    {   
        var tr = document.createElement("tr");
        host.appendChild(tr);

        var el = document.createElement("td");
        el.innerHTML=this.cpu;
        tr.appendChild(el);

        el = document.createElement("td");
        el.innerHTML=this.gpu;
        tr.appendChild(el);

        el = document.createElement("td");
        el.innerHTML=this.ram;
        tr.appendChild(el);

        el = document.createElement("td");
        el.innerHTML=this.freeSpace;
        tr.appendChild(el);
    }
}