import data from '../data/jornadas.json';
import type { ImageMetadata } from 'astro';

export type Estado = 'abierta' | 'ultimos' | 'cerrada';
export interface Jornada {
  id: string;
  linea: 'animalista' | 'ambiental' | 'social';
  titulo: string;
  lugar: string;
  distrito: string;
  fecha: string;
  encuentro: string;
  horario: string;
  estado: Estado;
  descripcion: string;
  inscripcion: string;
  foto: string;
  ejemplo?: boolean;
}

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });
export const foto = (name: string) => fotos[`../assets/fotos/${name}.jpg`]?.default;

export const estadoTexto: Record<Estado | 'paso', string> = {
  abierta: 'Abierta',
  ultimos: 'Últimos cupos',
  cerrada: 'Cerrada',
  paso: 'Ya pasó',
};

const dias = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SET', 'OCT', 'NOV', 'DIC'];
const diasLargos = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const mesesLargos = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];

const parse = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12));
};
export const fechaCorta = (iso: string) => {
  const f = parse(iso);
  return `${dias[f.getUTCDay()]} ${f.getUTCDate()} ${meses[f.getUTCMonth()]}`;
};
export const fechaLarga = (iso: string) => {
  const f = parse(iso);
  return `${diasLargos[f.getUTCDay()]} ${f.getUTCDate()} de ${mesesLargos[f.getUTCMonth()]}`;
};

// Hoy en Lima (UTC−5) en formato AAAA-MM-DD, para filtrar al construir el sitio.
export const hoyLima = () => new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 10);

export const todas = (data.jornadas as Jornada[]).slice().sort((a, b) => a.fecha.localeCompare(b.fecha));
export const proximas = () => todas.filter((j) => j.fecha >= hoyLima());
export const hayEjemplos = todas.some((j) => j.ejemplo);
