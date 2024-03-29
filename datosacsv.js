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
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 }
  ];
  
  console.log(jsonACSV(datos));