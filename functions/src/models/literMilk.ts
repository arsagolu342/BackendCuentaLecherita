export interface LiterMilk {
    idliterMilk?: string,
    fechaEntrega: string,
    subtotalLiter: string,
    totalLiter: string,
    idmilkman: string,
    description: string
    
}

export function LiterMilk(data: any, id?: string) {
    const { fechaEntrega, subtotalLiter, totalLiter,idmilkman,description } = data;
    let object: LiterMilk = {
        idliterMilk: id,
        fechaEntrega: fechaEntrega,
        subtotalLiter: subtotalLiter,
        totalLiter: totalLiter,
        idmilkman: idmilkman,
        description: description
        
    };
    return object;
}
