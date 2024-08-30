import { Prisma, PrismaClient } from '@prisma/client';

export async function seedItem(prisma: PrismaClient) {
  await prisma.item.createMany({
    data: [
      { description: 'Pen drive', price: new Prisma.Decimal(29.75) },
      { description: 'Prato', price: new Prisma.Decimal(9.5) },
      { description: 'Garfo', price: new Prisma.Decimal(1.65) },
      { description: 'IPhone 15', price: new Prisma.Decimal(5000.99) },
      { description: 'Mouse', price: new Prisma.Decimal(79.99) },
      { description: 'Teclado Mecanico', price: new Prisma.Decimal(299.99) },
      {
        description: 'Monitor 24 polegadas',
        price: new Prisma.Decimal(899.99),
      },
      { description: 'Cadeira Gamer', price: new Prisma.Decimal(1249.9) },
      { description: 'Notebook', price: new Prisma.Decimal(3499.99) },
      { description: 'Smartwatch', price: new Prisma.Decimal(899.9) },
      {
        description: 'Fone de Ouvido Bluetooth',
        price: new Prisma.Decimal(199.9),
      },
      { description: 'Cafeteira Eletrica', price: new Prisma.Decimal(159.9) },
      { description: 'Liquidificador', price: new Prisma.Decimal(149.9) },
      { description: 'Micro-ondas', price: new Prisma.Decimal(599.99) },
      { description: 'Geladeira', price: new Prisma.Decimal(2899.99) },
      { description: 'Maquina de Lavar', price: new Prisma.Decimal(2199.9) },
      { description: 'Ar condicionado', price: new Prisma.Decimal(1599.99) },
      { description: 'Ventilador', price: new Prisma.Decimal(89.99) },
      {
        description: 'Televisao 55 polegadas',
        price: new Prisma.Decimal(3499.99),
      },
      { description: 'Aparelho de Som', price: new Prisma.Decimal(499.99) },
      { description: 'Torradeira', price: new Prisma.Decimal(69.9) },
      { description: 'Sanduicheira', price: new Prisma.Decimal(59.9) },
      { description: 'Panela de Pressao', price: new Prisma.Decimal(109.9) },
      { description: 'Jogo de Facas', price: new Prisma.Decimal(89.99) },
      { description: 'Conjunto de Copos', price: new Prisma.Decimal(39.9) },
      { description: 'Conjunto de Panelas', price: new Prisma.Decimal(299.99) },
      { description: 'Camera Fotografica', price: new Prisma.Decimal(2499.9) },
      { description: 'Tablet', price: new Prisma.Decimal(1299.99) },
      { description: 'Carregador Portatil', price: new Prisma.Decimal(89.9) },
      {
        description: 'Smart TV 65 polegadas',
        price: new Prisma.Decimal(5999.99),
      },
      { description: 'Home Theater', price: new Prisma.Decimal(1199.99) },
      { description: 'Jogo de Talheres', price: new Prisma.Decimal(79.99) },
      { description: 'Espremedor de Frutas', price: new Prisma.Decimal(59.99) },
      { description: 'Forno Eletrico', price: new Prisma.Decimal(399.9) },
      { description: 'Aspirador de Po', price: new Prisma.Decimal(299.9) },
      { description: 'Maquina de Cafe', price: new Prisma.Decimal(499.99) },
      { description: 'Relogio de Parede', price: new Prisma.Decimal(59.9) },
      { description: 'Abajur', price: new Prisma.Decimal(129.9) },
      { description: 'Impressora', price: new Prisma.Decimal(599.99) },
      { description: 'Scanner', price: new Prisma.Decimal(499.99) },
      { description: 'Roteador Wi-Fi', price: new Prisma.Decimal(199.9) },
      { description: 'HD Externo', price: new Prisma.Decimal(349.99) },
      { description: 'SSD 1TB', price: new Prisma.Decimal(699.99) },
      { description: 'Camera de Seguranca', price: new Prisma.Decimal(399.99) },
      { description: 'Drone', price: new Prisma.Decimal(1499.99) },
    ],
  });
}