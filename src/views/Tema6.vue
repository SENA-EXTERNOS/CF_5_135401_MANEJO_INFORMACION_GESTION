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
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-2.svg' alt='AvatarTop')
        p.text-center Diagrama de flujo.
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-3.svg' alt='AvatarTop')
        p.text-center Espina de pescado o árbol de causas.
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-4.svg' alt='AvatarTop')
        p.text-center Matriz de criterios.
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-5.svg' alt='AvatarTop')
        p.text-center FODA.
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-6.svg' alt='AvatarTop')
        p.text-center Despliegue de la función de calidad.
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-7.svg' alt='AvatarTop')
        p.text-center <em>Design thinking.</em>
      .tarjeta.color-acento-contenido.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/img-8.svg' alt='AvatarTop')
        p.text-center <em> Benchmarking.</em>

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Criterios de aplicación de indicadores

    p.mb-5 Con el fin de garantizar fiabilidad y validez en los resultados, para que así contribuyan a la mejora continua de los procesos y, por ende, al alcance de los objetivos planteados, es fundamental realizar una selección adecuada de los indicadores con los que se medirá el sistema.

    p.mb-5 Los criterios que se deben tener en cuenta para la correcta selección de los indicadores, son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img.mb-5(src='@/assets/curso/temas/tema6/img-9.svg')
      .col-lg-7                      
        AcordionA(tipo="b" clase-tarjeta="tarjeta fnd-1")
          .row(titulo="Relevante")
            p Los indicadores seleccionados deben ser de importancia para el objetivo de análisis.
          .row(titulo="Disponible ")
            p Ser de fácil y rápida obtención.
          .row(titulo="Válido ")
            p Debe medir exactamente lo que se pretende medir.
          .row(titulo="Objetivo ")
            p Debe expresar acciones, nunca opiniones o juicios de valor.
          .row(titulo="Confiable")
            p Fiabilidad de las fuentes de información, debe ofrecer valores similares al ser medido por diferentes observadores en el mismo momento.
          .row(titulo="Comparable ")
            p Sensibles a posibles cambios, evidenciar transformaciones y facilitar contrastes.
          .row(titulo="Concreto ")
            p Deben ser específicos.
          .row(titulo="Medible ")
            p Deben ser cuantificables para, de esta forma, ser medidos.


    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Técnicas de análisis de resultados

    p.mb-5 En primera instancia, el análisis de datos debe poner su énfasis en el conocimiento de los datos, así como familiarizarse con sus características esenciales; para lograrlo es necesario someterlos a una limpieza o depuración, a partir de ejercicios críticos en los que los datos son analizados a la luz de su validez.
    p.mb-5 Para ello se utilizan diversas técnicas entre las que se resaltan:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-6               
             LineaTiempoD.non.color-acento-contenido
              p.mb-0(numero="1" titulo="Distribuciones univariables") Se refieren a distribuciones de frecuencias, medidas de resumen y gráficas, entre otros.
              p.mb-0(numero="2" titulo="Tabulaciones cruzadas") Se fundamentan en distribuciones de frecuencia, en agrupaciones importantes como sexo, raza, exposición, enfermedad, etc.
              p.mb-0(numero="3" titulo="Gráficos de puntos") Estos visualizan parejas de variables continuas.
              p.mb-0(numero="4" titulo="Matrices de correlación") Muestran los valores de correlación, que miden el grado de relación lineal, entre cada par de variables. 


            .col-lg-6
              figure
                img.mb-5(src='@/assets/curso/temas/tema6/img-10.svg')


    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Revisión final por la dirección
    p.mb-5 La dirección es responsable de la revisión periódica del sistema de gestión, que tiene como fin la verificación del cumplimiento de la política y los objetivos del sistema de gestión, además de la identificación del nivel de satisfacción de los diferentes públicos, a fin de identificar posibles acciones preventivas y correctivas. Para la realización de estas revisiones, es necesario que se disponga de los informes de auditorías internas y externas, así como también del informe del estado de las acciones preventivas y correctivas.

    p.mb-5  Posterior a la información para la revisión, deberán tomarse anotaciones que contengan las decisiones y la metodología a seguir en cada caso, relacionadas con:        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="l")
          div
            .row.justify-content-center.align-items-center        
              .col-md-4.mb-4.mb-md-0
                figure
                  img.img-88(src='@/assets/curso/temas/tema6/img-11.svg')
              .col-md-8
                p.txt El nivel de eficiencia del Sistema de Gestión de la Calidad. 
          div
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p Elementos de mejoramiento continuo que satisfagan los requisitos de calidad.
              .col-md-4
                figure
                  img.img-88(src='@/assets/curso/temas/tema6/img-12.svg')
          div
            .row.justify-content-center.align-items-center          
              .col-md-4.mb-4.mb-md-0
                figure
                  img.img-88(src='@/assets/curso/temas/tema6/img-13.svg')
              .col-md-8
                p.txt Acciones para cada actividad, dependiendo de su prioridad de ejecución.
          div
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p Recursos existentes y necesarios para cumplir efectivamente, con la política y objetivos de calidad.
              .col-md-4
                figure
                  img.img-88(src='@/assets/curso/temas/tema6/img-14.svg')

                  .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4.fnd-7
          p Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.

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
