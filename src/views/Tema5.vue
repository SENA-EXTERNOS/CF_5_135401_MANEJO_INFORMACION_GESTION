<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cronograma de actividades: variables y tipos

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-5
        figure
              img.mb-5(src='@/assets/curso/temas/tema2/img-1.png')
      .col-lg-7      
        p Luego de aprender sobre propiedad intelectual, es necesario conceptualizar un cronograma de actividades, como una herramienta utilizada para el desarrollo de proyectos que tiene como objetivo, facilitar el seguimiento de un proceso determinado y verificar el cumplimiento de las actividades planteadas.
        p Posterior a la definición de actividades requeridas durante la ejecución del proyecto, es posible valerse de herramientas de soporte, como el diagrama de Gantt, que permitirá establecer acciones de control a lo largo de la ejecución.

    p.mb-5 El diagrama de Gantt consiste en un gráfico de barras que ilustra un cronograma de actividades del proyecto y debe incluir:        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.bl-izq 
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img-2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color.nar
              li 
                i.fas.fa-angle-right
                | Las fechas de inicio y finalización de las actividades a realizar durante el proyecto.
              li 
                i.fas.fa-angle-right
                | Las relaciones de dependencia entre las actividades, facilitando identificar posibles situaciones de riesgo.
    p.mb-5 Por lo tanto, elaborar un cronograma implica los siguientes pasos: 

    .tarjeta.tarjeta--gris.p-4.mb-5.fnd-3 
      PasosB.color-acento-contenido
        .row.justify-content-center.mt-5(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema5/img-3.png')
          .col-md-6
            h3 Definir la totalidad de actividades del proyecto
            p Consiste en hacer un listado de todas las acciones necesarias para que el proyecto salga a la luz.
        .row.justify-content-center.mt-5(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema5/img-4.png')
          .col-md-6
            h3 Determinar las relaciones entre actividades         
            p Identificar qué relación existe entre cada una de las actividades y cómo existen relaciones de interdependencia entre las mismas.
        .row.justify-content-center.mt-5(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema5/img-5.png')
          .col-md-6
            h3 Definir plazos         
            p Identificar la cantidad de tiempo necesario para llevar a cabo cada tarea del proceso. 
        .row.justify-content-center.mt-5(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema5/img-6.png')
          .col-md-6
            h3 Diseñar el cronograma          
            p Una vez se cuenta con la anterior información, se procede a llevar el cronograma a un escenario gráfico. 
        .row.justify-content-center.mt-5(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            figure
              img.px-3(src='@/assets/curso/temas/tema5/img-7.png')
          .col-md-6
            h3 Reajuste del cronograma          
            p Tener en cuenta la posibilidad de ajustar el cronograma; esto puede ser resultado de inclusión de nuevas tareas o necesidad de reasignación de recursos.
      
    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Variables y tipos

    p.mb-5 Teniendo en cuenta que el programa más sencillo es el cronograma, una gráfica de doble entrada en la que las filas configuran las tareas o actividades y las columnas definen los periodos, generalmente días o meses. Los trazos horizontales indican la duración de las tareas o actividades, con fechas de inicio y terminación bien definidas, conforme a su localización en las columnas.




    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.fnd-2
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h3.mb-0 Existen diversos tipos de cronogramas de actividades: 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color.nar
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Diagrama de Gantt. 
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Diagrama de PERT. 
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Cronogramas de investigación, de trabajo y de hitos. 
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Microsoft Project. 
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Cronograma de inversiones. 
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Cronograma Pay.
    
    p.mb-5 Los principales beneficios de implementar un cronograma de actividades son:

    .row.justify-content-center.d-flex
      .col-lg.mb-5
          .tarjeta-avatar
            img.mb-5(src='@/assets/curso/temas/tema5/img-8.svg' alt='AvatarTop')
            .tarjeta.fnd-6.w-100
              p.p-4.py-5.text-center Facilidad en la supervisión de las actividades relacionadas con el proyecto, (evita retrasos u omisión de actividades).
      .col-lg.mb-5               
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema5/img-9.svg' alt='AvatarTop')
            .tarjeta.fnd-6.w-100
              p.p-4.py-5.text-center  Visualización simplificada de los requerimientos del proyecto, (permite asignar los recursos necesarios para cada tarea).
      .col-lg.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema5/img-10.svg' alt='AvatarTop')
            .tarjeta.fnd-6.w-100
              p.p-4.py-5.text-center Control de atascos o cuellos de botella, (previsión de acciones de contingencia en caso de ocurrencia).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/img-11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Diagramas
                  p.text-small Para concluir con esta temática, lo invitamos a leer el documento Diagramas. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexo_Diagramas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download        

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
