const products = [
    {      
      "id": 1,
      "precio": 5833,
      "saldo": 4,
      "title": "Morandé Gewürztraminer 2021",
      "color": "blanco",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/estatereserve-gw_254x300@2x.png?v=1677675462",
      "descripcion":"Amarillo dorado con ribetes verdosos, brillante. Aromas frutales, chirimoya, durazno plátano. En boca es de acidez media, fresco."
    },
    {      
      "id": 2,
      "precio": 12063,
      "saldo": 8,
      "color": "tinto",
      "title": "Morandé Adventure Tirazis 2020",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/Adventure-Tirazis-medalla-2022_254x300@2x.jpg?v=1668044439",
      "descripcion": "Rojo violeta, ribetes morados, brillante. Aroma frutal y especiado, cerezas, ciruelas, tocino, cecinas ahumadas, cuero. En boca es de acidez media-alta, algo salino, potente, tanino jugoso, fresco."
    },
    {      
      "id": 3,
      "precio": 9933,
      "saldo": 5,
      "color": "blanco",
      "title": "Morandé Adventure Bestiario",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/bestiario-medalla_254x300@2x.jpg?v=1668042276",
      "descripcion":"Amarillo verdoso con toques dorados. Aromas de fruta blanca muy madura, algo de caramelo, de flores secas. Boca salina, compacta, jugosa, de media profundidad."
    },
    {      
      "id": 4,
      "precio": 9653,
      "saldo": 2,
      "color": "tinto",
      "title": "Selección Enológica Carmenere 2020",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/seleccion-enologica-carmenere2022_254x300@2x.png?v=1661950210",
      "descripcion":"Rojo cereza oscuro opaco. Aromas de fruta roja madura y especiada, macerada, algo terrosa. Boca fresca, tersa, con tensión, tanino y acidez."
    },
    {      
      "id": 5,
      "precio": 8963,
      "saldo": 6,
      "color": "tinto",
      "title": "Vistamar Gran Reserva Cabernet/Syrah 2022",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/VistamarGranReservaCSyrah.png?v=1661988866",
      "descripcion":"Rojo violeta profundo. Nariz perfumada, ciruelas, guindas licorosas, tabaco, chocolate amargo. Laurel. En la boca tiene un tanino algo rugoso, maduro, de cuerpo medio."
    },
    {      
      "id": 6,
      "precio": 7458,
      "saldo": 14,
      "color": "tinto",
      "title": "HAX Cabernet Sauvignon",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/hax-medalla.png?v=1665591014",
      "descripcion":"De color violeta intenso y profundo, este vino joven y fresco, con cuerpo y bien estructurado, ya muestra la concentración en la copa. Muy limpio y con intensos aromas a frutas rojas y negras como fresas, ciruelas y moras, notas de cedro entrelazadas. En el paladar puede sentir una gran estructura, una sensación suave y aterciopelada debido a la combinación de años y la selección correcta de fruta con alto contenido de polifenoles de las mejores partes de Chile, además de un acabado fresco y jugoso proveniente de las cosechas más nuevas."
    },
    {      
      "id": 7,
      "precio": 5394,
      "saldo": 12,
      "color": "blanco",
      "title": "Vistamar Chardonnay 2019",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/vistamar-coste-campo-medalla.jpg?v=1616814043",
      "descripcion":"Amarillo verdoso. Aromas frescos de manzana roja, plátano, pomelo rosado y piña. Boca agradable, fresca, con notas a almendras y levadura."
    },
    {      
      "id": 8,
      "saldo": 17,
      "precio": 7458,
      "color": "blanco",
      "title": "7 Colores Late Harvest 2022",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/7colores-late-harvest_254x300@2x.jpg?v=1641843746",
      "descripcion":"Amarillo oro, brillante. Aroma: miel, pasas, membrillo, melón, jazmín y azahares. Equilibrio entre dulzor y acidez, denso persistente, con aromas a confituras de frutas."
    },
    {      
      "id": 9,
      "saldo": 9,
      "precio": 7458,
      "color": "blanco",
      "title": "7Colores Reserva Sauvignon Blanc 2022",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/7C-RES-SB_254x300@2x.png?v=1668022353",
      "descripcion":"Amarillo pálido verdoso. Aromas de espino, fruta de la pasión, cáscara de cítrico. Boca fresca, vegetal, compacta, de media profundidad."
    },
    {      
      "id": 10,
      "saldo": 22,
      "precio": 7458,
      "color": "blanco",
      "title": "Morandé Late Harvest Sauvignon Blanc 2020",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/Morande-late-harvest_254x300@2x.jpg?v=1562862024",
      "descripcion":"Dorado pajizo. Nariz intensamente a miel, caramelo, papayas en su jugo, chocolate blanco, un tono floral muy delicado. En la boca es dulce, de tanino medio, agradable acidez."
    },
    {      
      "id": 11,
      "saldo": 13,
      "precio": 69990,
      "color": "tinto",
      "title": "House of Morandé Mezclas Tintas 2020",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/hax-medalla.png?v=1665591014",
      "descripcion":"Rojo cereza oscuro de media profundidad. Aromas de fruta madura con un fondo de suave tostado, berries maduros, frambuesa, pimienta fresca, hojas de tabaco. Boca frutal y jugosa, de media profundidad, fresco, de tanino pulido. Elegante y complejo."
    },
    {      
      "id": 12,
      "saldo": 15,
      "precio": 27060,
      "color": "tinto",
      "title": "Pack Regalo 7Colores Icono + Estuche negro",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/7colores-icon-cajanegra_254x300@2x.jpg?v=1638458514",
      "descripcion":"Color: Intenso y rojo muy intenso con tonalidades violeta y rojo cereza. Aroma de frutas rojas como la ciruela y la cereza, con notas de cassis, pimienta blanca, suelo húmedo y algo de fruta negra. Tiene una complejidad aromática muy interesante. En boca es un vino elegante, con una excelente estructura de taninos, firme y sedoso. Elegante y bien equilibrado, nuestro vino de Cabernet sauvignon Icon muestra sabores de fresa, licor y cassis con una perfecta integración con especias, humo, cedro y trufa. El vino presenta una estructura sólida con taninos redondos y firmes y un buen equilibrio de acidez que nos da un final largo, aterciopelado y persistente."
    },
    {      
      "id": 13,
      "saldo": 17,
      "precio": 4963,
      "color": "espumante",
      "title": "Morandé Espumante Extra Brut Charmat",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/Morande-Charmat_254x300@2x.jpg?v=1591057798",
      "descripcion":"Morandé se viste de fiesta con finas burbujas y con orgullo brinda sus vinos de alegría, gala y magnifica elegancia. Elaborados bajo la mano experta de Pablo Morandé. Burbujas para todo tipo de ocasiones, pero siempre con una misma premisa: disfrutar al máximo."
    },
    {      
      "id": 14,
      "saldo": 11,
      "precio": 13993,
      "color": "espumante",
      "title": "Espumoso Brut Nature Chardonnay/Pinot",
      "imagen": "https://www.cavamorande.cl/cdn/shop/files/Brut-Nature-medalla_254x300@2x.jpg?v=1685107655",
      "descripcion":"amarillo y leves tonos de nácar, con finas y pequeñas burbujas que se liberan formando collares de perlas danzantes e infinitas. Aroma a flores y frutas frescas, cuya intensidad se devela fácilmente con el correr de las burbujas, luego se sienten aromas especiados de frutas tostadas, pan de miel, vainilla y horchata. En boca se abre con la fuerza de su estructura, manifiesta su cuerpo grande, levemente graso y con una coraza de fresca acidez, que sumada a las punzantes burbujas, le confiere un elegante equilibrio de sabores. Es fino, destacado, persistente y de prolongado recuerdo."
    },
    {      
      "id": 15,
      "saldo": 15,
      "precio": 9093,
      "color": "tinto",
      "title": "Morandé Vitis Unica Mouvedre",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/vitisunica-mv_254x300@2x.png?v=1677674789",
      "descripcion":"Nuestro viñedo La Constancia, que da origen a este delicioso vino, se ubica en el valle del Maule cerca de la localidad de Botalcura, área de Pencahue. El viñedo fue plantado en 2012 sobre una ladera granítica con piedras de cantos angulados de gran tamaño. Está conducido en espaldera vertical, y la densidad de plantación es de 4.000 plantas por hectárea."
    },
    {      
      "id": 16,
      "saldo": 15,
      "precio": 27060,
      "color": "espumante",
      "title": "Pack Morandé Brut Nature + estuche",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/pack-brutnature-caja_254x300@2x.jpg?v=1638459621",
      "descripcion":"amarillo y leves tonos de nácar, con finas y pequeñas burbujas que se liberan formando collares de perlas danzantes e infinitas. Aroma a flores y frutas frescas, cuya intensidad se devela fácilmente con el correr de las burbujas, luego se sienten aromas especiados de frutas tostadas, pan de miel, vainilla y horchata. En boca se abre con la fuerza de su estructura, manifiesta su cuerpo grande, levemente graso y con una coraza de fresca acidez, que sumada a las punzantes burbujas, le confiere un elegante equilibrio de sabores. Es fino, destacado, persistente y de prolongado recuerdo."
    },
    {      
      "id": 17,
      "saldo": 32,
      "precio": 3497,
      "color": "rosado",
      "title": "7Colores Reserva Rose 2022",
      "imagen": "https://cdn.shopify.com/s/files/1/0252/0884/8444/products/7C_RESERVA_RO-new_254x300@2x.png?v=1668022365",
      "descripcion":"El Vino 7 Colores Reserva Pinot Noir Rosé presenta un atractivo color rosado, que evoca la frescura y elegancia de los mejores vinos rosados. Su aroma es intenso y frutal, con notas de frutos rojos como fresas, cerezas y frambuesas, acompañadas de sutiles toques florales. En boca, este vino rosado es refrescante y equilibrado, con una acidez perfecta que realza sus sabores frutales y un final persistente que invita a seguir disfrutando. Ideal para acompañar platos ligeros como ensaladas, mariscos, pescados y carnes blancas."
    }
  ];

  export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
                    resolve(products);
                }, 500);
    })
  }

  export const getProductById = (productId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      },500)
    })
  }
