export type Player = {
  name: string
  gender?: string
  km: number
  moroso: boolean
}

export const WALKERS: Player[] = [
  {
    name: 'Ángela González',
    km: 50.71,
    moroso: false,
  },
  {
    name: 'Oneida Aguirre',
    km: 43.03,
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
    km: 45.43,
    moroso: true,
  },
  {
    name: 'Juana Rivero',
    km: 75.15,
    moroso: true,
  },
  {
    name: 'Jose "Nacho" Pérez',
    km: 13.54,
    moroso: true,
  },
  {
    name: 'Carlos González',
    km: 25.3,
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
    km: 66.44,
    gender: 'F',
    moroso: true,
  },
  {
    name: 'Gerardo Pérez',
    km: 37.4,
    gender: 'M',
    moroso: false,
  },
]
