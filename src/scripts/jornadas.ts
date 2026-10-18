// El sitio es estático: si no se reconstruye a diario, las jornadas ya pasadas siguen en el HTML.
// Este script las oculta en el navegador según la fecha de Lima y muestra el estado vacío si no queda ninguna.
const hoy = new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 10);

document.querySelectorAll<HTMLElement>('[data-jornadas]').forEach((lista) => {
  const items = Array.from(lista.querySelectorAll<HTMLElement>('[data-fecha]'));
  let visibles = 0;
  items.forEach((el) => {
    const pasada = (el.dataset.fecha ?? '') < hoy;
    const contenedor = el.closest<HTMLElement>('[data-jornada-item]') ?? el;
    contenedor.hidden = pasada;
    if (!pasada) visibles++;
  });
  const vacio = lista.parentElement?.querySelector<HTMLElement>('[data-jornadas-vacio]');
  if (vacio) vacio.hidden = visibles > 0;
});
