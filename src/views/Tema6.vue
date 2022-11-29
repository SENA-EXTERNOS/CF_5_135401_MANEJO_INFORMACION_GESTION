<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Evaluación del desempeño del sistema
    .row.justify-content-center(data-aos="fade-up")
      .col-lg-5
        figure
              img.mb-5(src='@/assets/curso/temas/tema6/img-1.svg')
      .col-lg-7      
        p Luego de conocer los tipos de diagramas y una vez implementado el sistema de gestión, es importante establecer mecanismos para su evaluación, con el fin de garantizar su pertinencia y que aporte al desarrollo de la organización y sus objetivos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.fnd-2
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h3.mb-0 Algunas de las herramientas más utilizadas se mencionan a continuación: 
            .col-lg-8
              .bloque-texto-a__texto.p-4            
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    ul.lista-ul--color.nar2
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Diagrama de Pareto.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Gráficos de control.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Hoja de recogida de datos.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Histograma.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Diagrama de correlación.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | La función de pérdida de Taguchi.

                  .col-lg-6
                    ul.lista-ul--color.nar2

                      li.mb-0 
                        i.fas.fa-angle-right
                        | Hoja de registro de tiempo o métodos de control de tiempo.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Estudios de precisión.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Encuestas o cuestionarios.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Quejas o sugerencias.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Análisis de tendencias.
                      li.mb-0 
                        i.fas.fa-angle-right
                        | Evaluación 360º.

    p.mb-5 Una vez aplicados los instrumentos de medición, es importante valerse de diferentes herramientas que faciliten el análisis de la información, con el fin de formular acciones que permitan mejorar el desempeño de la organización; algunas de las herramientas para realizar este análisis son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-2.svg' alt='AvatarTop')
        p.text-center Diagrama de flujo.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-3.svg' alt='AvatarTop')
        p.text-center Espina de pescado o árbol de causas.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-4.svg' alt='AvatarTop')
        p.text-center Matriz de criterios.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-5.svg' alt='AvatarTop')
        p.text-center FODA.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-6.svg' alt='AvatarTop')
        p.text-center Despliegue de la función de calidad.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-7.svg' alt='AvatarTop')
        p.text-center Design thinking.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-8.svg' alt='AvatarTop')
        p.text-center Benchmarking.
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
