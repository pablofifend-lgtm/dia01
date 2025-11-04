// Función genérica para incluir fragmentos HTML (cabecera, pie, etc.)
async function includeHTML(id, file) {
    const el = document.getElementById(id);
    if (!el) return;

    try {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Error al cargar ${file}`);
        const html = await res.text();

        // Insertar el contenido
        el.innerHTML = html;

        // Crear contenedor temporal para extraer <link>, <style> y <script>
        const temp = document.createElement("div");
        temp.innerHTML = html;

        // --- 📘 Cargar archivos CSS externos ---
        temp.querySelectorAll("link[rel='stylesheet']").forEach(link => {
            const href = link.getAttribute("href");
            if (href && !document.querySelector(`link[href='${href}']`)) {
                const newLink = document.createElement("link");
                newLink.rel = "stylesheet";
                newLink.href = href;
                document.head.appendChild(newLink);
            }
        });

        // --- 🎨 Inyectar estilos internos ---
        temp.querySelectorAll("style").forEach(style => {
            const newStyle = document.createElement("style");
            newStyle.innerHTML = style.innerHTML;
            document.head.appendChild(newStyle);
        });

        // --- ⚙️ Ejecutar scripts embebidos (si hay alguno) ---
        temp.querySelectorAll("script").forEach(script => {
            const newScript = document.createElement("script");
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.body.appendChild(newScript);
        });

        // --- 🍔 Si se cargó la cabecera, activar menú hamburguesa ---
        if (id === "cabecera") initMenu();

    } catch (err) {
        console.error(`❌ No se pudo cargar ${file}:`, err);
        el.innerHTML = `<p style="color:red;">Error al cargar ${file}</p>`;
    }
}

// Activar menú hamburguesa (llamado después de insertar cabecera)
function initMenu() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
            toggle.classList.toggle("open");
        });
    }
}

// Cargar automáticamente cabecera y pie en todas las páginas
document.addEventListener("DOMContentLoaded", async () => {
    await includeHTML("cabecera", "cabecera.html");
    await includeHTML("pie", "pie.html");
});
