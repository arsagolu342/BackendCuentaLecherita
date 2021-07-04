export interface Payment {
    idPayment?: string,
    fechaPago: string,
    subtotal: string,
    total: string,
    idmilkman: string,
    description: string
    
}

export function Payment(data: any, id?: string) {
    const { fechaPago, subtotal, total,idmilkman,description } = data;
    let object: Payment = {
        idPayment: id,
        fechaPago: fechaPago,
        subtotal: subtotal,
        total: total,
        idmilkman: idmilkman,
        description: description
        
    };
    return object;
}
