// Tipos e Interfaces
type GrupoRoca = 'igneas' | 'metamorficas' | 'sedimentarias';
type TamanoGrano = 'muy-grueso' | 'grueso' | 'medio' | 'fino';
type ClasificacionRoca = 'construccion' | 'ornamentales' | 'utensilios' | 'machacadas';
type Textura = 'vitrea' | 'afanitica' | 'faneritica';
type ViewMode = 'extendida' | 'reducida';
type Criterio = 'igneas' | 'metamorficas' | 'sedimentarias';
type OutputFormat = 'europeo' | 'americano';
type Language = 'es' | 'en';

interface Mineral {
    id: string;
    nombre: string;
    grupo: GrupoRoca;
    dureza: number;
    tamanoGrano: TamanoGrano;
    clasificacion: ClasificacionRoca;
    tamanoCristales: number;
    temperatura: number;
    estructura: string;
    formaGranos: string;
    textura: Textura;
}

interface State {
    viewMode: ViewMode;
    criterio: Criterio;
    outputFormat: OutputFormat;
    mineral: Mineral;
}

interface Translation {
    es: string;
    en: string;
}

interface DataStructure {
    grupos: GrupoRoca[];
    tamanosGrano: TamanoGrano[];
    clasificaciones: ClasificacionRoca[];
    texturas: Textura[];
    grupoLabels: Record<GrupoRoca, Translation>;
    tamanoGranoLabels: Record<TamanoGrano, Translation>;
    clasificacionLabels: Record<ClasificacionRoca, Translation>;
    texturaLabels: Record<Textura, Translation>;
    translations: Record<string, Translation>;
}

interface InputAttributes {
    min?: number;
    max?: number;
    [key: string]: any;
}

// Estado de la aplicación
const state: State = {
    viewMode: 'extendida',
    criterio: 'igneas',
    outputFormat: 'europeo',
    mineral: {
        id: '',
        nombre: '',
        grupo: 'igneas',
        dureza: 5,
        tamanoGrano: 'medio',
        clasificacion: 'construccion',
        tamanoCristales: 5,
        temperatura: 0,
        estructura: '',
        formaGranos: '',
        textura: 'vitrea'
    }
};

// Definiciones de datos
const data: DataStructure = {
    grupos: ['igneas', 'metamorficas', 'sedimentarias'],
    tamanosGrano: ['muy-grueso', 'grueso', 'medio', 'fino'],
    clasificaciones: ['construccion', 'ornamentales', 'utensilios', 'machacadas'],
    texturas: ['vitrea', 'afanitica', 'faneritica'],

    grupoLabels: {
        igneas: { es: 'Ígneas', en: 'Igneous' },
        metamorficas: { es: 'Metamórficas', en: 'Metamorphic' },
        sedimentarias: { es: 'Sedimentarias', en: 'Sedimentary' }
    },

    tamanoGranoLabels: {
        'muy-grueso': { es: 'Muy Grueso (>30mm)', en: 'Very Coarse (>30mm)' },
        'grueso': { es: 'Grueso (5-30mm)', en: 'Coarse (5-30mm)' },
        'medio': { es: 'Medio (2-5mm)', en: 'Medium (2-5mm)' },
        'fino': { es: 'Fino (<2mm)', en: 'Fine (<2mm)' }
    },

    clasificacionLabels: {
        construccion: { es: 'Construcción', en: 'Construction' },
        ornamentales: { es: 'Ornamentales', en: 'Ornamental' },
        utensilios: { es: 'Utensilios', en: 'Utensils' },
        machacadas: { es: 'Piedras Machacadas', en: 'Crushed Stones' }
    },

    texturaLabels: {
        vitrea: { es: 'Vítrea', en: 'Vitreous' },
        afanitica: { es: 'Afanítica', en: 'Aphanitic' },
        faneritica: { es: 'Fanerítica', en: 'Phaneritic' }
    },

    translations: {
        id: { es: 'ID', en: 'ID' },
        nombre: { es: 'Nombre', en: 'Name' },
        grupo: { es: 'Grupo/Origen', en: 'Group/Origin' },
        dureza: { es: 'Dureza (Mohs)', en: 'Hardness (Mohs)' },
        tamanoGrano: { es: 'Tamaño de Grano', en: 'Grain Size' },
        clasificacion: { es: 'Clasificación', en: 'Classification' },
        tamanoCristales: { es: 'Tamaño de Cristales', en: 'Crystal Size' },
        temperatura: { es: 'Temperatura de Formación', en: 'Formation Temperature' },
        estructura: { es: 'Estructura', en: 'Structure' },
        formaGranos: { es: 'Forma de los Granos', en: 'Grain Shape' },
        textura: { es: 'Textura', en: 'Texture' }
    }
};

// Funciones de validación
function validateId(id: string): boolean {
    const regex = /^[A-Z]{2}\d{4}[A-Z]{2}$/;
    return regex.test(id);
}

function validateMineral(): boolean {
    if (!validateId(state.mineral.id)) return false;

    switch (state.criterio) {
        case 'igneas':
            return state.mineral.grupo === 'igneas' &&
                state.mineral.tamanoGrano === 'muy-grueso';
        case 'metamorficas':
            return state.mineral.grupo === 'metamorficas' &&
                (state.mineral.tamanoGrano === 'medio' || state.mineral.tamanoGrano === 'fino') &&
                state.mineral.textura === 'vitrea';
        case 'sedimentarias':
            return state.mineral.grupo === 'sedimentarias' &&
                state.mineral.textura === 'faneritica';
        default:
            return false;
    }
}

// Funciones de temperatura
function kelvinToFahrenheit(k: number): string {
    return ((k - 273.15) * 9 / 5 + 32).toFixed(2);
}

function kelvinToCelsius(k: number): string {
    return (k - 273.15).toFixed(2);
}

function renderForm(): void {
    const formFields = document.getElementById('formFields');
    if (!formFields) return;

    formFields.innerHTML = '';

    if (state.viewMode === 'extendida') {
        renderExtendedForm(formFields);
    } else {
        renderReducedForm(formFields);
    }
}

function renderExtendedForm(container: HTMLElement): void {
    // ID
    const idGroup = createFieldGroup('id', 'ID (LLDDDDLL):', 'text', state.mineral.id);
    container.appendChild(idGroup);

    // Nombre
    const nombreGroup = createFieldGroup('nombre', 'Nombre:', 'text', state.mineral.nombre);
    container.appendChild(nombreGroup);

    // Grupo
    const grupoGroup = createSelectGroup('grupo', 'Grupo/Origen:', data.grupos,
        (value: GrupoRoca) => data.grupoLabels[value].es);
    container.appendChild(grupoGroup);

    // Dureza
    const durezaGroup = createFieldGroup('dureza', 'Dureza (Escala de Mohs 1-10):', 'number',
        state.mineral.dureza.toString(), { min: 1, max: 10 });
    container.appendChild(durezaGroup);

    // Tamaño de Grano
    const tamanoGranoGroup = createSelectGroup('tamanoGrano', 'Tamaño de Grano:', data.tamanosGrano,
        (value: TamanoGrano) => data.tamanoGranoLabels[value].es);
    container.appendChild(tamanoGranoGroup);

    // Clasificación
    const clasificacionGroup = createSelectGroup('clasificacion', 'Clasificación:', data.clasificaciones,
        (value: ClasificacionRoca) => data.clasificacionLabels[value].es);
    container.appendChild(clasificacionGroup);

    // Tamaño de Cristales
    const cristalesGroup = createFieldGroup('tamanoCristales', 'Tamaño de Cristales (0-10):', 'number',
        state.mineral.tamanoCristales.toString(), { min: 0, max: 10 });
    container.appendChild(cristalesGroup);

    // Temperatura
    const tempGroup = createFieldGroup('temperatura', 'Temperatura de Formación (K, -100 a 100):', 'number',
        state.mineral.temperatura.toString(), { min: -100, max: 100 });
    container.appendChild(tempGroup);

    // Textura
    const texturaGroup = createSelectGroup('textura', 'Textura:', data.texturas,
        (value: Textura) => data.texturaLabels[value].es);
    container.appendChild(texturaGroup);

    // Estructura
    const estructuraGroup = createTextareaGroup('estructura', 'Estructura:', state.mineral.estructura);
    estructuraGroup.classList.add('field-full-width');
    container.appendChild(estructuraGroup);

    // Forma de Granos
    const formaGranosGroup = createTextareaGroup('formaGranos', 'Forma de los Granos:', state.mineral.formaGranos);
    formaGranosGroup.classList.add('field-full-width');
    container.appendChild(formaGranosGroup);
}

function renderReducedForm(container: HTMLElement): void {
    // ID
    const idInput = createPlaceholderField('id', 'ID (LLDDDDLL)', 'text', state.mineral.id);
    container.appendChild(idInput);

    // Nombre
    const nombreInput = createPlaceholderField('nombre', 'Nombre', 'text', state.mineral.nombre);
    container.appendChild(nombreInput);

    // Grupo
    const grupoSelect = createPlaceholderSelect('grupo', data.grupos,
        (value: GrupoRoca) => data.grupoLabels[value].es);
    container.appendChild(grupoSelect);

    // Dureza
    const durezaInput = createPlaceholderField('dureza', 'Dureza (1-10)', 'number',
        state.mineral.dureza.toString(), { min: 1, max: 10 });
    container.appendChild(durezaInput);

    // Tamaño de Grano
    const tamanoGranoSelect = createPlaceholderSelect('tamanoGrano', data.tamanosGrano,
        (value: TamanoGrano) => data.tamanoGranoLabels[value].es);
    container.appendChild(tamanoGranoSelect);

    // Clasificación
    const clasificacionSelect = createPlaceholderSelect('clasificacion', data.clasificaciones,
        (value: ClasificacionRoca) => data.clasificacionLabels[value].es);
    container.appendChild(clasificacionSelect);

    // Tamaño de Cristales
    const cristalesInput = createPlaceholderField('tamanoCristales', 'Tamaño de Cristales (0-10)', 'number',
        state.mineral.tamanoCristales.toString(), { min: 0, max: 10 });
    container.appendChild(cristalesInput);

    // Temperatura
    const tempInput = createPlaceholderField('temperatura', 'Temperatura K (-100 a 100)', 'number',
        state.mineral.temperatura.toString(), { min: -100, max: 100 });
    container.appendChild(tempInput);

    // Textura
    const texturaSelect = createPlaceholderSelect('textura', data.texturas,
        (value: Textura) => data.texturaLabels[value].es);
    container.appendChild(texturaSelect);

    // Estructura
    const estructuraTextarea = createPlaceholderTextarea('estructura', 'Estructura', state.mineral.estructura);
    estructuraTextarea.classList.add('field-full-width');
    container.appendChild(estructuraTextarea);

    // Forma de Granos
    const formaGranosTextarea = createPlaceholderTextarea('formaGranos', 'Forma de los Granos',
        state.mineral.formaGranos);
    formaGranosTextarea.classList.add('field-full-width');
    container.appendChild(formaGranosTextarea);
}

// Funciones auxiliares para crear campos
function createFieldGroup(fieldName: keyof Mineral, labelText: string, inputType: string,
    value: string, attrs: InputAttributes = {}): HTMLDivElement {
    const group = document.createElement('div');
    group.className = 'field-group';

    const label = document.createElement('label');
    label.className = 'field-label';
    label.textContent = labelText;

    const input = document.createElement('input');
    input.className = 'field-input';
    input.type = inputType;
    input.value = value;
    Object.keys(attrs).forEach(attr => input.setAttribute(attr, attrs[attr].toString()));

    if (fieldName === 'id') {
        input.maxLength = 8;
    }

    input.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        let val = target.value;
        if (fieldName === 'id') {
            val = val.toUpperCase();
            target.value = val;
        }
        (state.mineral[fieldName] as any) = inputType === 'number' ? parseFloat(val) || 0 : val;
    });

    group.appendChild(label);
    group.appendChild(input);
    return group;
}

function createSelectGroup<T extends string>(
    fieldName: keyof Mineral,
    labelText: string,
    options: readonly T[],
    getLabelFunc: (value: T) => string
): HTMLDivElement {
    const group = document.createElement('div');
    group.className = 'field-group';

    const label = document.createElement('label');
    label.className = 'field-label';
    label.textContent = labelText;

    const select = document.createElement('select');
    select.className = 'field-select';

    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = getLabelFunc(opt);
        if (state.mineral[fieldName] === opt) {
            option.selected = true;
        }
        select.appendChild(option);
    });

    select.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLSelectElement;
        (state.mineral[fieldName] as any) = target.value;
    });

    group.appendChild(label);
    group.appendChild(select);
    return group;
}

function createTextareaGroup(fieldName: keyof Mineral, labelText: string, value: string): HTMLDivElement {
    const group = document.createElement('div');
    group.className = 'field-group';

    const label = document.createElement('label');
    label.className = 'field-label';
    label.textContent = labelText;

    const textarea = document.createElement('textarea');
    textarea.className = 'field-textarea';
    textarea.value = value;
    textarea.rows = 2;

    textarea.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLTextAreaElement;
        (state.mineral[fieldName] as any) = target.value;
    });

    group.appendChild(label);
    group.appendChild(textarea);
    return group;
}

function createPlaceholderField(fieldName: keyof Mineral, placeholder: string, inputType: string,
    value: string, attrs: InputAttributes = {}): HTMLDivElement {
    const group = document.createElement('div');
    group.className = 'field-group';

    const input = document.createElement('input');
    input.className = 'field-input';
    input.type = inputType;
    input.placeholder = placeholder;
    input.value = value;
    Object.keys(attrs).forEach(attr => input.setAttribute(attr, attrs[attr].toString()));

    if (fieldName === 'id') {
        input.maxLength = 8;
    }

    input.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        let val = target.value;
        if (fieldName === 'id') {
            val = val.toUpperCase();
            target.value = val;
        }
        (state.mineral[fieldName] as any) = inputType === 'number' ? parseFloat(val) || 0 : val;
    });

    group.appendChild(input);
    return group;
}

function createPlaceholderSelect<T extends string>(
    fieldName: keyof Mineral,
    options: readonly T[],
    getLabelFunc: (value: T) => string
): HTMLDivElement {
    const group = document.createElement('div');
    group.className = 'field-group';

    const select = document.createElement('select');
    select.className = 'field-select';

    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = getLabelFunc(opt);
        if (state.mineral[fieldName] === opt) {
            option.selected = true;
        }
        select.appendChild(option);
    });

    select.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLSelectElement;
        (state.mineral[fieldName] as any) = target.value;
    });

    group.appendChild(select);
    return group;
}

function createPlaceholderTextarea(fieldName: keyof Mineral, placeholder: string, value: string): HTMLDivElement {
    const group = document.createElement('div');
    group.className = 'field-group';

    const textarea = document.createElement('textarea');
    textarea.className = 'field-textarea';
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.rows = 2;

    textarea.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLTextAreaElement;
        (state.mineral[fieldName] as any) = target.value;
    });

    group.appendChild(textarea);
    return group;
}

// Mostrar resultados
function showResults(): void {
    const resultContainer = document.getElementById('resultContainer');
    const validationResult = document.getElementById('validationResult');
    const mineralInfo = document.getElementById('mineralInfo');

    if (!resultContainer || !validationResult || !mineralInfo) return;

    resultContainer.classList.remove('hidden');

    const isValid = validateMineral();
    const lang: Language = state.outputFormat === 'americano' ? 'en' : 'es';

    if (isValid) {
        validationResult.innerHTML = `
            <div class="face-icon face-happy">😊</div>
            <h3 class="result-title valid">${lang === 'es' ? '¡Mineral Válido!' : 'Valid Mineral!'}</h3>
        `;

        mineralInfo.classList.remove('hidden');
        mineralInfo.innerHTML = `
            <h3 class="info-title">${lang === 'es' ? 'Información del Mineral' : 'Mineral Information'}</h3>
            <div class="info-grid">
                <div class="info-item"><strong>${data.translations.id[lang]}:</strong> ${state.mineral.id}</div>
                <div class="info-item"><strong>${data.translations.nombre[lang]}:</strong> ${state.mineral.nombre}</div>
                <div class="info-item"><strong>${data.translations.grupo[lang]}:</strong> ${data.grupoLabels[state.mineral.grupo][lang]}</div>
                <div class="info-item"><strong>${data.translations.dureza[lang]}:</strong> ${state.mineral.dureza}</div>
                <div class="info-item"><strong>${data.translations.tamanoGrano[lang]}:</strong> ${data.tamanoGranoLabels[state.mineral.tamanoGrano][lang]}</div>
                <div class="info-item"><strong>${data.translations.clasificacion[lang]}:</strong> ${data.clasificacionLabels[state.mineral.clasificacion][lang]}</div>
                <div class="info-item"><strong>${data.translations.tamanoCristales[lang]}:</strong> ${state.mineral.tamanoCristales}</div>
                <div class="info-item">
                    <strong>${data.translations.temperatura[lang]}:</strong> 
                    ${state.outputFormat === 'americano'
                ? kelvinToFahrenheit(state.mineral.temperatura) + '°F'
                : kelvinToCelsius(state.mineral.temperatura) + '°C'}
                </div>
                <div class="info-item"><strong>${data.translations.textura[lang]}:</strong> ${data.texturaLabels[state.mineral.textura][lang]}</div>
                <div class="info-item info-full-width"><strong>${data.translations.estructura[lang]}:</strong> ${state.mineral.estructura}</div>
                <div class="info-item info-full-width"><strong>${data.translations.formaGranos[lang]}:</strong> ${state.mineral.formaGranos}</div>
            </div>
        `;
    } else {
        validationResult.innerHTML = `
            <div class="face-icon face-sad">😞</div>
            <h3 class="result-title invalid">${lang === 'es' ? 'Mineral No Válido' : 'Invalid Mineral'}</h3>
        `;
        mineralInfo.classList.add('hidden');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Modo de vista
    const viewModeSelect = document.getElementById('viewMode') as HTMLSelectElement;
    if (viewModeSelect) {
        viewModeSelect.addEventListener('change', (e: Event) => {
            const target = e.target as HTMLSelectElement;
            state.viewMode = target.value as ViewMode;
            renderForm();
        });
    }

    // Criterio
    const criterioSelect = document.getElementById('criterio') as HTMLSelectElement;
    if (criterioSelect) {
        criterioSelect.addEventListener('change', (e: Event) => {
            const target = e.target as HTMLSelectElement;
            state.criterio = target.value as Criterio;
        });
    }

    // Formato de salida
    const outputFormatSelect = document.getElementById('outputFormat') as HTMLSelectElement;
    if (outputFormatSelect) {
        outputFormatSelect.addEventListener('change', (e: Event) => {
            const target = e.target as HTMLSelectElement;
            state.outputFormat = target.value as OutputFormat;
        });
    }

    // Botón validar
    const validateBtn = document.getElementById('validateBtn');
    if (validateBtn) {
        validateBtn.addEventListener('click', showResults);
    }

    // Render inicial
    renderForm();
});