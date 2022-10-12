import React from 'react';

export type traductor = 'letra' | 'numero';

export interface Translate {
    id: number,
    name: string
}

export interface traductorModel{
    NumeroParaTraducir: Translate[];
    traducir: (title: string) => void;
}

const TraductorContext = React.createContext<traductorModel>({

    NumeroParaTraducir: [],
    traducir: () => {}
})

export default TraductorContext;