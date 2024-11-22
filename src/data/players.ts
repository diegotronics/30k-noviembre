export type Player = {
  name: string
  gender?: string
  km: number
  moroso: boolean
}

export const WALKERS: Player[] = [
  {
    name: 'Ángela González',
    km: 37.84,
    moroso: false,
  },
  {
    name: 'Oneida Aguirre',
    km: 36.96,
    moroso: false,
  },
  {
    name: 'Adrián González',
    km: 19.68,
    moroso: true,
  },
  {
    name: 'Doris González',
    km: 44.74,
    moroso: false,
  },
  {
    name: 'Gladys "Mary" González',
    km: 30.21,
    moroso: false,
  },
  {
    name: 'Juana Rivero',
    km: 55.06,
    moroso: false,
  },
  {
    name: 'Jose "Nacho" Pérez',
    km: 6.64,
    moroso: true,
  },
  {
    name: 'Carlos González',
    km: 18.4,
    moroso: true,
  },
  {
    name: 'Ricardo Pérez',
    km: 9.2,
    moroso: true,
  },
  {
    name: 'Bianca Pérez',
    km: 9.2,
    moroso: true,
  },
  {
    name: 'Brauly',
    km: 9.2,
    moroso: true,
  },
]

export const RUNNERS: Player[] = [
  {
    name: 'Génesis León',
    km: 56.44,
    gender: 'F',
    moroso: true,
  },
  {
    name: 'Gerardo Pérez',
    km: 27.4,
    gender: 'M',
    moroso: false,
  },
]
