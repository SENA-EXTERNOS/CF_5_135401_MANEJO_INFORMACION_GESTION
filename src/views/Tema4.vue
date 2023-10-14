<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sistemas de gestión

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-5
        figure
              img.mb-5(src='@/assets/curso/temas/tema4/img-1.svg')
      .col-lg-7      
        p Los sistemas de gestión se constituyen en herramientas que permiten planear, organizar, dirigir y controlar las tareas en un contexto organizacional, en busca de la estandarización, desde una lógica de proceso y de mejoramiento continuo, pilares que son fundamentales para la operación empresarial.
        p.mb-5 Estos sistemas de gestión se clasifican de acuerdo con su utilidad y enfoque en el contexto de la organización; a continuación, se presentan los diferentes tipos de sistemas de gestión:


      .row.justify-content-center

        .col-lg-7               
          LineaTiempoD.color-acento-contenido.mb-5
            p(numero="1" titulo="<em>Enterprise Resource Planning</em> (ERP)")  Este sistema de planificación de recursos empresariales o <em>software</em> ERP, permite gestionar todos los procesos de las organizaciones, abarcando las diferentes áreas que la componen; su enfoque se centra en el análisis de los procesos y facilidad del flujo de datos en información entre los mismos, desde producción hasta distribución o, inclusive, recursos humanos.
            p(numero="2" titulo="<em>Customer Relationship Management</em> (CRM)")  La gestión de la relación con el cliente o CRM, es una estrategia orientada, generalmente, a diligenciar tres áreas básicas: la gestión comercial, el<em> marketing</em> y el servicio posventa o atención al cliente.
              | Se refiere a sistemas de gestión que pueden estar integrados a los ERP y su función se enfoca en dar soporte a los procesos comerciales y en la gestión de clientes.
            p(numero="3" titulo="Sistemas de Gestión de Almacenes (SGA)")  Es una aplicación de<em> software,</em> herramienta orientada a controlar, coordinar y optimizar los movimientos, procesos y maniobras en las organizaciones con operación logística de almacenes, facilitando sus procesos de gestión y automatización; el SGA también puede estar articulado con el ERP. 
            p(numero="4" titulo="Sistemas de Gestión Documental (SGD)")  Se refiere a la forma de gestionar, coordinar y controlar las actividades específicas que afecten a la creación, la recepción, la ubicación, el acceso y la preservación de los documentos de las organizaciones, en formato físico o digital, poniendo especial atención a los procesos relacionados con su creación, almacenamiento, archivo, organización y gestión.
            p(numero="5" titulo="<em>Business Intelligence</em> (BI)")  Es un tipo de <em>software</em> que se nutre de datos de negocios y muestra reportes, secciones, tablas y gráficos de forma accesible; un conjunto de acciones donde su foco se centra en la gestión de grandes volúmenes de información, como apoyo a la gerencia en sus procesos de toma de decisiones. 
            p(numero="6" titulo="<em>Business Process Management</em> (BPM)")  La gestión de procesos de negocio, se refiere a la práctica con la que se forman, analizan y optimizan procesos para que la organización pueda lograr sus objetivos comerciales concretos, como mejorar la experiencia del cliente.
              | Es un conjunto de principios con la finalidad de garantizar que los productos se fabriquen en condiciones sanitarias adecuadas y se disminuyan los riesgos propios de la producción y la distribución.
        .col-lg-5
          figure.mb-5
              img(src='@/assets/curso/temas/tema4/img-2.svg')


    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Requisitos y normativas

    p.mb-5 Previo a la puesta en marcha de un sistema de gestión, es necesario identificar las necesidades y particularidades de la organización en la que se implementará. Los sistemas de gestión tienen la bondad de adaptarse al tipo de actividad y características de operación, en relación con el tipo de empresa. 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4.fnd-5
          p Existen dos rutas de implementación: la primera consiste en formular un sistema que establezca las directrices comunes para su operación y, posteriormente, conformar los sistemas restantes. La opción más rápida y eficiente, consiste en diseñar el sistema de gestión, integrado de cero. (Ekon, 2021).
  
    p.mb-5 Un elemento central de los sistemas de gestión, sin importar su enfoque, es el manual de gestión; este documento es el producto de una reflexión que permite establecer algunos elementos que sustentan el sistema, tales como:

    .row.justify-content-center.align-items-center.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-contenido.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-3.svg' alt='AvatarTop')
          p.text-center Políticas en las que el sistema se va a fundamentar.
        .tarjeta.color-acento-contenido.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-4.svg' alt='AvatarTop')
          p.text-center Alcance del sistema de gestión.
        .tarjeta.color-acento-contenido.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-5.svg' alt='AvatarTop')
          p.text-center Procedimientos que se llevarán a cabo.

        .tarjeta.color-acento-contenido.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img-6.svg' alt='AvatarTop')
          p.text-center Medidas de control que se van a implementar. 

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Reglamentos
    p.mb-5 Vale la pena aclarar que el manual de gestión no es un requisito obligatorio; sin embargo, es una guía que orienta y facilita la implementación, mantenimiento y mejora del sistema de gestión en una organización; en él se consignan los reglamentos tanto internos, como los del cliente, además de los requisitos para alcanzar un proceso de certificación, en caso que ese sea uno de los objetivos organizacionales. 
    p.mb-5 Conozca cuáles son los beneficios y los alcances del manual de gestión:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-1")
      .row(titulo="Beneficios de un manual de gestión")
        .col-md-7.mb-4.mb-md-0
          p El manual de gestión es un documento que presenta la composición y los aspectos esenciales del sistema de gestión, diseñado e implantado en una organización; su principal objetivo se relaciona con comunicar a sus grupos de interés las pretensiones definidas en el ámbito de la gestión, de acuerdo con el enfoque del sistema o sistemas que el manual abarca; de esta forma, es posible promover la gestión de conocimientos y experiencias a nivel interno y externo.
          p Otra de sus utilidades, consiste en garantizar transparencia por parte de la organización, brindando implicación en el fortalecimiento de la gestión y la mejora continua en coherencia con parámetros que se relacionan con las características de la empresa, su naturaleza y alcance esperado.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/img-7.png')
      .row(titulo="Alcances de un manual de gestión")
        .col-md-7.mb-4.mb-md-0
          p Cada organización está en condiciones de definir, de manera autónoma, el alcance de su manual de gestión; este aspecto está muy relacionado con sus ambiciones, enfoque y normas a las que este se acoge, hecho que tiene influencia en la forma en que este se estructura, los aspectos que abarca, y su extensión. Algo que sí es fundamental, es el nivel de conocimiento que tengan los integrantes del equipo que lo formulen y de esta forma será posible garantizar que, a partir de este, se cimienten los sistemas de gestión y se dé respuesta a los requerimientos, no solo de la normativa, sino a las expectativas de los clientes y a las necesidades de gestión de la organización.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/img-8.png')    

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Modelo de manual de gestión

    p.mb-5 Es  necesario tener en cuenta que la normativa reciente en sistemas de gestión, no contempla la obligatoriedad de disponer de un manual, pero, la norma ISO 9001:2008, plantea un modelo que incluye los siguientes apartados:

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img.mb-5(src='@/assets/curso/temas/tema4/img-9.png') 
      .col-lg-8
        TabsA.color-secundario.mb-5
          .tarjeta.fnd-3.p-4(titulo="Título y <br> alcance")
            p Se trata de una especie de preámbulo o introducción del documento. En este, se presenta el trabajo y se relaciona con la norma.
          .tarjeta.fnd-3.p-4(titulo="Tabla de<br> contenido")
            p Recoge las secciones que integran el documento, así como también todo aquello que la empresa considere necesario para avalar su gestión.
          .tarjeta.fnd-3.p-4(titulo="Documentos")
            p Toda aquella documentación que sustenta el sistema de gestión.
          .tarjeta.fnd-3.p-4(titulo="Política y<br> objetivos")
            p Se consignan de manera concreta, sin proporcionar demasiados detalles.
          .tarjeta.fnd-3.p-4(titulo="Estructura")
            p Desarrollo del organigrama de la empresa, en relación con el área encargada del sistema de gestión. Podrá incluir recursos visuales que ayuden al entendimiento.
          .tarjeta.fnd-3.p-4(titulo="Referencias")
            p Relación con otros textos o manuales que hayan servido, como marco, para el manual.
          .tarjeta.fnd-3.p-4(titulo="Descripción <br>del sistema")
            p Parte clave del manual. Se ubica el foco en cada uno de los métodos que emplea la organización, para satisfacer sus necesidades en el área encargada de velar por la implementación y cumplimiento de los sistemas de gestión.
          .tarjeta.fnd-3.p-4(titulo="Anexos")
            p Cualquier texto, informe, valoración o diagrama, que sirva de apoyo al tema central. Habrá que tener en cuenta que este tiene dos receptores: los auditores y los clientes.
        

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Propiedad intelectual

    p.mb-5 De acuerdo con lo establecido por la Organización Mundial de la Propiedad Intelectual - OMPI, la propiedad intelectual (PI) se relaciona con las creaciones de la mente: invenciones, obras literarias y artísticas, así como símbolos, nombres e imágenes utilizadas en el comercio. Con base en lo anterior, dicho ente define dos ramas de propiedad intelectual: la propiedad industrial y el derecho de autor.
    p.mb-5 La Dirección Nacional de Derecho de Autor -DNDA- señala que la propiedad intelectual es un área del derecho que busca proteger las creaciones del intelecto humano, las cuales pueden tener diversas características. Para el caso de Colombia, el Sistema de PI se organiza en tres áreas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8

      .col-lg-8
        .cajon.color-acento-botones.p-4.fnd-7
          ul.lista-ul--color
            li.mb-0 
              i.fas.fa-angle-right
              | Derecho de autor y derechos conexos (obras artísticas, científicas o literarias).
            li.mb-0 
              i.fas.fa-angle-right
              | Variedades vegetales (aplicación fundamentalmente agrícola).
            li.mb-0 
              i.fas.fa-angle-right
              | Propiedad industrial (signos distintivos y nuevas creaciones como son las patentes).  


    p.mb-5 La ley colombiana, otorga protección al derecho de autor, sobre las diversas formas en que se expresen ideas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8


        .row.justify-content-center.d-flex.text-center
          .col-lg.mb-5
              .tarjeta-avatar
                img.mb-5(src='@/assets/curso/temas/tema4/img-10.svg' alt='AvatarTop')
                .tarjeta.fnd-6.w-100
                  p.p-4.py-5 No es obligatorio hacer un registro y este derecho perdura a lo largo de la vida del autor, incluso hasta 80 años después de su muerte y, posteriormente, se convierte en obra de dominio público.
          .col-lg.mb-5               
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema4/img-11.svg' alt='AvatarTop')
                .tarjeta.fnd-6.w-100
                  p.p-4.py-5  Cuando un autor elige hacer un registro de su obra ante la Dirección Nacional del Derecho de Autor, su objetivo es el de brindar mayor seguridad a su obra. Este derecho aplica también al<em> software</em>, por lo que el código fuente de un programa informático está cubierto por la Ley de Derechos de Autor.










</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
