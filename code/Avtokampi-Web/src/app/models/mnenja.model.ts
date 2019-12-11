interface MnenjaModel {
    id: number;
    mnenje: string;
    ocena: number;
    uporabnik: number;
    avtokamp: number;
    created_at: Date;
    updated_at: Date;
}

export class Mnenje implements MnenjaModel {
    private _id: number;
    private _mnenje: string;
    private _ocena: number;
    private _uporabnik: number;
    private _avtokamp: number;
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

    get mnenje(): string {
      return this._mnenje;
    }

    set mnenje(value: string) {
      this._mnenje = value;
    }

    get ocena(): number {
      return this._ocena;
    }

    set ocena(value: number) {
      this._ocena = value;
    }

    get uporabnik(): number {
      return this._uporabnik;
    }

    set uporabnik(value: number) {
      this._uporabnik = value;
    }

    get avtokamp(): number {
      return this._avtokamp;
    }

    set avtokamp(value: number) {
      this._avtokamp = value;
    }
}
