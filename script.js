/* ============ EDITA AQUÍ TUS DATOS ============ */
var CV = {
  nombre: "Ruth Soledad Mamani Apaza",
  titulo: "Técnica en Administración de Plataformas y Servicios de Tecnologías de la Información (APSTI)",
  resumen: "Responsable, puntual y con ganas de aprender. Busco mi primera oportunidad laboral en tecnología.",
  perfil: [
    "Técnica egresada del IESTP Santa Lucia, con formación en administración de plataformas y servicios de tecnologías de la información y conocimientos en creación de tiendas virtuales.",
    "Me gusta trabajar en equipo y cumplir con lo que me comprometo. Busco una oportunidad laboral donde aplicar mis conocimientos y seguir creciendo."
  ],
  telefono: "910 530 172",
  whatsapp: "51910530172",          // código de país + número, sin espacios
  correo: "mamaniapazaruth2012@gmail.com",
  ubicacion: "Lampa, Puno, Perú",
  linkedin: "",                      // pon tu enlace o déjalo vacío
  experiencia: [
    { cargo: "Prácticas pre-profesionales", lugar: "IESTP Santa Lucia, Santa Lucia (Lampa)",
      fecha: "Octubre 2025 – Noviembre 2025",
      puntos: [ /* "Escribe aquí lo que hiciste", */ ] }
  ],
  estudios: [
    { titulo: "Técnica en APSTI", lugar: "IESTP Santa Lucia", fecha: "2024 – 2026" }
  ],
  cursos: [ /* "Nombre del curso, institución, año", */ ],
  tecnicas: ["Creación de tiendas virtuales", "Administración de plataformas y servicios TI"],
  personales: ["Trabajo en equipo", "Responsabilidad", "Puntualidad"],
  idiomas: ["Español: nativo"],
  referencias: "Disponibles a solicitud."
};
/* ============ FIN DE TUS DATOS ============ */

(function(){
  var $=function(id){return document.getElementById(id)};
  var chips=function(a){return '<ul class="chips">'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'};
  var item=function(t,o,w,p){return '<article class="item"><h3>'+t+'</h3><div class="org">'+o+'</div><span class="when">'+w+'</span>'+
    (p&&p.length?'<ul>'+p.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>':'')+'</article>'};

  document.title=CV.nombre+' | Técnica en APSTI';
  $('name').textContent=CV.nombre;
  $('role').textContent=CV.titulo;
  $('lead').textContent=CV.resumen;
  var wa='https://wa.me/'+CV.whatsapp+'?text='+encodeURIComponent('Hola Ruth, vi tu currículum y me gustaría conversar contigo.');
  $('wa').href=wa;$('wa2').href=wa;
  $('mail').href='mailto:'+CV.correo;$('mail').textContent=CV.correo;
  $('about').innerHTML=CV.perfil.map(function(p){return '<p>'+p+'</p>'}).join('');
  $('facts').innerHTML='<dt>Ubicación</dt><dd>'+CV.ubicacion+'</dd><dt>Teléfono</dt><dd>'+CV.telefono+'</dd><dt>Correo</dt><dd>'+CV.correo+'</dd>'+
    (CV.linkedin?'<dt>LinkedIn</dt><dd><a href="'+CV.linkedin+'" target="_blank" rel="noopener">Ver perfil</a></dd>':'');
  $('jobs').innerHTML=CV.experiencia.map(function(j){return item(j.cargo,j.lugar,j.fecha,j.puntos)}).join('');
  $('studies').innerHTML=CV.estudios.map(function(s){return item(s.titulo,s.lugar,s.fecha)}).join('');
  if(CV.cursos.length){$('coursesBox').innerHTML='<div class="box"><h3>Cursos y certificaciones</h3><ul style="margin:0;padding-left:20px">'+CV.cursos.map(function(c){return '<li>'+c+'</li>'}).join('')+'</ul></div>'}
  $('skills').innerHTML=
    '<div class="box"><h3>Técnicas</h3>'+chips(CV.tecnicas)+'</div>'+
    '<div class="box"><h3>Personales</h3>'+chips(CV.personales)+'</div>'+
    '<div class="box"><h3>Idiomas</h3>'+chips(CV.idiomas)+'</div>';
  $('cta').textContent='Estoy disponible para prácticas, trabajo de medio tiempo o tiempo completo. Escríbeme y conversamos.';
  $('meta').textContent='Referencias: '+CV.referencias+'  ·  '+CV.ubicacion;
  $('foot').textContent='© '+new Date().getFullYear()+' '+CV.nombre;
})();
