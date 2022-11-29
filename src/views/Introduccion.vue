<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5 
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img-intro.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, bienvenido a este componente formativo donde podrá actualizar sus conocimientos sobre el sistema de gestión, con la inclusión de material relacionado con los requerimientos para el diseño e implementación de un sistema de gestión en una organización determinada; a través de los contenidos disponibles, se pueden identificar los componentes del ciclo PHVA (Planear, Hacer, Verificar, Actuar), así como, también, elementos y herramientas necesarios para la implementación efectiva de un sistema de gestión, garantizando la pertinencia del mismo, de acuerdo con las características y necesidades de la organización.

    br 
    br
    p Teniendo en cuenta lo anterior, al finalizar este componente, estará en condiciones de identificar y formular indicadores de gestión, además de los mecanismos y herramientas para la implementación, seguimiento de actividades y evaluación de resultados. 
    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Fj3zHwTwVsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
