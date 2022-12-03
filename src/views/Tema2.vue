<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Administración

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-5
        figure
              img.mb-5(src='@/assets/curso/temas/tema2/img-1.png')
      .col-lg-7      
        p Con la finalidad de garantizar una administración adecuada de los sistemas de gestión que se implementan en una organización específica, es primordial conocer algunos elementos conceptuales, sobre los que se sustenta la lógica de la gestión por procesos; se habla, entonces, del sistema productivo que es un conjunto de elementos que interactúan entre sí, para llevar a cabo un proceso de transformación de unos insumos (entradas - <em>inputs</em>) en producto terminado (salidas -<em> outputs</em>). Para lograr el fortalecimiento de un sistema productivo, es necesario que se realice una gestión eficiente y eficaz de los factores productivos (recursos), disponibles por parte de la organización en que se lleva a cabo.

    p.mb-5 A continuación, se ampliará esta información:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4.fnd-7(titulo="Eficiencia")
            p Se hace énfasis en la optimización de los recursos disponibles; en este caso, se podría decir que un proceso productivo es eficiente en la medida en que se minimicen los desperdicios, subestimando el costo de los factores de producción. 
          .tarjeta.p-4.fnd-7(titulo="Eficacia")
            p Hace referencia a la capacidad del sistema para alcanzar los objetivos establecidos, unidades a producir; en este caso, se habla de un sistema eficaz, cuando la producción alcanzada corresponde a las unidades establecidas en los planes de producción.
      .col-lg-3
        figure
          img.mb-5(src='@/assets/curso/temas/tema2/img-2.png')

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Sistema operativo

    p.mb-5 Por otra parte, se denomina sistema operativo a un programa informático<em> (software)</em>, que permite hacer un proceso de intermediación entre el<em> hardware,</em> o componente físico del dispositivo, los programas informáticos específicos que se utilizan y, el usuario, a través de un entorno visual que facilite su operación.         
    p.mb-5 De acuerdo con su clasificación, los sistemas operativos pueden ser:   


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-1")
      .row(titulo="De arquitectura")
        .col-md-6.mb-4.mb-md-0
          p Esta característica viene dada por si el sistema operativo está construido con una arquitectura de 32 o de 64 bits. En este sentido, cuanto mayor sea la arquitectura, mayor carga de trabajo podrá administrar el sistema operativo. El siguiente paso natural, será evolucionar del sistema de 64 bits al de 128 bits.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-3.png')
      .row(titulo="Monotarea o multitarea")
        .col-md-6.mb-4.mb-md-0
          p Como su nombre indica, se trata de si el sistema operativo realiza una sola tarea hasta su finalización, para después comenzar con otra diferente, o si es posible encargar al sistema operativo varias tareas a la vez, ajustando recursos, según se vayan necesitando.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-4.png')
      .row(titulo="Monousuario o multiusuario")
        .col-md-6.mb-4.mb-md-0
          p En este caso, lo que se viene a exponer es si el sistema operativo debe ejecutarse por un solo usuario o si, en cambio, puede ejecutarse por varios a la vez.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-5.png')
      .row(titulo="Centralizado o distribuido")
        .col-md-6.mb-4.mb-md-0
          p Se trata de si se pueden utilizar los recursos de un solo computador, o si se pueden obtener recursos de varios computadores simultáneamente.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-6.png')
      .row(titulo="Orientación a dispositivos")
        .col-md-6.mb-4.mb-md-0
          p Consiste en clasificar el sistema operativo, según el dispositivo donde se aloje. Los más populares son PC,<em> tablet, smartphone</em> o consolas, entre otros.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-7.png')
      .row(titulo="Libre o de pago")
        .col-md-6.mb-4.mb-md-0
          p Al igual que un <em>software</em> cualquiera, un sistema operativo, puede ser libre (de uso público, sin ser propietarios de ninguna licencia) o de pago (a cambio de un pago se obtiene una licencia permanente o temporal del <em>software</em>).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-8.png')
      .row(titulo="Empotrados")
        .col-md-6.mb-4.mb-md-0
          p Estos tipos de sistema operativo son típicos en grandes empresas, donde son necesarios en ciertas fases de producción en fábricas o en otros sectores, tales como el sector servicios o el primario. Estos sistemas operativos se encargan, en tiempo real, de tareas muy específicas donde normalmente precisan de poca intervención humana directa.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-9.png')


    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Mapas de proceso
    p.mb-5 Después de conocer los diferentes sistemas operativos, se define ahora el mapa de proceso, que es una herramienta gráfica que permite representar la forma en que una organización produce valor, es decir, la secuencia de pasos lógicos que se desarrollan para llevar a cabo el proceso productivo o transformación de unas entradas, en salidas. En el mapa de procesos, es posible apreciar las interacciones que existen entre áreas organizacionales y la manera en que una materia prima es objeto de manipulación, hasta convertirse en producto terminado.
    p.mb-5 Los beneficios de un mapa de procesos son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row(titulo="")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-88(src='@/assets/curso/temas/tema2/1.svg')
            .col-md-8
              p.txt Define objetivos y alinea las diferentes áreas que intervienen en ellos.
          .row(titulo="")
            .col-md-8.mb-4.mb-md-0
              p Aporta en la definición de una estructura jerárquica coherente en la organización.
            .col-md-4
              figure
                img.img-88(src='@/assets/curso/temas/tema2/2.svg')
          .row(titulo="")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-88(src='@/assets/curso/temas/tema2/3.svg')
            .col-md-8
              p.txt Permite analizar procesos, incrementar la calidad y/o reducir tiempos.
          .row(titulo="")
            .col-md-8.mb-4.mb-md-0
              p Evalúa la eficacia y eficiencia de los procesos.
            .col-md-4
              figure
                img.img-88(src='@/assets/curso/temas/tema2/4.svg')
          .row(titulo="")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-88(src='@/assets/curso/temas/tema2/5.svg')
            .col-md-8
              p.txt Define los roles y responsabilidades a lo largo del proceso.
          .row(titulo="")
            .col-md-8.mb-4.mb-md-0
              p Posibilita la identificación de oportunidades de mejora, en el flujo de información.
            .col-md-4
              figure
                img.img-88(src='@/assets/curso/temas/tema2/6.svg')
          .row(titulo="")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-88(src='@/assets/curso/temas/tema2/7.svg')
            .col-md-8
              p.txt Identifica oportunidades de mejora a nivel general, departamental, o en áreas específicas.
          .row(titulo="")
            .col-md-8.mb-4.mb-md-0
              p Identifica ineficiencias o requerimientos de personal.
            .col-md-4
              figure
                img.img-88(src='@/assets/curso/temas/tema2/8.svg')
          .row(titulo="")
            .col-md-4.mb-4.mb-md-0
              figure
                img.img-88(src='@/assets/curso/temas/tema2/9.svg')
            .col-md-8
              p.txt Brinda comprensión respecto al funcionamiento de la organización.
          .row(titulo="")
            .col-md-8.mb-4.mb-md-0
              p Aporta capacidad de adaptación y flexibilidad frente a posibles cambios.
            .col-md-4
              figure
                img.img-88(src='@/assets/curso/temas/tema2/10.svg')

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Elaboración de planes de acción

    p.mb-5 Luego de exponer los beneficios de los mapas de procesos, es importante reconocer el plan de acción, porque es una herramienta que permite verificar las tareas que se deben desarrollar, con el fin de alcanzar una meta establecida. Es un elemento esencial para la planificación estratégica y para generar eficiencia en el trabajo en equipo.         

    p.mb-5 Este plan debe incluir los siguientes elementos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img-10.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color.nar
              li 
                i.fas.fa-angle-right
                | Objetivo y metas.
              li 
                i.fas.fa-angle-right
                | Tareas para alcanzar el objetivo.
              li 
                i.fas.fa-angle-right
                | Responsables de las tareas. 
              li 
                i.fas.fa-angle-right
                | Fechas o rangos de tiempo para la realización.
              li 
                i.fas.fa-angle-right
                | Recursos necesarios.
              li 
                i.fas.fa-angle-right
                | Indicadores para evaluar el progreso.


    p.mb-5 A continuación, se presentan los pasos para elaborar un plan de acción:

    .tarjeta.tarjeta--gris.p-4.mb-5.fnd-3 
      PasosB.color-acento-contenido
        .row.justify-content-center.mt-5(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema2/img-11.png')
          .col-md-6
            p Definir el objetivo: es necesario tener en cuenta las siguientes recomendaciones:     
            ul.lista-ul--color.nar
              li 
                i.fas.fa-angle-right
                | Específico.
              li 
                i.fas.fa-angle-right
                | Medible.
              li 
                i.fas.fa-angle-right
                | Alcanzable.
              li 
                i.fas.fa-angle-right
                | Relevante.
              li 
                i.fas.fa-angle-right
                | Oportuno.
        .row.justify-content-center.mt-5(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema2/img-12.png')
          .col-md-6
            p Enumerar los pasos a seguir: definir una secuencia lógica de las acciones a llevar a cabo, para alcanzar el objetivo.     

        .row.justify-content-center.mt-5(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema2/img-13.png')
          .col-md-6
            p Priorizar tareas y definir fechas límite realistas.     

        .row.justify-content-center.mt-5(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema2/img-14.png')
          .col-md-6
            p Identificar los recursos necesarios y formular presupuesto.     

        .row.justify-content-center.mt-5(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema2/img-15.png')
          .col-md-6
            p Llevar el plan de acción a una herramienta gráfica (diagrama de flujo o de <em>Gantt</em>).     












</template>

<script>
export default {
  name: 'Tema2',
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
