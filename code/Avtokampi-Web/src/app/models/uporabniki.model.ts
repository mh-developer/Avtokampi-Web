interface UporabnikInterface {
    id: number;
    ime: string;
    priimek: string;
    slika: Blob;
    telefon: string;
    email: string;
    geslo: string;
    pravice: number;
    created_at: Date;
    updated_at: Date;
}

export class Uporabnik implements UporabnikInterface{

    private _id: number;
    private _ime: string;
    private _priimek: string;
    private _slika: Blob;
    private _telefon: string;
    private _email: string;
    private _geslo: string;
    private _pravice: number;
    private _created_at: Date;
    private _updated_at: Date;

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

  get id(): number {
      return this._id;
    }

    set id(value: number) {
      this._id = value;
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

    get geslo(): string {
      return this._geslo;
    }

    set geslo(value: string) {
      this._geslo = value;
    }

    get pravice(): number {
      return this._pravice;
    }

    set pravice(value: number) {
      this._pravice = value;
    }
}
