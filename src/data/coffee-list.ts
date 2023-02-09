export interface Coffee {
  id: number
  imageName: string
  name: string
  tags: string[]
  description: string
  price: number
}

export const CoffeeList: Coffee[] = [
  {
    id: 1,
    imageName: 'expresso-tradicional.svg',
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    imageName: 'expresso-americano.svg',
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    imageName: 'expresso-cremoso.svg',
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    imageName: 'expresso-gelado.svg',
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    imageName: 'cafe-com-leite.svg',
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    imageName: 'latte.svg',
    name: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    imageName: 'capuccino.svg',
    name: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    imageName: 'macchiato.svg',
    name: 'Macchiato',
    tags: ['Tradicional', 'Gelado'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    imageName: 'mocaccino.svg',
    name: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    imageName: 'chocolate-quente.svg',
    name: 'Chocolate quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    imageName: 'cubano.svg',
    name: 'Cubano',
    tags: ['Especial', 'Acoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    imageName: 'havaiano.svg',
    name: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    imageName: 'arabe.svg',
    name: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    imageName: 'irlandes.svg',
    name: 'irlandês',
    tags: ['Especial'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
