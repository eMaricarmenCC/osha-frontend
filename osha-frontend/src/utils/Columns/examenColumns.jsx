import { useMemo } from 'react';
import { SelectColumnFilter } from '../../components/Table/SelectColumnFilter';

export default function examenColumns() {
    const columns = useMemo(
        () => [
            {
                Header: "Código",
                accesor: "",
            },
            {
                Header: "Curso",
                accesor: "",
            },
            {
                Header: "Nota",
                accesor: "",
            },
            {
                Header: "Estado",
                accesor: "",
                Filter: SelectColumnFilter,
                filter: 'includes',
                cell: ({ value }) => (
                    <div className=''>
                        <p> {value} </p>
                    </div>
                )
            },
            {
                Header: "Intentos",
                accesor: "",
            },
        ]
    )
    return columns;
}