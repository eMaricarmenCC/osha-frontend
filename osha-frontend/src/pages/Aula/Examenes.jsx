import React from 'react';
import { Table } from '../../components/Table/Table';
import examenColumns from '../../utils/Columns/examenColumns';

function Examenes() {
  return (
    <div className="px-10 py-10 w-full h-full">
      <h3 className="text-primary">Exámenes</h3>
      <Table
        nombreID={'examcod'}
        columns={examenColumns()}
        data={examenes}
        nombre={'examenes'}
      />
    </div>
  )
}
export default Examenes