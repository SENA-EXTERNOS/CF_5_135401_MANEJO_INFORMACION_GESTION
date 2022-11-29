<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Indicadores de gestión: clases y características

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-5
        figure
              img.mb-5(src='@/assets/curso/temas/tema1/img-1.svg')
      .col-lg-7      
        p Los indicadores de gestión son herramientas gerenciales, fundamentales para realizar el seguimiento y análisis de la eficiencia y eficacia de los diferentes procesos de la organización, a partir de la verificación del cumplimiento de los objetivos y metas de un proceso determinado, en relación con los grupos de interés; de esta manera, se aporta información valiosa para la toma de decisiones, el diseño de planes de contingencia y la formulación de acciones de mejora, el logro y ejecución de la misión, valores, unidades, índices, series, y estadísticas entre otras.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-e.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            h2.text-regular Los indicadores no solo aportan datos, también deben cumplir con los siguientes atributos de la información 
            i.fas.fa-quote-right
          .row.align-items-end
              .bloque-texto-e__autor 
                .h3.mb-0 (Reinoso Lastra, J. F. y Uribe Macías, M. E., 2009, p. 17)         

    .row.justify-content-center.mb-5
      .col-lg-5
        figure.mb-5 
          img(src='@/assets/curso/temas/tema1/img-2.svg')
      .col-lg-7                      
        AcordionA(tipo="b" clase-tarjeta="tarjeta fnd-1")
          .row(titulo="Exactitud")
            p Presentar la situación tal y como es.
          .row(titulo="Forma")
            p Se refiere a elegir, según la situación, necesidades y habilidades de quien la recibe y procesa. La información puede ser numérica, gráﬁca, cualitativa, etc. 
          .row(titulo="Frecuencia")
            p Qué tan seguido se requiere información y cuántas veces debe ser procesada para una buena operatividad.    
          .row(titulo="Extensión")
            p Alcance en términos de las necesidades o requerimientos de cobertura. Área que se va a estudiar.    
          .row(titulo="Origen")
            p Fuente que aporta información, debe ser confiable, sea interna o externa.    
          .row(titulo="Temporalidad")
            p La información suministra datos, de acuerdo con el periodo al que hace referencia.    
          .row(titulo="Relevancia")
            p Depende de cada situación o factor particular de la información, indica si es urgente o no.    
          .row(titulo="Integridad")
            p La información proporciona una visión extensa para comprender lo necesario de una determinada situación.    
          .row(titulo="Oportunidad")
            p Información disponible y actualizada cuando se necesite.     


    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Clases 

    p Ahora bien, los indicadores permiten hacer seguimiento a la gestión, posibilitando la verificación del desempeño eficaz de las organizaciones y facilitando la toma de decisiones que promuevan el aprendizaje organizacional, en relación con su historia, situación actual, y desafíos.
    p.mb-5 De acuerdo con diversas metodologías, los indicadores se pueden clasificar de la siguiente manera:

    .tarjeta.tarjeta--gris.p-4.mb-5.fnd-3 
      PasosB.color-acento-contenido
        .row(titulo="Paso 1")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-3.svg')
          .col-md-8
            h3 Por medición 
            h4 Indicadores cuantitativos
            p Son una representación numérica de un proceso, evento o fenómeno. Aportan respuesta a preguntas de cuánto, cada cuánto, y con qué frecuencia.
            h4 Indicadores cualitativos
            p A través de ellos es posible demostrar o describir un evento. Por lo general, están basados en instrumentos orientados a responder preguntas relacionadas con el cuándo, quién, dónde, qué, cómo y por qué.
        .row(titulo="Paso 2")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-4.svg')
          .col-md-8
            h3 Por nivel de intervención  
            h4 Indicadores de impacto
            p Miden el comportamiento generado «después de» con un enfoque a largo plazo. Ejemplo: incremento en la productividad.
            h4 Indicadores de resultado
            p Miden el alcance del objetivo en la salida de un proceso. Ejemplo: evaluación de atención al cliente.
            h4 Indicador de proceso
            p Miden el grado de avance de las actividades planeadas. Ejemplo: la cantidad de folios sistematizados.
            h4 Indicadores de insumo
            p Miden la disponibilidad de recursos y su ejecución. Ejemplo: ejecución del presupuesto de <em>marketing.</em>
        .row(titulo="Paso 3")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-5.svg')
          .col-md-8
            h3 Por nivel jerárquico 
            h4 Indicadores de gestión
            p Miden la relación entre los insumos y los procesos, permiten analizar el comportamiento y desempeño desde la perspectiva de procesos. Son cuantitativos y miden el componente operativo. 
            h4 Indicadores estratégicos
            p Constituyen la evaluación de productos, efectos o impactos, haciendo que en su enfoque se encuentre el cumplimiento de los objetivos estratégicos de la organización.
                                   
        .row(titulo="Paso 4")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img-6.svg')
          .col-md-8
            h3 De eficacia, eficiencia y efectividad 
            p Esta clasificación es la más utilizada con relación a indicadores de gestión.
            h4 De eficacia
            p Miden la relación entre los objetivos a alcanzar y lo conseguido realmente. Ejemplo: proyección de ventas, frente a las ventas efectivas.
            h4 De eficiencia
            p Miden la optimización de recursos e insumos en el proceso. Ejemplo: porcentaje de desperdicio.
            h4 De efectividad o productividad
            p Están relacionados con la consecución de objetivos, con un mayor aprovechamiento del recurso.
            
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.fnd-2
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h3.mb-0 Es fundamental tener en cuenta los siguientes criterios a la hora de formular los indicadores:
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color.nar
                  li.mb-0 
                    i.fas.fa-angle-right
                    p.mb-0 
                      b Simples: 
                      | deben ser comprensivos tanto en la definición de su nombre, como en la fórmula para su cálculo y los recursos necesarios para su medición.
                  li.mb-0 
                    i.fas.fa-angle-right
                    p.mb-0 
                      b Objetivos y neutros: 
                      | se refiere a definir lo que en realidad se requiere medir, describiendo el fenómeno.               
                  li.mb-0 
                    i.fas.fa-angle-right
                    p.mb-0 
                      b Sistemáticos (periodicidad de análisis): 
                      | se define la temporalidad de medición, con el fin de establecer condiciones para la toma de decisiones.       

    p.mb-5 Teniendo en cuenta lo anterior, las características que deben cumplir los indicadores son:      

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img-7.svg')             

    separador

    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1  Formulación
    p.mb-5 Al momento de formular indicadores, se deberá cumplir con la caracterización del proceso, que va previo a la medición y es donde se hace necesario conocer las características de las actividades que la organización desarrolla; para ello se requiere determinar el detalle de las entradas y salidas de cada proceso, tal y como se muestra en la Figura 1, para luego definir las variables y la fórmula de cálculo. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .titulo-sexto.color-acento-botones(data-aos='fade-right')
          h5 Figura 1
          span Caracterización de proceso

        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-8.svg')   
        figcaption Nota. Tomado y adaptado de Ingenio Empresa (2022). 

    p.mb-5 Es posible concebir indicadores de diferente tipo, (como Ingenio Empresa 2022):

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.d-flex
          .col-lg.fnd-4.izq
            h3.mt-4 Absoluto 
            p.mb-5 Temperatura de 27oC.
          .col-lg.fnd-3-
            h3.mt-4 Razón 
            p.mb-5 Hay 4 camas por cada 6 personas.
          .col-lg.fnd-4
            h3.mt-4 Tasa 
            p.mb-5 La tasa de mortalidad es de 0.2 por cada 1.000 habitantes en un año.
          .col-lg.fnd-3-
            h3.mt-4 Proporción 
            p.mb-5 50 % de los graduados en 2009, están trabajando.
          .col-lg.fnd-4.der
            h3.mt-4 Variación 
            p.mb-5 Las ventas aumentaron 20 % con respecto al año anterior.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img.mb-5(src='@/assets/curso/temas/tema1/img-9.png') 
      .col-lg-8
        TabsA.color-secundario.mb-5
          .tarjeta.fnd-3.p-4(titulo="Absoluto")
            p Un número que dimensiona un evento o fenómeno según su naturaleza.
          .tarjeta.fnd-3.p-4(titulo="Razón")
            p Es el cociente entre dos cantidades que no tienen elementos comunes o cuentan con un atributo de diferencia.
          .tarjeta.fnd-3.p-4(titulo="Tasa")
            p Es el cociente entre dos variables analizadas en un lugar y tiempo específico.
          .tarjeta.fnd-3.p-4(titulo="Proporción")
            p Es la relación entre una cantidad con elementos en común (numerador - subconjunto) y el total de unidades (con o sin elementos en común).
          .tarjeta.fnd-3.p-4(titulo="Variación")
            p Fija dos elementos para establecer qué variación existe entre uno y otro.


    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Elección del indicador 

    p.mb-5 Ahora, con la finalidad de seleccionar los indicadores más adecuados para el sistema de medición y seguimiento de los procesos, es importante tener en cuenta la información establecida por el DANE y presentada en la Figura 2:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos='fade-right')
              h5 Figura 2
              span Criterios para la selección de indicadores
        figure
          img.mb-2(src='@/assets/curso/temas/tema1/img-t.svg') 
          figcaption Nota. DANE (2007), tomado y adaptado de Ingenio Empresa (2022). 

    p.mb-5 Para el proceso de selección del indicador se deben definir las metas de este de acuerdo con las características del proceso, sus actividades, el sector y particularidades de la organización en que se desarrollan, teniendo en cuenta las siguientes consideraciones, con el fin de establecer las metas ligadas a un indicador de gestión:


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-1")
      .row(titulo="Valor de actualidad o histórico")
        .col-md-7.mb-4.mb-md-0
          p Es necesario revisar el valor histórico, porque esta es la forma posible para establecer el grado de variación que se espera para las vigencias presentes y futuras.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/img-10.png')
      .row(titulo="Valor de potencialidad o estándar ")
        .col-md-7.mb-4.mb-md-0
          p Si se considera una gestión eficiente de recursos, ¿cuál podría ser el mejor escenario? De esta forma se pueden obtener valores orientados a una situación posible, en la que se optimicen los recursos disponibles.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/img-11.png')
      .row(titulo="Valor de competencia ")
        .col-md-7.mb-4.mb-md-0
          p Es necesario que las metas contemplen los valores de otras organizaciones del sector (competencia). En este sentido, es importante plantearse preguntas como: ¿cuánto obtiene el principal competidor? y ¿cuánto obtiene el promedio de competidores del sector?
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/img-12.png')
      .row(titulo="Valor de usuario/cliente")
        .col-md-7.mb-4.mb-md-0
          p ¿Cuáles son las expectativas de los usuarios o clientes?, ¿la meta superará su expectativa o estará por debajo de la misma?
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/img-13.png')
      .row(titulo="Valor teórico")
        .col-md-7.mb-4.mb-md-0
          p Tiene relación con la capacidad instalada, determinada por la tecnología existente. Suele estar expresado por el fabricante.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/img-14.png')

    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Fuente de información y frecuencia de recolección 


    p.mb-5 Teniendo en cuenta lo anterior, un sistema de gestión, independientemente de su enfoque, se alimenta de información que es procesada y posteriormente analizada, con el fin de asegurar un proceso de toma de decisiones más efectivo; es necesario velar por la calidad de la información que aportará en los procesos de medición y seguimiento y, para lograrlo, se deben plantear algunos interrogantes como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4.fnd-5
          .h4.px-5 ¿Cuál es el origen de la información que alimenta los indicadores?
          .h4.px-5  ¿Con qué frecuencia se toma?
          .h4.px-5  ¿Cuáles son los mecanismos para recolectarla?
    p.mb-5 Tener claridad al respecto, aportará al fortalecimiento y confiabilidad del sistema de gestión. Algunos ejemplos de fuentes de información, pueden ser:
    .row.justify-content-center.d-flex
      .col-lg.mb-5
          .tarjeta-avatar
            img.mb-5(src='@/assets/curso/temas/tema1/img-15-.svg' alt='AvatarTop')
            .tarjeta.fnd-6.w-100
              p.p-4.py-5 Los informes gubernamentales, donde el sistema se alimenta a través de los sitios web oficiales, de estas entidades.
      .col-lg.mb-5               
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img-16-.svg' alt='AvatarTop')
            .tarjeta.fnd-6.w-100
              p.p-4.py-5  Los miembros de la organización (equipos de trabajo) y a través de la aplicación de encuestas y su posterior análisis.
      .col-lg.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img-17-.svg' alt='AvatarTop')
            .tarjeta.fnd-6.w-100
              p.p-4.py-5 De la satisfacción del cliente, y se obtienen a través de encuestas de satisfacción del servicio y/o producto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4.fnd-7

          p Es vital recordar que la información debe tener una periodicidad para su recolección y análisis; en el caso de informes provenientes de fuentes externas, estará condicionada a los criterios para la generación por parte de las entidades que la originan; cuando se trata de los procesos internos, la organización deberá establecer la pertinencia de los periodos definidos (diario, semanal, mensual, etc.).          
              
    .list.mb-5(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/fab-rom.svg', alt='')
      .list__txt
        h3.mb-0 Responsables del indicador y destino de la información		

    p.mb-5 Una vez definidos los criterios relacionados con las fuentes de información, es imprescindible establecer las responsabilidades asociadas a los indicadores del sistema de gestión, a través de las siguientes elecciones: responsable de la generación de la información, de la recolección de la información, del análisis de la información y de la construcción de reportes o presentación de la información asociada al indicador.
    p.mb-5 A continuación, se presentan los componentes de los diferentes indicadores:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center
          .col-lg-6
            figure.mb-5
                img(src='@/assets/curso/temas/tema1/img-15.png')
          .col-lg-6               
             LineaTiempoD.color-acento-contenido
              p.text-small(numero="1" titulo="Nombre del indicador")  Debe caracterizarse por ser concreto y preciso.
              p.text-small(numero="2" titulo="Sigla")  Es un identificador abreviado para cada indicador y sus atributos, valiéndose de pocos caracteres.
              p.text-small(numero="3" titulo="Objetivo")  Es el propósito de medición que se persigue con el indicador. 
              p.text-small(numero="4" titulo="Conceptos")  Son los conceptos o elementos que se tienen en cuenta para realizar el cálculo del indicador y deben ser explicados. 
              p.text-small(numero="5" titulo="Fórmula de indicador")  Expresión matemática usada para calcular el indicador. 
              p.text-small(numero="6" titulo="Fuente de datos")  Lugar donde se originan los datos requeridos para la fórmula. 
              p.text-small(numero="7" titulo="Unidad de medida")  Unidad en la que será expresado el indicador (porcentaje, unidades de producto, valor monetario, kilogramos, etc.). 
              p.text-small(numero="8" titulo="Responsable")  Funcionario encargado de recolectar los datos. 
              p.text-small(numero="9" titulo="Frecuencia de la toma de datos")  Periodicidad en la que se tomarán los datos, relacionados con el indicador.  
              p.text-small(numero="10" titulo="Sentido")  Relación entre el valor obtenido y el impacto del indicador. 
              p.text-small(numero="11" titulo="Frecuencia de cálculo")  Periodicidad con la que se calcula el indicador. 
              p.text-small(numero="12" titulo="Frecuencia de análisis")  Periodicidad con la que es analizado el indicador, en el proceso de toma de decisiones. 
              p.text-small(numero="13" titulo="Observaciones")  Reflexiones y recomendaciones, relacionadas con el indicador. 


    separador

    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2  Análisis y seguimiento
    p.mb-5 El proceso de análisis de indicadores, guarda relación directa con la definición realizada de los mismos; por tal motivo, la calidad de los indicadores se verá reflejada al momento de analizar sus resultados y, en este momento, se espera que todos los involucrados se encuentren debidamente sensibilizados y capacitados para llevar a cabo el proceso de toma de información, procesamiento o cálculo de indicadores, y su posterior análisis.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4.fnd-5
          p De acuerdo con lo anterior, es posible determinar que los indicadores por sí solos pueden aportar información valiosa; sin embargo, el analizar la información de forma cruzada (correlación), permite enriquecer el proceso y garantizar unos mejores resultados en la toma de decisiones. 

    p.mb-5 Adicional a lo anterior, es importante que el análisis permita identificar la tendencia que presentan los indicadores y si responde a su condición ideal; esta puede ser:

    .row.justify-content-center
      .col-lg-10
        .crd_02.to
          .crd_02__icon.dan
            img(src="@/assets/curso/temas/tema1/img-16.png", alt="alt")          
          .crd_02__txt
            h4 Tendencia a la maximización
            p Para que el indicador tenga un comportamiento ideal, debería presentar crecimiento a través de la línea de tiempo (ventas, clientes, etc.).  
        .crd_02.fnd-8
          .crd_02__icon
            img(src="@/assets/curso/temas/tema1/img-17.png", alt="alt")          
          .crd_02__txt
            h4 Tendencia a la minimización
            p Para que el indicador tenga un comportamiento ideal, debería presentar decrecimiento a través de la línea de tiempo (quejas, desperdicios, etc.).
        .crd_02.mb-5.bo
          .crd_02__icon.dan
            img(src="@/assets/curso/temas/tema1/img-18.png", alt="alt")          
          .crd_02__txt
            h4 Con límites de seguridad
            p Para que el indicador tenga un comportamiento ideal, debería mantenerse dentro de unos límites (conservación, cadena de frío).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4.fnd-7

          p El proceso de verificación de los indicadores tiene relación directa con la tendencia que estos presentan, hecho que permite reconocer si es necesario formular acciones preventivas, correctivas o de mejora; de esta forma, es posible evitar riesgos identificados en la medición, eliminar las posibles causas de tendencias no deseadas o, finalmente, generar unas condiciones que permitan mejorar el desempeño de los indicadores.                                     
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
