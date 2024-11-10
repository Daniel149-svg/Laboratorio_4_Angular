export class vehiculo{
    marca: string = "";
    modelo: string = "";
    Nmotor: string = "";
    color: string;
    trasmicion: string;
    anio: number;
    valor: number = 0;
    id: any;
  

    constructor(
        marca:string,
        modelo:string,
        Nmotor: string,
        color: string,
        trasmicion: string,
        anio: number,
        valor: number
    ){
        this.marca = marca;
        this.modelo = modelo;
        this.Nmotor = Nmotor;
        this.color = color;
        this.trasmicion = trasmicion;
        this.anio = anio;
        this.valor = valor;
    }
}