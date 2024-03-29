function jsonACSV(jsonDatos) {
    const csvRows = [];
    const headers = Object.keys(jsonDatos[0]);
    csvRows.push(headers.join(',')); // Encabezados
  
    for (const row of jsonDatos) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }
  
    return csvRows.join('\n');
  }
  
  const datos = [
    { nombre: "Ignacio", edad: 31 },
    { nombre: "Thais", edad: 27 }
  ];
  
  console.log(jsonACSV(datos));
