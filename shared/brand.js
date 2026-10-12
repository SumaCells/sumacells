/* ============================================================
   SumaCells · configuración de marca de la suite
   ------------------------------------------------------------
   ÚNICA fuente del nombre. Para renombrar toda la suite,
   cambia `brand` aquí. Cada app tiene un nombre CORTO (`name`);
   el nombre completo de cara al usuario es "SumaCells <name>"
   (p. ej. "SumaCells Home"), y la cabecera lo pinta como
   "SumaCells · Home" con el sufijo en dorado.
   Las rutas son RELATIVAS (sin "/" inicial) para que funcionen
   tanto en local como en producción (https://sumacells.com/).
   ============================================================ */
window.SUMACELLS = {
  brand: "SumaCells",
  apps: [
    { id: "casa",         name: "Home",     href: "casa/",         tagline: "¿A qué casa puedes aspirar?" },
    { id: "nomina",       name: "Payroll",  href: "nomina/",       tagline: "Tu nómina e IRPF, mes a mes" },
    { id: "ahorro",       name: "Savings",  href: "ahorro/",       tagline: "Haz que tu dinero trabaje por ti" },
    { id: "rentabilidad", name: "Return",   href: "rentabilidad/", tagline: "Calcula rentabilidades" },
    { id: "forecast",     name: "Forecast", href: "forecast/",     tagline: "Planifica tu futuro financiero" }
  ]
};
