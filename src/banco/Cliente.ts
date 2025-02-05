class Cliente {
  private _nome: string;
  private _documento?: string | number;
  private _email: string;
  private _dataNascimento: Date;
  private _tipoDocumento?: "CPF" | "CNPJ";

  constructor(nome: string, email: string, dataNascimento: Date) {
    this._nome = nome;
    this._email = email;
    this._dataNascimento = dataNascimento;
  }

  // Declaro as assinaturas possíveis
  setDocumento(documento: string): void;
  setDocumento(documento: number): void;

  public setDocumento(documento: string | number): void {
    if (typeof documento === "string") {
      this._tipoDocumento = "CNPJ";
    } else {
      this._tipoDocumento = "CPF";
    }
    this._documento = documento;
  }

  public setCPF(documento: number) {
    this._tipoDocumento = "CPF"
    this._documento = documento;
  }
}

export { Cliente };
