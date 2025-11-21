// app.ts - Versión TypeScript
// Estado de la aplicación
var state = {
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
var data = {
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
function validateId(id) {
    var regex = /^[A-Z]{2}\d{4}[A-Z]{2}$/;
    return regex.test(id);
}
function validateMineral() {
    if (!validateId(state.mineral.id))
        return false;
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
// Funciones de conversión de temperatura
function kelvinToFahrenheit(k) {
    return ((k - 273.15) * 9 / 5 + 32).toFixed(2);
}
function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(2);
}
// Renderizado del formulario
function renderForm() {
    var formFields = document.getElementById('formFields');
    if (!formFields)
        return;
    formFields.innerHTML = '';
    if (state.viewMode === 'extendida') {
        renderExtendedForm(formFields);
    }
    else {
        renderReducedForm(formFields);
    }
}
function renderExtendedForm(container) {
    // ID
    var idGroup = createFieldGroup('id', 'ID (LLDDDDLL):', 'text', state.mineral.id);
    container.appendChild(idGroup);
    // Nombre
    var nombreGroup = createFieldGroup('nombre', 'Nombre:', 'text', state.mineral.nombre);
    container.appendChild(nombreGroup);
    // Grupo
    var grupoGroup = createSelectGroup('grupo', 'Grupo/Origen:', data.grupos, function (value) { return data.grupoLabels[value].es; });
    container.appendChild(grupoGroup);
    // Dureza
    var durezaGroup = createFieldGroup('dureza', 'Dureza (Escala de Mohs 1-10):', 'number', state.mineral.dureza.toString(), { min: 1, max: 10 });
    container.appendChild(durezaGroup);
    // Tamaño de Grano
    var tamanoGranoGroup = createSelectGroup('tamanoGrano', 'Tamaño de Grano:', data.tamanosGrano, function (value) { return data.tamanoGranoLabels[value].es; });
    container.appendChild(tamanoGranoGroup);
    // Clasificación
    var clasificacionGroup = createSelectGroup('clasificacion', 'Clasificación:', data.clasificaciones, function (value) { return data.clasificacionLabels[value].es; });
    container.appendChild(clasificacionGroup);
    // Tamaño de Cristales
    var cristalesGroup = createFieldGroup('tamanoCristales', 'Tamaño de Cristales (0-10):', 'number', state.mineral.tamanoCristales.toString(), { min: 0, max: 10 });
    container.appendChild(cristalesGroup);
    // Temperatura
    var tempGroup = createFieldGroup('temperatura', 'Temperatura de Formación (K, -100 a 100):', 'number', state.mineral.temperatura.toString(), { min: -100, max: 100 });
    container.appendChild(tempGroup);
    // Textura
    var texturaGroup = createSelectGroup('textura', 'Textura:', data.texturas, function (value) { return data.texturaLabels[value].es; });
    container.appendChild(texturaGroup);
    // Estructura
    var estructuraGroup = createTextareaGroup('estructura', 'Estructura:', state.mineral.estructura);
    estructuraGroup.classList.add('field-full-width');
    container.appendChild(estructuraGroup);
    // Forma de Granos
    var formaGranosGroup = createTextareaGroup('formaGranos', 'Forma de los Granos:', state.mineral.formaGranos);
    formaGranosGroup.classList.add('field-full-width');
    container.appendChild(formaGranosGroup);
}
function renderReducedForm(container) {
    // ID
    var idInput = createPlaceholderField('id', 'ID (LLDDDDLL)', 'text', state.mineral.id);
    container.appendChild(idInput);
    // Nombre
    var nombreInput = createPlaceholderField('nombre', 'Nombre', 'text', state.mineral.nombre);
    container.appendChild(nombreInput);
    // Grupo
    var grupoSelect = createPlaceholderSelect('grupo', data.grupos, function (value) { return data.grupoLabels[value].es; });
    container.appendChild(grupoSelect);
    // Dureza
    var durezaInput = createPlaceholderField('dureza', 'Dureza (1-10)', 'number', state.mineral.dureza.toString(), { min: 1, max: 10 });
    container.appendChild(durezaInput);
    // Tamaño de Grano
    var tamanoGranoSelect = createPlaceholderSelect('tamanoGrano', data.tamanosGrano, function (value) { return data.tamanoGranoLabels[value].es; });
    container.appendChild(tamanoGranoSelect);
    // Clasificación
    var clasificacionSelect = createPlaceholderSelect('clasificacion', data.clasificaciones, function (value) { return data.clasificacionLabels[value].es; });
    container.appendChild(clasificacionSelect);
    // Tamaño de Cristales
    var cristalesInput = createPlaceholderField('tamanoCristales', 'Tamaño de Cristales (0-10)', 'number', state.mineral.tamanoCristales.toString(), { min: 0, max: 10 });
    container.appendChild(cristalesInput);
    // Temperatura
    var tempInput = createPlaceholderField('temperatura', 'Temperatura K (-100 a 100)', 'number', state.mineral.temperatura.toString(), { min: -100, max: 100 });
    container.appendChild(tempInput);
    // Textura
    var texturaSelect = createPlaceholderSelect('textura', data.texturas, function (value) { return data.texturaLabels[value].es; });
    container.appendChild(texturaSelect);
    // Estructura
    var estructuraTextarea = createPlaceholderTextarea('estructura', 'Estructura', state.mineral.estructura);
    estructuraTextarea.classList.add('field-full-width');
    container.appendChild(estructuraTextarea);
    // Forma de Granos
    var formaGranosTextarea = createPlaceholderTextarea('formaGranos', 'Forma de los Granos', state.mineral.formaGranos);
    formaGranosTextarea.classList.add('field-full-width');
    container.appendChild(formaGranosTextarea);
}
// Funciones auxiliares para crear campos
function createFieldGroup(fieldName, labelText, inputType, value, attrs) {
    if (attrs === void 0) { attrs = {}; }
    var group = document.createElement('div');
    group.className = 'field-group';
    var label = document.createElement('label');
    label.className = 'field-label';
    label.textContent = labelText;
    var input = document.createElement('input');
    input.className = 'field-input';
    input.type = inputType;
    input.value = value;
    Object.keys(attrs).forEach(function (attr) { return input.setAttribute(attr, attrs[attr].toString()); });
    if (fieldName === 'id') {
        input.maxLength = 8;
    }
    input.addEventListener('input', function (e) {
        var target = e.target;
        var val = target.value;
        if (fieldName === 'id') {
            val = val.toUpperCase();
            target.value = val;
        }
        state.mineral[fieldName] = inputType === 'number' ? parseFloat(val) || 0 : val;
    });
    group.appendChild(label);
    group.appendChild(input);
    return group;
}
function createSelectGroup(fieldName, labelText, options, getLabelFunc) {
    var group = document.createElement('div');
    group.className = 'field-group';
    var label = document.createElement('label');
    label.className = 'field-label';
    label.textContent = labelText;
    var select = document.createElement('select');
    select.className = 'field-select';
    options.forEach(function (opt) {
        var option = document.createElement('option');
        option.value = opt;
        option.textContent = getLabelFunc(opt);
        if (state.mineral[fieldName] === opt) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    select.addEventListener('change', function (e) {
        var target = e.target;
        state.mineral[fieldName] = target.value;
    });
    group.appendChild(label);
    group.appendChild(select);
    return group;
}
function createTextareaGroup(fieldName, labelText, value) {
    var group = document.createElement('div');
    group.className = 'field-group';
    var label = document.createElement('label');
    label.className = 'field-label';
    label.textContent = labelText;
    var textarea = document.createElement('textarea');
    textarea.className = 'field-textarea';
    textarea.value = value;
    textarea.rows = 2;
    textarea.addEventListener('input', function (e) {
        var target = e.target;
        state.mineral[fieldName] = target.value;
    });
    group.appendChild(label);
    group.appendChild(textarea);
    return group;
}
function createPlaceholderField(fieldName, placeholder, inputType, value, attrs) {
    if (attrs === void 0) { attrs = {}; }
    var group = document.createElement('div');
    group.className = 'field-group';
    var input = document.createElement('input');
    input.className = 'field-input';
    input.type = inputType;
    input.placeholder = placeholder;
    input.value = value;
    Object.keys(attrs).forEach(function (attr) { return input.setAttribute(attr, attrs[attr].toString()); });
    if (fieldName === 'id') {
        input.maxLength = 8;
    }
    input.addEventListener('input', function (e) {
        var target = e.target;
        var val = target.value;
        if (fieldName === 'id') {
            val = val.toUpperCase();
            target.value = val;
        }
        state.mineral[fieldName] = inputType === 'number' ? parseFloat(val) || 0 : val;
    });
    group.appendChild(input);
    return group;
}
function createPlaceholderSelect(fieldName, options, getLabelFunc) {
    var group = document.createElement('div');
    group.className = 'field-group';
    var select = document.createElement('select');
    select.className = 'field-select';
    options.forEach(function (opt) {
        var option = document.createElement('option');
        option.value = opt;
        option.textContent = getLabelFunc(opt);
        if (state.mineral[fieldName] === opt) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    select.addEventListener('change', function (e) {
        var target = e.target;
        state.mineral[fieldName] = target.value;
    });
    group.appendChild(select);
    return group;
}
function createPlaceholderTextarea(fieldName, placeholder, value) {
    var group = document.createElement('div');
    group.className = 'field-group';
    var textarea = document.createElement('textarea');
    textarea.className = 'field-textarea';
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.rows = 2;
    textarea.addEventListener('input', function (e) {
        var target = e.target;
        state.mineral[fieldName] = target.value;
    });
    group.appendChild(textarea);
    return group;
}
// Mostrar resultados
function showResults() {
    var resultContainer = document.getElementById('resultContainer');
    var validationResult = document.getElementById('validationResult');
    var mineralInfo = document.getElementById('mineralInfo');
    if (!resultContainer || !validationResult || !mineralInfo)
        return;
    resultContainer.classList.remove('hidden');
    var isValid = validateMineral();
    var lang = state.outputFormat === 'americano' ? 'en' : 'es';
    if (isValid) {
        validationResult.innerHTML = "\n            <div class=\"face-icon face-happy\">\uD83D\uDE0A</div>\n            <h3 class=\"result-title valid\">".concat(lang === 'es' ? '¡Mineral Válido!' : 'Valid Mineral!', "</h3>\n        ");
        mineralInfo.classList.remove('hidden');
        mineralInfo.innerHTML = "\n            <h3 class=\"info-title\">".concat(lang === 'es' ? 'Información del Mineral' : 'Mineral Information', "</h3>\n            <div class=\"info-grid\">\n                <div class=\"info-item\"><strong>").concat(data.translations.id[lang], ":</strong> ").concat(state.mineral.id, "</div>\n                <div class=\"info-item\"><strong>").concat(data.translations.nombre[lang], ":</strong> ").concat(state.mineral.nombre, "</div>\n                <div class=\"info-item\"><strong>").concat(data.translations.grupo[lang], ":</strong> ").concat(data.grupoLabels[state.mineral.grupo][lang], "</div>\n                <div class=\"info-item\"><strong>").concat(data.translations.dureza[lang], ":</strong> ").concat(state.mineral.dureza, "</div>\n                <div class=\"info-item\"><strong>").concat(data.translations.tamanoGrano[lang], ":</strong> ").concat(data.tamanoGranoLabels[state.mineral.tamanoGrano][lang], "</div>\n                <div class=\"info-item\"><strong>").concat(data.translations.clasificacion[lang], ":</strong> ").concat(data.clasificacionLabels[state.mineral.clasificacion][lang], "</div>\n                <div class=\"info-item\"><strong>").concat(data.translations.tamanoCristales[lang], ":</strong> ").concat(state.mineral.tamanoCristales, "</div>\n                <div class=\"info-item\">\n                    <strong>").concat(data.translations.temperatura[lang], ":</strong> \n                    ").concat(state.outputFormat === 'americano'
            ? kelvinToFahrenheit(state.mineral.temperatura) + '°F'
            : kelvinToCelsius(state.mineral.temperatura) + '°C', "\n                </div>\n                <div class=\"info-item\"><strong>").concat(data.translations.textura[lang], ":</strong> ").concat(data.texturaLabels[state.mineral.textura][lang], "</div>\n                <div class=\"info-item info-full-width\"><strong>").concat(data.translations.estructura[lang], ":</strong> ").concat(state.mineral.estructura, "</div>\n                <div class=\"info-item info-full-width\"><strong>").concat(data.translations.formaGranos[lang], ":</strong> ").concat(state.mineral.formaGranos, "</div>\n            </div>\n        ");
    }
    else {
        validationResult.innerHTML = "\n            <div class=\"face-icon face-sad\">\uD83D\uDE1E</div>\n            <h3 class=\"result-title invalid\">".concat(lang === 'es' ? 'Mineral No Válido' : 'Invalid Mineral', "</h3>\n        ");
        mineralInfo.classList.add('hidden');
    }
}
// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Modo de vista
    var viewModeSelect = document.getElementById('viewMode');
    if (viewModeSelect) {
        viewModeSelect.addEventListener('change', function (e) {
            var target = e.target;
            state.viewMode = target.value;
            renderForm();
        });
    }
    // Criterio
    var criterioSelect = document.getElementById('criterio');
    if (criterioSelect) {
        criterioSelect.addEventListener('change', function (e) {
            var target = e.target;
            state.criterio = target.value;
        });
    }
    // Formato de salida
    var outputFormatSelect = document.getElementById('outputFormat');
    if (outputFormatSelect) {
        outputFormatSelect.addEventListener('change', function (e) {
            var target = e.target;
            state.outputFormat = target.value;
        });
    }
    // Botón validar
    var validateBtn = document.getElementById('validateBtn');
    if (validateBtn) {
        validateBtn.addEventListener('click', showResults);
    }
    // Render inicial
    renderForm();
});
let db;
const openOrCreateDB = window.indexedDB.open('todo_db', 1);

openOrCreateDB.addEventListener('error', () => console.error('Error opening DB'));

openOrCreateDB.addEventListener('success', () => {
    console.log('Successfully opened DB');
    db = openOrCreateDB.result;
});

openOrCreateDB.addEventListener('upgradeneeded', init => {
    db = init.target.result;

    db.onerror = () => {
        console.error('Error loading database.');
    };

    const table = db.createObjectStore('todo_tb', { keyPath: 'id', autoIncrement: true });

    table.createIndex('title', 'title', { unique: false });
    table.createIndex('desc', 'desc', { unique: false });
});

const todos = document.querySelector('ol');
const form = document.querySelector('form');
const todoTitle = document.querySelector('#title');
const todoDesc = document.querySelector('#desc');
const submit = document.querySelector('button');

form.addEventListener('submit', addTodo);

function addTodo(e) {
    e.preventDefault();
    const newTodo = { title: todoTitle.value, body: todoDesc.value };
    const transaction = db.transaction(['todo_tb'], 'readwrite');
    const objectStore = transaction.objectStore('todo_tb');
    const query = objectStore.add(newTodo);
    query.addEventListener('success', () => {
        todoTitle.value = '';
        todoDesc.value = '';
    });
    transaction.addEventListener('complete', () => {
        showTodos();
    });
    transaction.addEventListener('error', () => console.log('Transaction error'));
}
function showTodos() {
    while (todos.firstChild) {
        todos.removeChild(todos.firstChild);
    }
    const objectStore = db.transaction('todo_tb').objectStore('todo_tb');
    objectStore.openCursor().addEventListener('success', e => {

        const pointer = e.target.result;
        if (pointer) {
            const listItem = document.createElement('li');
            const h3 = document.createElement('h3');
            const pg = document.createElement('p');
            listItem.appendChild(h3);
            listItem.appendChild(pg);
            todos.appendChild(listItem);
            h3.textContent = pointer.value.title;
            pg.textContent = pointer.value.body;
            listItem.setAttribute('data-id', pointer.value.id);
            const deleteBtn = document.createElement('button');
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = 'Remove';
            deleteBtn.addEventListener('click', deleteItem);
            pointer.continue();
        } else {
            if (!todos.firstChild) {
                const listItem = document.createElement('li');
                listItem.textContent = 'No Todo.'
                todos.appendChild(listItem);
            }

            console.log('Todos all shown');
        }
    });
}
openOrCreateDB.addEventListener('success', () => {
    console.log('Successfully opened DB');
    db = openOrCreateDB.result;
    showTodos();
});
function deleteItem(e) {
    const todoId = Number(e.target.parentNode.getAttribute('data-id'));
    const transaction = db.transaction(['todo_tb'], 'readwrite');
    const objectStore = transaction.objectStore('todo_tb');
    objectStore.delete(todoId);
    transaction.addEventListener('complete', () => {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        alert(`Todo with id of ${todoId} deleted`)
        console.log(`Todo:${todoId} deleted.`);
        if (!todos.firstChild) {
            const listItem = document.createElement('li');
            listItem.textContent = 'No Todo.';
            todos.appendChild(listItem);
        }
    });
    transaction.addEventListener('error', () => console.log('Transaction error'));
}