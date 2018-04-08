export default waldos =>
  waldos.map(s => s.restored).join(' ').replace(/~/g, '')
