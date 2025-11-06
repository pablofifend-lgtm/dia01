interface IArmable {
    dameFuerzaDeAtaque(): number;

}

class Katana implements IArmable {
    dameFuerzaDeAtaque(): number {
        return 50;
    }
}

class Shuriken implements IArmable {
    dameFuerzaDeAtaque(): number {
        return 10;
    }
}

class Kunai implements IArmable {
    dameFuerzaDeAtaque(): number {
        return 15;
    }
}

class Kama implements IArmable {
    dameFuerzaDeAtaque(): number {
        return 5;
    }
}

class Katanaka implements IArmable {
    dameFuerzaDeAtaque(): number {
        return 100;
    }
}
class Nunchaku implements IArmable {
    dameFuerzaDeAtaque(): number {
        return 25;
    }
}

interface IDefendible {
    dameDefensa(): number;
}

class ArmaduraPaja implements IDefendible {
    dameDefensa(): number {
        return 10;
    }
}

class ArmaduraBronce implements IDefendible {
    dameDefensa(): number {
        return 15;
    }
}

class ArmaduraAcero implements IDefendible {
    dameDefensa(): number {
        return 100;
    }
}
//enumerar 
const Tipo = { Genin: 1, Chulin: 2, Jounin: 3, Lider: 4 } as const;
type Tipo = (typeof Tipo)[keyof typeof Tipo];

class Ninja {
    //la clase ninja tiene ataque y defensa que ya implementa la interface
    Ataque: IArmable;
    Defensa: IDefendible;
    constructor(ataque: IArmable, defensa: IDefendible) {
        this.Ataque = ataque;
        this.Defensa = defensa;
    }
}

let JacintoNinja = new Ninja(new Katana(), new ArmaduraBronce());

class FactoriaNinja {
    dameNinja(TipoNinja: Tipo): Ninja {
        switch (TipoNinja) {
            case Tipo.Genin: return new Ninja(new Kama(), new ArmaduraPaja());
            case Tipo.Chulin: return new Ninja(new Katana(), new ArmaduraBronce());
            case Tipo.Jounin: return new Ninja(new Katanaka(), new ArmaduraAcero());
            case Tipo.Lider: return new Ninja(new Nunchaku(), new ArmaduraAcero());
            default: return new Ninja(new Kama(), new ArmaduraPaja());
        }
    }
}
let JacintoInicial = new FactoriaNinja().dameNinja(Tipo.Genin);

let JacintoIntermedio = new FactoriaNinja().dameNinja(Tipo.Chulin);

let JacintoMaster = new FactoriaNinja().dameNinja(Tipo.Jounin);
let JacintoLider = new FactoriaNinja().dameNinja(Tipo.Lider);

let ArrayNinja: Ninja[] = []
ArrayNinja.forEach(element => {
    console.log(element.Defensa.dameDefensa)
})