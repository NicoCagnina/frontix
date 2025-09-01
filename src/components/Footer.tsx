export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-2">Oficinas comerciales</h4>
          <p>Santa Fe 2585, Rosario Argentina</p>
          <p>Piso 4, oficina 38</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Asistencia técnica</h4>
          <p>+54 9 3415005178</p>
          <p>servicio@frontix.com.ar</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">© 2025 Frontix</h4>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
