interface CenikiModel {
    id: number;
    naziv: string;
    cena: number;
    avtokamp: number;
    created_at: Date;
    updated_at: Date;
}

export class Cenik implements CenikiModel {

    private _id: number;
    private _naziv: string;
    private _cena: number;
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

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get cena(): number {
      return this._cena;
    }

    set cena(value: number) {
      this._cena = value;
    }

    get avtokamp(): number {
      return this._avtokamp;
    }

    set avtokamp(value: number) {
      this._avtokamp = value;
    }
}
