export default {
  global: {
    componenteFormativo: 'El sistema de gestión',
    descripcionCurso:
      'Este componente formativo aborda elementos relacionados con la fundamentación de un sistema de gestión en una organización determinada; profundiza en aspectos relacionados con los indicadores de gestión, la manera en que se administra el mismo a través de la implementación del ciclo PHVA, además de una caracterización de los tipos de sistemas de administración y su aporte al desarrollo organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal-.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Indicadores de gestión: clases y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Formulación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Análisis y seguimiento',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Administración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ciclo PHVA',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistemas de gestión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cronograma de actividades: variables y tipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Evaluación del desempeño del sistema',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evaluación del desempeño del sistema',
      referencia:
        'Silva. O. y Silva. G. (2005). <em>7 herramientas básicas de la calidad.</em>',
      tipo: 'PDF',
      link:
        'https://www.colima.tecnm.mx/posgrado/vfji/materialdescarga/Las%207%20herramientas.pdf',
    },
    {
      tema: 'Evaluación del desempeño del sistema',
      referencia:
        'Delgado, F. (2017). <em>La Matriz FODA (Fortalezas Oportunidades Debilidades y Amenazas) </em>(video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IZWUYayHLcI',
    },
    {
      tema: 'Evaluación del desempeño del sistema',
      referencia:
        'Design Thinking España. (2020). <em>Metodología Desgn Thinking. ¡Aprende a aplicar sus fases con ejemplos! </em>(video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_ul3wfKss58',
    },
    {
      tema: 'Evaluación del desempeño del sistema',
      referencia:
        '100negocios. (2019). <em>¿Qué es Benchmarking? Ejemplos de Empresas</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7wdH2w48JZc',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'proceso que implica establecer las características propias de la información, aportada por el sistema de gestión y sus indicadores.',
    },
    {
      termino: 'Confiabilidad',
      significado:
        'garantía del origen de los datos que los hace adecuados para la toma de decisiones.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'capacidad de los indicadores de ser obtenidos de manera oportuna y de fácil acceso.',
    },
    {
      termino: 'FODA',
      significado:
        'herramienta de análisis de información que permite identificar Fortalezas, Oportunidades, Debilidades y Amenazas.',
    },
    {
      termino: 'Funcionalidad',
      significado: 'condición que facilita monitorear los indicadores.',
    },
    {
      termino: 'Indicador',
      significado:
        'elemento objetivo de medición para verificar la efectividad de un proceso, actividad o sistema.',
    },
    {
      termino: 'Pertinencia',
      significado:
        'condición de precisión en relación con el objeto que se mide, que deben tener los indicadores.',
    },
    {
      termino: 'PHVA',
      significado:
        'ciclo para el desarrollo de procesos que consta de Planear, Hacer, Verificar y Actuar.',
    },
    {
      termino: 'Utilidad',
      significado: 'nivel de relevancia que deben tener los indicadores.',
    },
    {
      termino: 'Variables',
      significado:
        'elementos que componen un indicador y a partir de los cuales se puede realizar medición y seguimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arciniegas, J. y González, O. (2016). <em>Sistemas de gestión de calidad: teoría y práctica bajo la norma ISO 2015.</em> Bogotá, Ecoe Ediciones.',
    },
    {
      referencia:
        'Chiavenato, I. (2001). <em>Proceso Administrativo.</em> McGraw-Hill Interamericana S.A.',
    },
    {
      referencia:
        'Colombia Aprende. (s.f.). <em>¿Cómo se concibe la propiedad intelectual en el contexto internacional? </em>',
      link:
        'https://www.colombiaaprende.edu.co/recurso-coleccion/propiedad-intelectual',
    },
    {
      referencia:
        'Ekon. (2021). <em>¿Qué es un sistema de gestión y para qué sirve? </em>',
      link:
        'https://www.ekon.es/blog/sistemas-de-gestion-integral-para-el-funcionamiento-optimo-de-la-empresa/',
    },
    {
      referencia:
        'Heizer, J. y Render, B. (2009). <em>Principios de administración de operaciones. </em>PEARSON EDUCACIÓN',
    },
    {
      referencia:
        'Ingenio Empresa. (s.f.). <em>Indicadores, la guía completa, su definición, clasificación y elaboración.</em>',
      link:
        'https://www.ingenioempresa.com/indicadores-una-guia-incompleta/#Tipos_de_indicadores',
    },
    {
      referencia:
        'Reinoso Lastra, J. F. y Uribe Macías, M. E. (2009). <em>Los indicadores de gestión y su relación con la cultura organizacional.</em> Sello Editorial Universidad del Tolima.',
    },
    {
      referencia:
        'Zapata Gómez, A. (2015). <em>Ciclo de la calidad PHVA.</em> Editorial Universidad Nacional de Colombia.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
