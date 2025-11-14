// salida.ts

import { ISalida, Roca } from './types.js';

export class SalidaAmericana implements ISalida {
    private contenedorId: string;

    constructor(contenedorId: string) {
        this.contenedorId = contenedorId;
    }

    private kelvinAFahrenheit(kelvin: number): number {
        return (kelvin - 273.15) * 9/5 + 32;
    }

    muestra(roca: Roca): void {
        const contenedor = document.getElementById(this.contenedorId);
        if (!contenedor) return;

        const traduccionGrupo: { [key: string]: string } = {
            'igneas': 'Igneous',
            'metamorficas': 'Metamorphic',
            'sedimentarias': 'Sedimentary'
        };

        const traduccionGrano: { [key: string]: string } = {
            'muy_grueso': 'Very coarse grain',
            'grueso': 'Coarse grain',
            'medio': 'Medium grain',
            'fino': 'Fine grain'
        };

        const traduccionClasificacion: { [key: string]: string } = {
            'construccion': 'Construction',
            'ornamental': 'Ornamental',
            'utensilios': 'Tools',
            'machacada': 'Crushed'
        };

        const traduccionTextura: { [key: string]: string } = {
            'vitrea': 'Glassy',
            'afanitica': 'Aphanitic',
            'faneritica': 'Phaneritic'
        };

        contenedor.innerHTML = `
            <h3>American Format</h3>
            <p><strong>ID:</strong> ${roca.id}</p>
            <p><strong>Name:</strong> ${roca.nombre}</p>
            <p><strong>Group:</strong> ${traduccionGrupo[roca.grupo]}</p>
            <p><strong>Hardness:</strong> ${roca.dureza} (Mohs)</p>
            <p><strong>Grain Size:</strong> ${traduccionGrano[roca.tamanoGrano]}</p>
            <p><strong>Classification:</strong> ${traduccionClasificacion[roca.clasificacion]}</p>
            <p><strong>Crystal Size:</strong> ${roca.tamanoCristales}</p>
            <p><strong>Formation Temperature:</strong> ${this.kelvinAFahrenheit(roca.temperaturaFormacion).toFixed(2)}°F</p>
            <p><strong>Structure:</strong> ${roca.estructura}</p>
            <p><strong>Grain Shape:</strong> ${roca.formaGranos}</p>
            <p><strong>Texture:</strong> ${traduccionTextura[roca.textura]}</p>
        `;
        contenedor.style.display = 'block';
    }
}

export class SalidaEuropea implements ISalida {
    private contenedorId: string;

    constructor(contenedorId: string) {
        this.contenedorId = contenedorId;
    }

    private kelvinACelsius(kelvin: number): number {
        return kelvin - 273.15;
    }

    muestra(roca: Roca): void {
        const contenedor = document.getElementById(this.contenedorId);
        if (!contenedor) return;

        const traduccionGrupo: { [key: string]: string } = {
            'igneas': 'Ígneas',
            'metamorficas': 'Metamórficas',
            'sedimentarias': 'Sedimentarias'
        };

        const traduccionGrano: { [key: string]: string } = {
            'muy_grueso': 'Grano muy grueso',
            'grueso': 'Grano grueso',
            'medio': 'Grano medio',
            'fino': 'Grano fino'
        };

        const traduccionClasificacion: { [key: string]: string } = {
            'construccion': 'Construcción',
            'ornamental': 'Ornamental',
            'utensilios': 'Utensilios',
            'machacada': 'Machacada'
        };

        const traduccionTextura: { [key: string]: string } = {
            'vitrea': 'Vítrea',
            'afanitica': 'Afanítica',
            'faneritica': 'Fanerítica'
        };

        contenedor.innerHTML = `
            <h3>Formato Europeo</h3>
            <p><strong>ID:</strong> ${roca.id}</p>
            <p><strong>Nombre:</strong> ${roca.nombre}</p>
            <p><strong>Grupo:</strong> ${traduccionGrupo[roca.grupo]}</p>
            <p><strong>Dureza:</strong> ${roca.dureza} (Mohs)</p>
            <p><strong>Tamaño de Grano:</strong> ${traduccionGrano[roca.tamanoGrano]}</p>
            <p><strong>Clasificación:</strong> ${traduccionClasificacion[roca.clasificacion]}</p>
            <p><strong>Tamaño de Cristales:</strong> ${roca.tamanoCristales}</p>
            <p><strong>Temperatura de Formación:</strong> ${this.kelvinACelsius(roca.temperaturaFormacion).toFixed(2)}°C</p>
            <p><strong>Estructura:</strong> ${roca.estructura}</p>
            <p><strong>Forma de Granos:</strong> ${roca.formaGranos}</p>
            <p><strong>Textura:</strong> ${traduccionTextura[roca.textura]}</p>
        `;
        contenedor.style.display = 'block';
    }
}