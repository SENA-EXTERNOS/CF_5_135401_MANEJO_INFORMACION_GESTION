<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ciclo PHVA


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Por su parte, el ciclo PHVA, denominado también como ciclo de la calidad, espiral de la mejora continua, o ciclo de <em>Deming, </em>es una herramienta explorada en sus inicios por Walter<em> Shewhart</em> y, posteriormente, profundizada en 1950 por <em>Deming.</em> Su base fundamental abarca cuatro subprocesos: Planificar, Hacer, Verificar y Actuar. Además, este procedimiento se desarrolla de forma cíclica y contribuye a la organización y posterior ejecución de los procesos, así como también al compromiso de las organizaciones con el cumplimiento de altos estándares de calidad en sus productos y/o servicios.

    p.mb-5 Históricamente, la calidad ha formado parte de las actividades humanas; esto se puede evidenciar a través de la evolución de herramientas relacionadas con la caza, la construcción de viviendas, la fabricación de prendas de vestir, entre otros, cuyo desarrollo se dió desde instancias tempranas de la evolución de la especie. Aproximadamente en el año 2.150 antes de la era actual, se ubica la creación del primer marco normativo de cultura alguna, hasta ahora identificado, conocido como Código de Hammurabi, en el que se consignan indicaciones relacionadas con el control para la construcción de casas. Por su parte, los fenicios se ayudaron de un programa de acción correctiva para asegurar la calidad. Los egipcios se valían de cuerdas para la verificación de medidas, mientras que los mayas establecían medidas para la construcción, a través de diversos instrumentos.

    p.mb-5 Después del contexto histórico mencionado, se expondrá ahora, el desarrollo de la calidad a través del tiempo:

    .tarjeta.tarjeta--gris.p-4.mb-5.fnd-3
      LineaTiempoC.color-acento-contenido(text-small)
        .row.px-5(titulo="Etapa artesanal")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-2.png')
          .col-md-6
            p Aparece una preocupación por el prestigio, se constituyen gremios y se determinan rangos como maestros artesanos y aprendices, con el fin de garantizar procesos de aprendizaje.
        .row.px-5(titulo="Revolución industrial")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-3.png')
          .col-md-6
            p Se desarrollan grandes industrias y aparece el concepto de producción en serie, generando la necesidad de garantizar características de calidad en los productos.
        .row.px-5(titulo="Administración científica hasta Segunda Guerra Mundial")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-4.png')
          .col-md-6
            p  Se manifiesta una preocupación por el incremento de la productividad, se desarrolla la estandarización del trabajo, se define el proceso administrativo, así como también la necesidad de minimizar el producto defectuoso y optimizar los recursos.
        .row.px-5(titulo="Segunda Guerra Mundial hasta década de los 60")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-5.png')
          .col-md-6
            p  Se incluyen procesos estadísticos en el contexto organizacional, aportando al seguimiento de efectividad, se formulan las primeras normas relacionadas con el aseguramiento de la calidad y aparece, en Japón, el concepto de la calidad total.
        .row.px-5(titulo="Década de los 70 hasta década de los 90")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-6.png')
          .col-md-6
            p  Se impone el enfoque sistémico de la calidad, en la que todos los miembros de la organización asumen responsabilidades en términos del cumplimiento de los estándares de calidad. 
        .row.px-5(titulo="Década de los 90 hasta la actualidad")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img-7.png')
          .col-md-6
            p  Sistematización de los procesos, gestión del conocimiento en las organizaciones, fortalecimiento de la calidad total a través de procesos de liderazgo, involucramiento y empoderamiento de los miembros de la organización.          
    p.mb-5 De acuerdo con las etapas del ciclo PHVA, se podría establecer que cada una de ellas cuenta con un enfoque diferente y, por ende, con una serie de principios, que aportan al desarrollo de la organización.
    p.mb-5 Las etapas del ciclo PHVA son:
    .row.justify-content-center.mb-5
      .col-lg-6
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-8-.svg')
          .tarjeta.fnd-3.p-3(x="11.8%" y="18%" numero="1")
            p Consiste en la definición de políticas, objetivos y procesos de la organización, responde a las preguntas ¿qué hacer? y ¿cómo hacerlo?
          .tarjeta.fnd-3.p-3(x="85.6%" y="18%" numero="2")
            p Define la forma en que se implementarán los procesos en relación con la planificación.
          .tarjeta.fnd-3.p-3(x="86.7%" y="82%" numero="3")
            p Enfoca su actuar en el seguimiento a los procesos, productos y servicios, comprobando la ejecución de actividades, de conformidad con lo planificado.
          .tarjeta.fnd-3.p-3(x="13%" y="82%" numero="4")
            p Define acciones relacionadas con el mejoramiento continuo y formalización de compromisos para su ejecución.

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Relación con el sistema de gestión

    p.mb-5 Es así como la implementación del ciclo PHVA a nivel organizacional, debe ser coordinado desde la dirección, garantizando la implicación y responsabilidad de todos los miembros de las áreas funcionales, asegurando el cumplimiento de diferentes etapas como:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="l")
          div
            .row.justify-content-center.align-items-center.mb-5          
              .col-md-4.mb-4.mb-md-0
                figure
                  img.img-88(src='@/assets/curso/temas/tema3/img-9.svg')
              .col-md-8
                p.txt Formulación de la idea inicial, acuerdos directivos y estudio de oportunidad.
          div
            .row.justify-content-center.align-items-center.mb-5
              .col-md-8.mb-4.mb-md-0
                p Diseño donde se formula y se define la idea. 
              .col-md-4
                figure
                  img.img-88(src='@/assets/curso/temas/tema3/img-10.svg')
          div
            .row.justify-content-center.align-items-center.mb-5          
              .col-md-4.mb-4.mb-md-0
                figure
                  img.img-88(src='@/assets/curso/temas/tema3/img-11.svg')
              .col-md-8
                p.txt Sensibilización donde se explican los beneficios del proyecto.
          div
            .row.justify-content-center.align-items-center.mb-5
              .col-md-8.mb-4.mb-md-0
                p Diagnóstico para conocer el estado de la organización con respecto al ciclo.
              .col-md-4
                figure
                  img.img-88(src='@/assets/curso/temas/tema3/img-12.svg')
          div
            .row.justify-content-center.align-items-center.mb-5          
              .col-md-4.mb-4.mb-md-0
                figure
                  img.img-88(src='@/assets/curso/temas/tema3/img-13.svg')
              .col-md-8
                p.txt Formación del personal para mejor comprensión de la idea.
          div
            .row.justify-content-center.align-items-center.mb-5
              .col-md-8.mb-4.mb-md-0
                p Planificación y estudio detallado.
              .col-md-4
                figure
                  img.img-88(src='@/assets/curso/temas/tema3/img-14.svg')
          div
            .row.justify-content-center.align-items-center.mb-5          
              .col-md-4.mb-4.mb-md-0
                figure
                  img.img-88(src='@/assets/curso/temas/tema3/img-15.svg')
              .col-md-8
                p.txt Desarrollo e implementación, ajustes necesarios y puesta en marcha.
          div
            .row.justify-content-center.align-items-center.mb-5
              .col-md-8.mb-4.mb-md-0
                p Evaluación de avance y mejoras.
              .col-md-4
                figure
                  img.img-88(src='@/assets/curso/temas/tema3/img-16.svg')

    p.mb-5 Para profundizar un poco más sobre este tema es necesario visualizar el siguiente video, el cual presenta la relación existente entre el ciclo PHVA y los principios de la calidad.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Fj3zHwTwVsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video                  



















</template>

<script>
export default {
  name: 'Tema3',
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
