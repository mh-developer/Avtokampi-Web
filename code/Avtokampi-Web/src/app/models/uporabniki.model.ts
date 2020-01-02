interface UporabnikInterface {
    uporabnikId: number;
    ime: string;
    priimek: string;
    slika: Blob;
    telefon: string;
    email: string;
    pravice: number;
    created_at: Date;
    updated_at: Date;
    token: string;
}

export class Uporabnik implements UporabnikInterface{

    private _uporabnikId: number;
    private _ime: string;
    private _priimek: string;
    private _slika: Blob;
    private _telefon: string;
    private _email: string;
    private _pravice: number;
    private _created_at: Date;
    private _updated_at: Date;
    private _token: string;

  get created_at(): Date {
    return this._created_at;
  }

  set created_at(value: Date) {
    this._created_at = value;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  set updated_at(value: Date) {
    this._updated_at = value;
  }

  get uporabnikId(): number {
      return this._uporabnikId;
    }

    set uporabnikId(value: number) {
      this._uporabnikId = value;
    }

    get ime(): string {
      return this._ime;
    }

    set ime(value: string) {
      this._ime = value;
    }

    get priimek(): string {
      return this._priimek;
    }

    set priimek(value: string) {
      this._priimek = value;
    }

    get slika(): Blob {
      return this._slika;
    }

    set slika(value: Blob) {
      this._slika = value;
    }

    get telefon(): string {
      return this._telefon;
    }

    set telefon(value: string) {
      this._telefon = value;
    }

    get email(): string {
      return this._email;
    }

    set email(value: string) {
      this._email = value;
    }

    get pravice(): number {
      return this._pravice;
    }

    set pravice(value: number) {
      this._pravice = value;
    }

    get token(): string {
      return this._token;
    }

    set token(value: string) {
      this._token = value;
    }
}
