export class Static {

  constructor(literal) {
    return {
      'HOMEPAGE::FEATURED': this.__featured(),
      'HOMEPAGE::STYLES': this.__styles(),
      'QUOTATION::BODYPARTS': this.__bodyParts()
    }[literal]
  }

  __featured() {
    return [
      {
        rating: 5,
        name: 'Estudio 184',
        location: 'Ciudad de México',
        titleImgUrl: 'src/assets/images/backgrounds/featured-1.png',
      },
      {
        rating: 5,
        name: 'Icarus',
        location: 'Ciudad de México',
        titleImgUrl: 'src/assets/images/backgrounds/featured-2.png',
      },
      {
        rating: 5,
        name: 'Jolly Rogers',
        location: 'Ciudad de México',
        titleImgUrl: 'src/assets/images/backgrounds/featured-3.jpg',
      },
      {
        rating: 5,
        name: 'Mekandaxu',
        location: 'Ciudad de México',
        titleImgUrl: 'src/assets/images/backgrounds/featured-4.png',
      },

      {
        rating: 5,
        name: 'Mendoza',
        location: 'Ciudad de México',
        titleImgUrl: 'src/assets/images/backgrounds/featured-5.png',
      },
      {
        rating: 5,
        name: 'Silver nedles',
        location: 'Ciudad de México',
        titleImgUrl: 'src/assets/images/backgrounds/featured-6.png',
      },
      {
        rating: 5,
        name: 'Tatudemia Custom',
        location: 'Ciudad de México',
        titleImgUrl: 'src/assets/images/backgrounds/featured-7.png',
      },
      {
        rating: 5,
        name: 'Tatuluis',
        location: 'Ciudad de México',
        titleImgUrl: 'src/assets/images/backgrounds/featured-8.png',
      }
    ]
  }

  __bodyParts() {
    const parts = [
      { id: 1, name:'Espalda', image:'/src/assets/images/mock/bodypart1.png' },
      { id: 2, name:'Hombros', image:'/src/assets/images/mock/bodypart2.png' },
      { id: 3, name:'Oreja', image:'/src/assets/images/mock/bodypart3.png' },
      { id: 4, name:'Manos', image:'/src/assets/images/mock/bodypart4.png' },
      { id: 5, name:'Pies', image:'/src/assets/images/mock/bodypart5.png' },
      { id: 6, name:'Muñeca', image:'/src/assets/images/mock/bodypart6.png' },
      { id: 7, name:'Pantorrilla', image:'/src/assets/images/mock/bodypart7.png' },
      { id: 8, name:'Rodilla', image:'/src/assets/images/mock/bodypart8.png' },
      { id: 9, name:'Brazos', image:'/src/assets/images/mock/bodypart9.png' },
      { id: 10, name:'Pierna', image:'/src/assets/images/mock/bodypart10.png' },
      { id: 11, name:'Cuello', image:'/src/assets/images/mock/bodypart11.png' },
      { id: 12, name:'Dedos', image:'/src/assets/images/mock/bodypart12.png' },
      { id: 13, name:'Abdomen', image:'/src/assets/images/mock/bodypart13.png' },
      { id: 14, name:'Cachete izquierdo', image:'/src/assets/images/mock/bodypart14.png' },
      { id: 15, name:'Cachete derecho', image:'/src/assets/images/mock/bodypart15.png' },
      { id: 16, name:'Frente', image:'/src/assets/images/mock/bodypart16.png' },
      { id: 17, name:'Espinilla', image:'/src/assets/images/mock/bodypart17.png' },
      { id: 18, name:'Pecho', image:'/src/assets/images/mock/bodypart18.png' },
      { id: 19, name:'Espalda baja', image:'/src/assets/images/mock/bodypart19.png' },
      { id: 20, name:'Espalda superior', image:'/src/assets/images/mock/bodypart20.png' },
      { id: 21, name:'Nuca', image:'/src/assets/images/mock/bodypart21.png' }
    ]

    return {
      front: [
        parts[2],
        parts[3],
        parts[4],
        parts[5],
        parts[7],
        parts[9],
        parts[10],
        parts[11],
        parts[12],
        parts[13],
        parts[14],
        parts[15],
        parts[16],
        parts[17]
      ],
      back: [
        parts[0],
        parts[1],
        parts[6],
        parts[8],
        parts[18],
        parts[19],
        parts[20]
      ]
    }
  }

  __styles() {
    return [
      { description: 'flor', image: 'src/assets/images/backgrounds/trending-1.png' },
      { description: 'Acuarela', image: 'src/assets/images/backgrounds/trending-2.png' },
      { description: 'mandala', image: 'src/assets/images/backgrounds/trending-3.png' },
      { description: 'planta', image: 'src/assets/images/backgrounds/trending-4.png' },
      { description: 'animal', image: 'src/assets/images/backgrounds/trending-5.png' },
      { description: 'calavera', image: 'src/assets/images/backgrounds/trending-6.png' },
      { description: 'cruz', image: 'src/assets/images/backgrounds/trending-7.png' },
      { description: 'flecha', image: 'src/assets/images/backgrounds/trending-8.png' }
    ]
  }

  __preStyles() {
    return [
      {name:'Old School', imgUrl:'/src/assets/images/mock/style14.jpg' },
      {name:'New School', imgUrl:'/src/assets/images/mock/style15.jpg' },
      {name:'Puntillismo', imgUrl:'/src/assets/images/mock/style10.png' },
      {name:'Geometrico', imgUrl:'/src/assets/images/mock/style9.png' },
      {name:'Trash Polka', imgUrl:'/src/assets/images/mock/style7.png' },
      {name:'Black work', imgUrl:'/src/assets/images/mock/style1.png' },
      {name:'Acuarela', imgUrl:'/src/assets/images/mock/style13.png' },
      {name:'Japones', imgUrl:'/src/assets/images/mock/style13.png' },
      {name:'Tribal', imgUrl:'/src/assets/images/mock/style16.jpg' },
      {name:'Caligrafia', imgUrl:'/src/assets/images/mock/style11.png' },
      {name:'Ilustracion', imgUrl:'/src/assets/images/mock/style12.png' },
      {name:'Surreal', imgUrl:'/src/assets/images/mock/style6.png' },
      {name:'Biomecanico', imgUrl:'/src/assets/images/mock/style8.png' }
    ]
  }


}
