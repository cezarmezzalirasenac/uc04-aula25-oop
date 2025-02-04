class Forma {

  private _nome: string;
  protected _dimensoes: number[];
  protected _lados: number;

  constructor(dimensoes: number[], lados: number) {
    // definir o nome da forma pela quantidade de lados
    // use um método privado
    this._nome = ?;
    this._dimensoes = dimensoes;
    this._lados = lados;
  }

  public get nome() {
    return this._nome;
  }
  public get dimensoes() {
    return this._dimensoes;
  }

  public get lados() {
    return this._lados;
  }
}

export { Forma };
